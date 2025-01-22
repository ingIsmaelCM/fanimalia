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
                <ValidationMessage :validator="$v" property="status_date" placeholder="Fecha de actualización" />
            </FloatLabel>
            <FloatLabel class="col-span-12 xl:col-span-8 relative">
                <InputText class="w-full" v-model="newAnimal.status_reason" id="status_reason"
                    @focus="$v.status_reason?.$reset()" />
                <ValidationMessage :validator="$v" property="status_reason" placeholder="Causas del estado actual" />
            </FloatLabel>

            <FloatLabel class="col-span-6 md:col-span-4 xl:col-span-4">
                <Dropdown id="taxonomy" class="!w-full" inputClass="!py-2" size="large" v-model="newAnimal.taxonomy"
                    :options="taxonomies" optionValue="value" optionLabel="label" filter :auto-filter-focus="true"
                    :class="{ '!ring-2 !ring-red-400': $v.taxonomy?.$error }" @focus="$v.taxonomy?.$reset()" show-clear>
                    <template #header>
                        <CreateTaxonomy :validation="$v" :prev-taxonomy="newAnimal.taxonomy"
                            @onUpdateDependency="(taxo: Taxonomy) => onUpdateDependency().onTaxonomy(taxo)" />
                    </template>
                </Dropdown>
                <ValidationMessage :validator="$v" property="taxonomy" placeholder="Taxón del animal" />
            </FloatLabel>
            <FloatLabel class="col-span-6 md:col-span-4 xl:col-span-4">
                <Dropdown id="habitat" class="!w-full " inputClass="!py-2" size="large" v-model="newAnimal.habitat"
                    :options="habitats" optionValue="value" optionLabel="label" filter :auto-filter-focus="true"
                    :class="{ '!ring-2 !ring-red-400': $v.habitat?.$error }" @focus="$v.habitat?.$reset()" show-clear>
                    <template #header>
                        <CreateHabitat :validation="$v" :prev-habitat="newAnimal.habitat"
                            @onUpdateDependency="(habit: Habitat) => onUpdateDependency().onHabitat(habit)" />
                    </template>
                </Dropdown>
                <ValidationMessage :validator="$v" property="habitat" placeholder="Hábitat del animal" />
            </FloatLabel>
            <FloatLabel class="col-span-6 md:col-span-4 xl:col-span-4">
                <Dropdown id="diet" class="!w-full" inputClass="!py-2" size="large" v-model="newAnimal.diet"
                    :options="diets" optionValue="value" optionLabel="label" filter :auto-filter-focus="true"
                    :class="{ '!ring-2 !ring-red-400': $v.diet?.$error }" @focus="$v.diet?.$reset()" show-clear>
                    <template #header>
                        <CreateDiet :validation="$v" :prev-diet="newAnimal.diet"
                            @onUpdateDependency="(diet: Diet) => onUpdateDependency().onDiet(diet)" />
                    </template>
                </Dropdown>
                <ValidationMessage :validator="$v" property="diet" placeholder="Dieta del animal" />
            </FloatLabel>
            <div class="col-span-6 md:col-span-4 items-center xl:col-span-4 flex ">
                <SingleUpload class="w-full" accept="image/*" @onUpload="onUpload">
                    <template #button>
                        <Button severity="contrast" class=" text-white px-4 py-4 rounded-lg w-full" :class="{
                            'border-2 border-red-500': $v.image?.$error,
                            'bg-transparent ring-2 ring-secondary ring-offset-1 ': uploadLabel != defaultUploadLabel,
                            'bg-secondary ring-1 ring-primary ring-offset-1': uploadLabel == defaultUploadLabel
                        }" @mouseover="onHoverFileLabel" @mouseleave="onHoverFileLabel">
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
                    :validator="$v" field="description" :maxLength="1500" :key="`${key}`+newAnimal._id" />
            </div>
            <div class="col-span-12 flex justify-end">
                <Button
                    class="w-full md:w-max bg-primary text-secondary font-bold uppercase px-4 py-3 flex space-x-2 items-center"
                    severity="contrast" @click="onSubmitForm">
                    <IconAction action="save" icon="mdi:content-save-check-outline" class="text-2xl text-secondary" />
                    <span>{{newAnimal._id ? 'Actualizar' : 'Registrar'}}</span>
                </Button>
            </div>
        </form>
    </div>
</template>
<script setup lang="ts">
import CreateDiet from '@/components/animal/CreateDiet.vue';
import CreateHabitat from '@/components/animal/CreateHabitat.vue';
import CreateTaxonomy from '@/components/animal/CreateTaxonomy.vue';
import { animalRules } from '@/rules/animal.rules';
import useAnimal from '@/services/animal.service';
import useCategory from '@/services/category.service';
import useDependency from '@/services/dependency.service';
import { AnimalStatus } from '@/types/enums';
import { Animal, Diet, Habitat, Photo, Taxonomy } from '@/types/types';
import useVuelidate from '@vuelidate/core';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const { newAnimal, saveAnimal, findAnimal } = useAnimal();
const { categories, getCategories, query: catQuery } = useCategory();

const route = useRoute();
const router = useRouter();

const { getTaxonomies, onUpdateTaxonomy, taxonomies } = useDependency();
const { getHabitats, onUpdateHabitat, habitats } = useDependency();
const { getDiets, onUpdateDiet, diets } = useDependency();

const statuses = ref(Object.values(AnimalStatus));


const key = ref(0);

const animalId = route.params.id;

const $v = useVuelidate(animalRules, newAnimal);

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

const onUpdateDependency = () => {
    return {
        onTaxonomy: (taxonomy: Taxonomy) => {
            newAnimal.value.taxonomy = taxonomy;
            onUpdateTaxonomy(taxonomy);
        },
        onHabitat: (habitat: Habitat) => {
            newAnimal.value.habitat = habitat;
            onUpdateHabitat(habitat);
        },
        onDiet: (diet: Diet) => {
            newAnimal.value.diet = diet;
            onUpdateDiet(diet);
        },
    }
}

onMounted(() => {
    catQuery.fields(["name", "_id"]).order("name");
    getCategories().then(() => {
    })
    getTaxonomies();
    getHabitats();
    getDiets();
    if (animalId) {
        findAnimal(animalId as string).then((res) => {
            newAnimal.value = {
                _id: res._id,
                name: res.name,
                scientific_name: res.scientific_name,
                description: res.description,
                image: res.image,
                categoryId: res.categoryId,
                status: res.status,
                status_source: res.status_source,
                status_reason: res.status_reason,
               ...(res.status_date && { status_date: res.status_date }),
                taxonomy: res.taxonomy,
                habitat: res.habitat,
                diet: res.diet,
                reproduction: res.reproduction,
                relatedIds: res.relatedIds,
                preysId: res.preysId,
                predatorsId: res.predatorsId,
            };
            if(res.image){
                const imageName = res.image.split('/').pop();
                const fileNameEllipsis = imageName.length > 25 ? imageName.substring(0, 25) + '[...]' : imageName.image;
                const extension = res.image.split('.').pop();
                uploadLabel.value = `${fileNameEllipsis}.${extension}`;
            }
        })
    }
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
    console.log($v.value.$errors);
    if ($v.value.$invalid) {
        return
    }
    saveAnimal().then((res) => {
        if (res.status === 201) {
           if(animalId){
               router.push({name: 'animal', params: {id: res._id}});
           }
           $v.value.$reset();
            newAnimal.value = {} as Animal;
            key.value = key.value + 1;
        }

    })
}



</script>