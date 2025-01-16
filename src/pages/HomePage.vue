<template>
    <div class="grid grid-cols-1 gap-8 py-8 pt-[18rem] md:pt-[30rem]   relative ">

        <div class="parallax absolute top-0 left-0 w-full h-1/2 flex p-8 md:pt-[14dvh]" :key="animal._id">
            <el-image :src="useGlobalStore().getImage(animal.photos?.[0]?.url || animal.category?.image)" fit="cover"
                class="fixed top-0 left-0 w-full z-0" loading="lazy" />
            <div class="flex flex-col " >
                <div class="absolute top-0 left-0 w-full h-full bg-dark bg-opacity-80 z-10 difuse "></div>
                <div class="p-4 pt-8 md:p-8 flex flex-col justify-center items-start  max-w-xl  z-20" id="home-parallax">
                    <router-link v-if="animal._id" :to="{ name: 'animal', params: { id: animal._id } }"
                        class="mt-4 ml-auto z-40 top-4 hover:scale-110 transition-all duration-500 ease-in-out">
                        <Button size="large"
                            class="w-full max-w-xs !bg-accent text-primary uppercase font-bold px-8">
                            Ver detalles
                        </Button>
                    </router-link>
                    <h1 class="text-2xl md:text-4xl font-bold text-center text-accent">
                        {{ animal.name }}
                    </h1>
                    <h1 class="text-xl md:text-2xl font-semibold italic text-center shadow-xl">
                        {{ animal.scientific_name }}
                    </h1>
                    <span class="mt-4 text-lg md:text-xl" :class="isMobile ? 'line-clamp-3 ' : 'line-clamp-5'">
                        {{ animal.description }}
                    </span>
                  
                </div>
            </div>
        </div>
        <div class=" md:py-8 ">
            <HomeBanner :animals="animals" @onSelectAnimal="onSelectAnimal" />
        </div>
        <div class="grid grid-cols-2 md:grid-cols-7 gap-4">
            <CategoryCard v-for="category in categories" :key="category._id" :category="category" />
        </div>

    </div>
</template>
<script setup lang="ts">
import CategoryCard from '@/components/home/CategoryCard.vue';
import HomeBanner from '@/components/home/HomeBanner.vue';
import useAnimal from '@/services/animal.service';
import useCategory from '@/services/category.service';
import { useGlobalStore } from '@/stores';
import { Animal } from '@/types/types';
import { inject, onBeforeMount, ref, Ref } from 'vue';
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
    catQuery.page(1).limit(isMobile.value ? 4 : 14).order("name").desc(true);
    getCategories().then(() => {
    })

})
</script>