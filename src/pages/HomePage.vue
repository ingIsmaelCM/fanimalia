<template>
    <div class="   relative  pt-[18rem] md:pt-[30rem] grid grid-cols-1 gap-8 py-8">
        <div class="parallax absolute top-0 left-0 w-full h-1/2 flex py-4 md:p-8 md:pt-[14dvh]" v-if="animal._id"
            :key="animal._id">
            <el-image :src="animal.image" fit="cover" class="fixed top-0 left-0 w-full h-screen z-0 transitionable"
                loading="lazy" />
            <div class="flex flex-col pt-8 md:pt-0">
                <div class="absolute top-0 left-0 w-full h-full bg-dark bg-opacity-80 z-10 difuse "></div>
                <div class="p-4 pt-8 md:p-8 flex flex-col justify-center items-start  max-w-xl  z-20"
                    id="home-parallax">
                    <router-link :to="{ name: 'animal', params: { id: animal._id } }" class="hover:underline">
                        <h1 class="text-2xl md:text-4xl font-bold text-center text-accent">
                            {{ animal.name }}
                        </h1>
                    </router-link>
                    <h1 class="text-xl md:text-2xl font-semibold italic text-center shadow-xl">
                        {{ animal.scientific_name }}
                    </h1>
                    <span class="mt-4 !text-lg md:!text-xl ql-container"
                        :class="isMobile ? 'line-clamp-3 ' : 'line-clamp-5'" v-html="animal.description">
                    </span>

                </div>
            </div>
        </div>
        <div class=" md:py-8 ">
            <HomeBanner :animals="animals" @onSelectAnimal="onSelectAnimal" />
        </div>
        <div class="grid grid-cols-2 md:grid-cols-7 gap-4 w-full h-[calc(22rem)] md:[calc(11rem)] overflow-hidden overflow-y-auto no-scrollbar">
            <CategoryCard v-for="category in categories" :key="category._id" :category="category" />
        </div>
        <AnimalGeneral />

    </div>
</template>
<script setup lang="ts">
import CategoryCard from '@/components/home/CategoryCard.vue';
import HomeBanner from '@/components/home/HomeBanner.vue';
import useAnimal from '@/services/animal.service';
import useCategory from '@/services/category.service';
import { Animal } from '@/types/types';
import { inject, onBeforeMount, ref, Ref } from 'vue';
import AnimalGeneral from '../components/animal/AnimalGeneral.vue';

const isMobile: Ref<boolean> = inject<Ref<boolean>>('isMobile')!;

const { animals, getAnimals, query: animalQuery } = useAnimal();
const { categories, getCategories, query: catQuery } = useCategory();
const animal: Ref<Animal> = ref({} as Animal);

const onSelectAnimal = (id: Animal['_id']) => {
    animal.value = animals.value.find((animal) => animal._id === id) || animal.value;
}

onBeforeMount(() => {
    animalQuery.limit(10).include("category").order('random').page(1);
    getAnimals().then(() => {
        animal.value = animals.value[0] || {} as Animal;
    })
    catQuery.page(1).limit(100);
    getCategories().then(() => {
    })

})
</script>