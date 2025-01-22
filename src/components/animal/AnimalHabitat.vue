<template>
    <div class="flex flex-col space-y-4 text-base md:text-lg">
        <div class="flex flex-col md:flex-row pt-2 pb-6 md:pb-2 md:space-x-4 ">
            <div class="col-span-12 md:col-span-6 row-span-2 rounded-xl w-full max-h-48 md:max-h-max md:w-96 xl:w-[28rem] xl:max-h-96 overflow-hidden relative">
                <el-image v-if="habitat.image" :src="habitat.image" fit="cover" :preview-src-list="[habitat.image]"
                    class=" object-coverm absolute top-0 left-0 w-full h-full" />
                    <Icon v-else icon="mdi:image-off-outline" class="text-primary text-8xl opacity-70 absolute top-0 left-0 w-full h-full" />
            </div>
            <div class="col-span-6 grid grid-cols-12 md:grid-cols-6 row-span-1 gap-4 pt-2 pb-2 items-center">
                <h1 class="col-span-6 md:col-span-2 text-accent">Nombre:</h1>
                <p class="col-span-6 md:col-span-4  font-semibold text-primary">
                    {{ habitat.name || 'No hay información' }}
                </p>
                <h1 class="col-span-6 md:col-span-2 text-accent">Ubicación:</h1>
                <p class="col-span-6 md:col-span-4  font-semibold text-primary line-clamp-5 md:line-clamp-2">
                    {{ habitat.location || 'No hay información' }}
                </p>
                <h1 class="col-span-6 md:col-span-2 text-accent">Tipo de Clima:</h1>
                <p class="col-span-6 md:col-span-4  font-semibold text-primary line-clamp-2">
                    {{ habitat.climate || 'No hay información' }}
                </p>
                <h1 class="col-span-6 md:col-span-2 text-accent">Tipo:</h1>
                <p class="col-span-6 md:col-span-4  font-semibold text-primary line-clamp-2">
                    {{ habitat.type || 'No hay información' }}
                </p>
                <h1 class="col-span-6 md:col-span-2 text-accent">Rango de Elevación:</h1>
                <p class="col-span-6 md:col-span-4  font-semibold text-primary  ">
                    {{ `${habitat.elevation_range[0]}m - ${habitat.elevation_range[1]}m` }}
                </p>

            </div>

        </div>
        <h1 class=" text-accent">Descripción:</h1>
        <p class=" font-semibold text-primary  pb-6 md:pb-2"
            v-html="habitat.description || 'No hay información'">
        </p>
    </div>
</template>

<script setup lang="ts">
import { Habitat } from '@/types/types';

interface Props {
    habitat: Habitat
}

withDefaults(defineProps<Props>(), {
    habitat: () => ({
        description: '',
        name: '',
        _id: '',
        location: '',
        climate: '',
        type: '',
        elevation_range: [0, 0],
        image: ''
    }) as unknown as Habitat
})

</script>