<template>
    <div class="flex flex-col items-center space-y-4 md:space-y-8 ">
        <HomeBanner :animals="animals" />
        <Carousel :value="categories" :numVisible="isMobile ? 2 : 5" :numScroll="1"  class="w-full" :show-indicators="false" :show-navigators="false"
        :autoplayInterval="6000" autoplay circular>
            <template #item="{data}">
                <CategoryCard :key="data._id" :category="data" />
            </template>
        </Carousel>
    </div>
</template>
<script setup lang="ts">
import CategoryCard from '@/components/home/CategoryCard.vue';
import HomeBanner from '@/components/home/HomeBanner.vue';
import useAnimal from '@/services/animal.service';
import useCategory from '@/services/category.service';
import { inject, onBeforeMount } from 'vue';
const isMobile = inject('isMobile');

const { animals, getAnimals, query: animalQuery } = useAnimal();
const { categories, getCategories, query: catQyery } = useCategory();
onBeforeMount(() => {
    animalQuery.limit(10).include("category").page(1);
    getAnimals().then(() => {

    })
    catQyery.page(1).limit(100).order("name").desc(true);
    getCategories().then(() => {
    })

})
</script>