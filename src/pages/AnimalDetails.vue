<template>
    <div  class="relative pt-[18rem] md:pt-[30rem] grid grid-cols-1 gap-8 py-8">
        <div class="parallax-animal absolute top-0 left-0 w-full h-1/2 flex py-4 md:p-8 pt-[14dvh]" v-if="animal._id" :key="animal._id">
            <el-image :src="animal.image" fit="cover"
                class="fixed top-0 left-0 h-full z-0" loading="lazy" />
            <div class="flex flex-col ">
                <div class="absolute top-0 left-0 w-full h-full bg-dark bg-opacity-80 z-10 difuse "></div>
                <div class="p-4 pt-8 md:p-8 flex flex-col justify-center items-start space-y-6                     z-20"
                   >
                    <h1 class="text-2xl md:text-4xl font-bold text-center text-accent">
                        {{ animal.name }}
                    </h1>
                    <h1 class="text-xl md:text-2xl font-semibold italic text-center">
                        {{ animal.scientific_name }}
                    </h1>
                    <h1 class="text-xl md:text-2xl font-semibold  text-center ">
                       Categoría:  <i class="text-accent">{{ animal.category?.name||'Sin categoría'}}</i>
                    </h1>
                   

                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import useAnimal from '@/services/animal.service';
import { inject, onMounted, Ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isMobile: Ref<boolean> = inject<Ref<boolean>>('isMobile')!;

const animalId = route.params.id;
const { findAnimal, animal } = useAnimal();


onMounted(() => {
    findAnimal(animalId as string).then(() => {
        document.title = `${animal.value.name} | Animalia`;
    })
})

</script>