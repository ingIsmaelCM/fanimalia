<template>

    <router-link :to="{ name: 'animal', params: { id: animal._id } }"
        class="flex flex-col rounded-xl overflow-hidden shadow-xl px-2 py-1.5 relative h-[18.5rem] hover:scale-[102%] hover:ring-1 
        ring-accent ring-offset-1
        transition-all ease-in-out duration-500">
        <el-image :src="animal.image" :alt="animal.name" fit="cover"
            class="w-full !h-56 object-cover z-0  absolute top-0 left-0  " loading="lazy" />
        <div class="flex flex-col w-full p-2  absolute bottom-0 left-0 right-0">
            <div class="flex w-full  justify-between">
                <h1 class="text-xl md:text-2xl text-accent w-full ellipsis">{{ animal.name }}</h1>
                <IconAction action="info" :icon="dangerIcon.icon" class="text-2xl " :class="dangerIcon.color"
                v-tooltip.top="animal.status" />
            </div>
            <span class="text-sm md:text-base text-gray-200 italic">{{ animal.scientific_name }}</span>
            
        </div>
    </router-link>
</template>

<script setup lang="ts">
import utils from '@/types/helpers/utils';
import { Animal } from '@/types/types';
import { ref } from 'vue';


interface Props {
    animal: Animal
}

const props = defineProps<Props>()
const dangerIcon = ref(utils.getDangerIcon(utils.getDangerLevel(props.animal.status)));




</script>