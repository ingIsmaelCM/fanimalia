<template>
    <div class="flex flex-col gap-4 p-4 md:p-8 max-w-5xl mx-auto">
        <h1 class="text-2xl font-bold">Registro de datos</h1>
        <form class="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-y-12 pt-8 text-primary ">
            <FloatLabel class="col-span-12 md:col-span-6 xl:col-span-4 relative">
                <InputText class="w-full" v-model="newAnimal.name" id="name" @focus="$v.name?.$reset()" />
                <ValidationMessage :validator="$v" property="name" placeholder="Nombre común del animal" />
            </FloatLabel>
            <FloatLabel class="col-span-12 md:col-span-6 xl:col-span-4 relative">
                <InputText class="w-full" v-model="newAnimal.scientific_name" id="scientific_name"
                    @focus="$v.scientific_name?.$reset()" />
                <ValidationMessage :validator="$v" property="scientific_name" placeholder="Nombre Científico" />
            </FloatLabel>
            <FloatLabel class="col-span-6 xl:col-span-4">
                <Dropdown id="categoryId" class="!w-full" inputClass="!py-2" size="large" v-model="newAnimal.categoryId"
                    :options="categories" optionValue="_id" optionLabel="name" filter :auto-filter-focus="true"
                    @focus="$v.categoryId?.$reset()" />
                <ValidationMessage :validator="$v" property="categoryId" placeholder="Categoría/Grupo" />
            </FloatLabel>
            <FloatLabel class="col-span-6 xl:col-span-4">
                <Dropdown id="status" class="!w-full" inputClass="!py-2" size="large" v-model="newAnimal.status"
                    :options="statuses" filter :auto-filter-focus="true" @focus="$v.status?.$reset()" />
                <ValidationMessage :validator="$v" property="status" placeholder="Estado actual" />
            </FloatLabel>
            <FloatLabel class="col-span-6 md:col-span-6 xl:col-span-8 relative">
                <InputText class="w-full" v-model="newAnimal.status_source" id="status_source"
                    @focus="$v.status_source?.$reset()" />
                <ValidationMessage :validator="$v" property="status_source" placeholder="Fuente de información" />
            </FloatLabel>
            <FloatLabel class="col-span-6 xl:col-span-4">
                <Calendar class="!w-full" inputClass="!w-full !py-2.5" :touchUI="false" id="status_date"
                    v-model="newAnimal.status_date" @focus="$v.status_date?.$reset()" />
                <ValidationMessage :validator="$v" property="status_date"
                    placeholder="Fecha de actualización" />
            </FloatLabel>
            <FloatLabel class="col-span-12 xl:col-span-8 relative">
                <InputText class="w-full" v-model="newAnimal.status_source" id="status_source"
                    @focus="$v.status_source?.$reset()" />
                <ValidationMessage :validator="$v" property="status_source" placeholder="Causas del estado actual" />
            </FloatLabel>

            <FloatLabel class="col-span-6 md:col-span-4 xl:col-span-4">
                <Dropdown id="taxonomy" class="!w-full" inputClass="!py-2" size="large" v-model="newAnimal.taxonomy"
                    :options="taxonomies" optionValue="value" optionLabel="label" filter :auto-filter-focus="true"
                    @focus="$v.taxonomy?.$reset()" show-clear>
                    <template #header>
                        <CreateTaxonomy :validation="$v" :prev-taxonomy="newAnimal.taxonomy"
                            @onUpdateTaxonomy="onUpdateTaxonomy" />
                    </template>
                </Dropdown>
                <ValidationMessage :validator="$v" property="taxonomy" placeholder="Taxón del animal" />
            </FloatLabel>
            <div class="col-span-6 md:col-span-4 items-center xl:col-span-2 flex ">
                <SingleUpload class="w-full" accept="image/*" @onUpload="onUpload">
                    <template #button>
                        <Button severity="contrast" class="w-full  text-white px-4 py-4 rounded-lg"
                            :class="uploadLabel != defaultUploadLabel ? 'bg-transparent ring-2 ring-secondary ring-offset-1 ' : 'bg-secondary'"
                            @mouseover="onHoverFileLabel" @mouseleave="onHoverFileLabel">
                            <div class="ellipsis">
                                {{ uploadLabel }}
                            </div>
                        </Button>
                    </template>
                </SingleUpload>
            </div>
            <div class="col-span-12">
                <ValidationMessage :validator="$v" property="description" placeholder="Descripción del animal" />
                <EditorBox id="description" class="w-full" maxHeight="20rem" v-model="newAnimal.description"
                    :validator="$v" field="description" :maxLength="1500" />
            </div>
            <div class="col-span-12 flex justify-end">
                <Button
                    class="w-full md:w-max bg-primary text-secondary font-bold uppercase px-4 py-3 flex space-x-2 items-center"
                    severity="contrast" @click="onSubmitForm">
                    <IconAction action="save" icon="mdi:content-save-check-outline" class="text-2xl text-secondary" />
                    <span>Registrar</span>
                </Button>
            </div>
        </form>
    </div>
