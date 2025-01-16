<template>
    <div class="flex flex-col gap-4 p-8">
        <h1 class="text-2xl font-bold">Registro de datos para nuevo animal</h1>
        <form class="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-y-12 pt-8 text-primary max-w-7xl">
            <FloatLabel class="col-span-12 md:col-span-6 xl:col-span-3 relative">
                <InputText class="w-full" v-model="newAnimal.name" id="name" @focus="$v.name?.$reset()" />
                <ValidationMessage :validator="$v" property="name" placeholder="Nombre común del animal" />
            </FloatLabel>
            <FloatLabel class="col-span-12 md:col-span-6 xl:col-span-3 relative">
                <InputText class="w-full" v-model="newAnimal.scientific_name" id="scientific_name"
                    @focus="$v.scientific_name?.$reset()" />
                <ValidationMessage :validator="$v" property="scientific_name" placeholder="Nombre Científico" />
            </FloatLabel>
            <FloatLabel class="col-span-12 xl:col-span-6">
                <Dropdown id="categoryId" class="!w-full" inputClass="!py-2" size="large"
                    v-model="newAnimal.categoryId" :options="categories" optionValue="_id" optionLabel="name"
                    filter :auto-filter-focus="true" @focus="$v.categoryId?.$reset()" />
                <ValidationMessage :validator="$v" property="categoryId"
                    placeholder="Categoría/Grupo" />
            </FloatLabel>
            <div class="col-span-12">
                <ValidationMessage :validator="$v" property="description" placeholder="Descripción del animal" />
                <EditorBox id="description" class="w-full" maxHeight="20rem" v-model="newAnimal.description"
                    :validator="$v" field="description" :maxLength="1500" />
            </div>
        </form>
    </div>
</template>
<script setup lang="ts">
import { animalRules } from '@/rules/animal.rules';
import useAnimal from '@/services/animal.service';
import useCategory from '@/services/category.service';
import useVuelidate from '@vuelidate/core';
import { onMounted } from 'vue';


const { newAnimal } = useAnimal();
const { categories, getCategories, query: catQuery } = useCategory();


const $v = useVuelidate(animalRules, newAnimal);

onMounted(() => {
    catQuery.fields(["name","_id"]).order("name");
    getCategories().then(() => {
    })
})

</script>