<template>
    <router-link :to="path" href="#" class="flex flex-col items-center justify-end  w-[90%]  bg-cover bg-center h-40 bg-no-repeat relative
    rounded-xl overflow-hidden group hover:scale-110 transition-all duration-500 ease-in-out hover:bg-blend-overlay"
        :style="{ backgroundImage: `url(${useGlobalStore().getImage(category.image)})` }">
        <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10 group-hover:bg-opacity-0
        transition-all duration-500 ease-in-out"></div>
        <h1 class="text-2xl font-bold text-center  z-20 w-full bg-dark py-1 bg-opacity-20">
            {{ category.name }}
        </h1>
    </router-link>
</template>
<script setup lang="ts">
import { useGlobalStore } from '@/stores';
import { Category } from '@/types/types';
import { ref } from 'vue';

interface Props {
    category: Category
}
const props = defineProps<Props>();

const path= ref({
     name: 'animals', query: { categoryId: props.category._id, categoryName: props.category.name } 
})

</script>