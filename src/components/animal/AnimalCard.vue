<template>

    <div class="relative rounded-xl overflow-hidden shadow-xl">
        <AnimalLike v-if="useUserStore().getUser" :likes="animal.likes" :animalId="animal._id" />
        <router-link :to="{ name: 'animal', params: { id: animal._id } }" class="flex flex-col  px-2 py-1.5 relative h-[18.5rem] hover:scale-[101.5%]
        transition-all ease-in-out duration-500">

            <el-image :src="animal.image" :alt="animal.name" fit="cover"
                class="w-full !h-56 object-cover z-0  absolute top-0 left-0 pointer-events-none " loading="lazy" />
            <div class="flex flex-col w-full p-2  absolute bottom-0 left-0 right-0">
                <div class="flex w-full  justify-between">
                    <h1 class="text-xl md:text-2xl text-accent w-full ellipsis">{{ animal.name }}</h1>
                    <IconAction action="info" :icon="dangerIcon.icon" class="text-2xl " :class="dangerIcon.color"
                        v-tooltip.top="animal.status" />
                </div>
                <span class="text-sm md:text-base text-gray-200 italic">{{ animal.scientific_name }}</span>

            </div>
        </router-link>
    </div>
</template>

<script setup lang="ts">
import utils from '@/types/helpers/utils';
import { Animal } from '@/types/types';
import { ref } from 'vue';
import AnimalLike from './AnimalLike.vue';
import { useUserStore } from '@/stores';


interface Props {
    animal: Animal
}

const props = defineProps<Props>()
const dangerIcon = ref(utils.getDangerIcon(utils.getDangerLevel(props.animal.status)));


</script>