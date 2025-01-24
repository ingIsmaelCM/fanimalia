<template>
     <div class="grid grid-cols-1 gap-8">
        <Fieldset v-for="category in categories" :legend="category.name" :key="category._id"
            :toggleable="categories.length > 1">
            <template #legend>
                <div class="flex items-center justify-between w-full">
                    <h1 class="md:text-xl xl:text-2xl">{{ category.name }}</h1>
                    <router-link :to="getPath(category)" v-if="category.animals.length > 0"
                        class="text-sm text-gray-200 hover:text-accent hover:underline">
                        Ver todos
                    </router-link>
                </div>
            </template>
            <div class="grid grid-cols-12 gap-y-6 md:gap-2  pt-4" v-if="category.animals.length > 0">
                <AnimalCard v-for="animal in category.animals" :key="animal._id" :animal="animal"
                    class="col-span-12 md:col-span-4 xl:col-span-3 shadow-sm shadow-gray-800 border border-gray-600" />
            </div>
            <NotAnimalFound v-else />
        </Fieldset>
    </div>
</template>
<script setup lang="ts">
import AnimalCard from '@/components/animal/AnimalCard.vue';
import useCategory from '@/services/category.service';
import { Category } from '@/types/types';
import { inject, onMounted, Ref } from 'vue';

const {getCategories, categories, query} = useCategory();
const isMobile: Ref<boolean> = inject<Ref<boolean>>('isMobile')!;

const ANIMAL_RELATION = 'animals';
const ANIMAL_LIMIT = isMobile.value ? 4 : 8;

const getPath = (cat: Category) => {
    return { name: 'animals', 
    query: { categoryId: cat._id, categoryName: cat.name } }
}

onMounted(() => {
    query.include(`${ANIMAL_RELATION}:${ANIMAL_LIMIT}`);
    getCategories().then(() => {
        categories.value.sort((a, b) => b.animals.length - a.animals.length);
    });
})

</script>