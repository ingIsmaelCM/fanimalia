<template>
    <el-carousel class="w-full" motion-blur :height="isMobile ? '20rem' : '38rem'" indicator-position="none"  :type="isMobile ? '' : 'card'"
    :autoplay="false">
        <el-carousel-item v-for="animal in animals" :key="animal._id">
            <div class="w-full max-w-screen-2xl h-full md:h-[38rem] shadow-xl rounded-xl border border-gray-700 
            flex flex-col md:flex-row justify-end md:items-end md:justify-start 
            bg-cover  bg-no-repeat bg-top relative overflow-hidden hover:scale-105 transition-all duration-500 ease-in-out"
                :style="{ backgroundImage: `url(${animal.photos[0]? useGlobalStore().getImage(animal.photos[0]) : useGlobalStore().getImage(animal.category?.image)})` }">
                <div class="absolute top-0 left-0 w-full h-full bg-dark bg-opacity-70 z-10 blur"></div>
                <div class="p-4 md:p-8 flex flex-col justify-center items-start  max-w-2xl z-20">
                    <h1 class="text-2xl md:text-4xl font-bold text-center text-accent">
                        {{ animal.name }}
                    </h1>
                    <h1 class="text-xl md:text-2xl font-semibold italic text-center shadow-xl">
                        {{ animal.scientific_name }}
                    </h1>
                    <span class="line-clamp-2 mt-4 text-lg md:text-xl">
                        {{ animal.description }}
                    </span>
                </div>
            </div>
        </el-carousel-item>
    </el-carousel>
</template>
<script setup lang="ts">
import { useGlobalStore } from '@/stores';
import { Animal } from '@/types/types';
import { inject } from 'vue';

interface Props {
    animals: Animal[]
}
defineProps<Props>();
const isMobile = inject('isMobile');
</script>