</template>
<script setup lang="ts">
import CreateTaxonomy from '@/components/animal/CreateTaxonomy.vue';
import SingleUpload from '@/components/common/SingleUpload.vue';
import { animalRules } from '@/rules/animal.rules';
import useAnimal from '@/services/animal.service';
import useCategory from '@/services/category.service';
import useTaxonomy from '@/services/taxonomy.service';
import { AnimalStatus } from '@/types/enums';
import { Animal, Photo, Selectable, Taxonomy } from '@/types/types';
import useVuelidate from '@vuelidate/core';
import { onMounted, Ref, ref } from 'vue';


const { newAnimal, saveAnimal } = useAnimal();
const { categories, getCategories, query: catQuery } = useCategory();
const { getTaxonomies } = useTaxonomy();
const statuses = ref(Object.values(AnimalStatus));
const taxonomies: Ref<Selectable<Taxonomy>[]> = ref([]);




const $v = useVuelidate(animalRules, newAnimal);
console.log(animalRules);

const defaultUploadLabel = ref('Seleccione una foto');
const uploadLabel = ref(defaultUploadLabel.value);

const onUpload = (photo: Photo | null) => {
    if (!photo) {
        newAnimal.value.image = '';
        uploadLabel.value = defaultUploadLabel.value;
        return;
    }

    newAnimal.value.image = photo.url;
    const fileNameEllipsis = photo.name.length > 20 ? photo.name.substring(0, 20) + '[...]' : photo.name;
    uploadLabel.value = `${fileNameEllipsis}.${photo.extension}`;
}

const onUpdateTaxonomy = (taxonomy: Taxonomy) => {
    newAnimal.value.taxonomy = taxonomy;
    if (Object.keys(taxonomy).length <= 1) {
        return
    }
    if (!taxonomies.value.find((row) => row.value._id === taxonomy._id)) {
        taxonomies.value.push({ value: taxonomy, label: taxonomy.specie || 'Nuevo Taxón' });
    } else {
        taxonomies.value = taxonomies.value.map((row) => {
            if (row.value._id === taxonomy._id) {
                row.value = taxonomy;
                row.label = taxonomy.specie || 'Nuevo Taxón';
            }
            return row;
        })
    }
}

onMounted(() => {
    catQuery.fields(["name", "_id"]).order("name");
    getCategories().then(() => {
    })
    getTaxonomies().then((res) => {
        taxonomies.value = res.map((row: { _id: string, taxonomy: Taxonomy }) =>
            ({ value: row.taxonomy, label: row.taxonomy.specie }));
    })
})

const onHoverFileLabel = () => {
    if (newAnimal.value.image?.length > 3) {
        if (uploadLabel.value === defaultUploadLabel.value) {
            uploadLabel.value = `${newAnimal.value.image.substring(0, 20)}[...].${newAnimal.value.image.substring(newAnimal.value.image.length - 3)}`
        } else {
            uploadLabel.value = defaultUploadLabel.value;
        }
    }
}

const onSubmitForm = () => {
    $v.value.$touch();
    if ($v.value.$invalid) {
        return
    }
    saveAnimal().then((res) => {
        newAnimal.value = {} as Animal;
        console.log('saved: ', res);
    })
}



</script>