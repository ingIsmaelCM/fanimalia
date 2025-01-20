<template>
    <div class="grid grid-cols-12 gap-4 pt-2 pb-6 md:pb-2 items-center">
        <el-image :src="animal.image" fit="cover" :preview-src-list="[animal.image]"
        class="col-span-12 md:col-span-6 row-span-4 rounded-xl w-full" />
        <h1 class="col-span-6 md:col-span-2 text-accent opacity-70">Nombre común:</h1>
        <p class="col-span-6 md:col-span-4 text-sm md:text-base font-semibold text-primary">
            {{ animal.name }}
        </p>
        <h1 class="col-span-6 md:col-span-2 text-accent opacity-70">Nombre científico:</h1>
        <p class="col-span-6 md:col-span-4 text-sm md:text-base font-semibold text-primary line-clamp-2">
            {{ animal.scientific_name }}
        </p>
        <h1 class="col-span-6 md:col-span-2 text-accent opacity-70">Estado actual:</h1>
        <p class="col-span-6 md:col-span-4 text-sm md:text-base font-semibold text-primary line-clamp-2">
            {{ animal.status || 'No hay información' }}
        </p>
        <h1 class="col-span-6 md:col-span-2 text-accent opacity-70">Declarado el:</h1>
        <p class="col-span-6 md:col-span-4 text-sm md:text-base font-semibold text-primary line-clamp-2">
            {{ animal.status_date? dayjs(animal.status_date).format('DD/MM/YYYY') : 'No hay información' }}
        </p>
        <div class="mt-2 col-span-12 hidden md:block w-full" ></div>
        <h1 class="col-span-6 md:col-span-2 text-accent opacity-70">Motivo:</h1>
        <p class="col-span-12 md:col-span-10 text-sm md:text-base font-semibold text-primary  line-clamp-2 md:line-clamp-1">
            <div v-html="utils.linkFromString(animal.status_reason || 'Texto sin url https://atriontechsd.com') "></div>
        </p>

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