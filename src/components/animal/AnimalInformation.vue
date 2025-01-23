<template>
    <div class="flex flex-col md:flex-row pt-2 pb-6 md:pb-2 md:space-x-4 ">
        <el-image :src="animal.image" fit="cover" :preview-src-list="[animal.image]"
            class="col-span-12 md:col-span-6 row-span-2 rounded-xl w-full max-h-48 md:max-h-max 
            md:w-96 md:min-w-[20rem] xl:w-[28rem] xl:max-h-96  object-cover" />
        <div class="col-span-6 grid grid-cols-12 md:grid-cols-6 row-span-1 gap-4 pt-2 pb-6 md:pb-2 items-center">
            <h1 class="col-span-6 md:col-span-2 text-accent">Nombre común:</h1>
            <p class="col-span-6 md:col-span-4 text-sm md:text-base font-semibold text-primary">
                {{ animal.name }}
            </p>
            <h1 class="col-span-6 md:col-span-2 text-accent">Nombre científico:</h1>
            <p class="col-span-6 md:col-span-4 text-sm md:text-base font-semibold text-primary line-clamp-2">
                {{ animal.scientific_name }}
            </p>
            <h1 class="col-span-6 md:col-span-2 text-accent">Estado actual:</h1>
            <p class="col-span-6 md:col-span-4 text-sm md:text-base font-semibold text-primary line-clamp-2">
                {{ animal.status || 'No hay información' }}
            </p>
            <h1 class="col-span-6 md:col-span-2 text-accent">Declarado el:</h1>
            <p class="col-span-6 md:col-span-4 text-sm md:text-base font-semibold text-primary line-clamp-2">
                {{ animal.status_date ? dayjs(animal.status_date).format('DD/MM/YYYY') : 'No hay información' }}
            </p>
            <h1 class="col-span-6 md:col-span-2 text-accent">Motivo:</h1>
            <p class="col-span-6 md:col-span-4 text-sm md:text-base font-semibold text-primary  ">
                {{ animal.status_reason || 'No hay información' }}
            </p>
            <h1 class="col-span-6 md:col-span-2 text-accent">Fuente:</h1>
            <p
                class="col-span-6 md:col-span-4 text-sm md:text-base font-semibold  line-clamp-2 md:line-clamp-1">
                <span v-html="utils.linkFromString(animal.status_source || 'Sin información')"></span>
            </p>
        </div>

    </div>
</template>

<script setup lang="ts">
import utils from '@/types/helpers/utils';
import { Animal } from '@/types/types';
import dayjs from 'dayjs';

interface Props {
    animal: Animal
}

defineProps<Props>()

</script>