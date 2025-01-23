<template>
    <div class="grid grid-cols-1 gap-8">
        <Fieldset v-for="val in values.filter((val) => val.arrData.length > 0)" :legend="val.label" :key="val.label"
            :toggleable="values.length > 1">
            <template #legend>
                <div class="flex items-center justify-between w-full">
                    <h1 class="md:text-xl xl:text-2xl">{{ val.label }}</h1>
                    <router-link v-if="val.path" :to="val.path"
                        class="text-sm text-gray-200 hover:text-accent hover:underline">
                        Ver todos
                    </router-link>
                </div>
            </template>
            <div class="grid grid-cols-12 gap-y-6 md:gap-6  pt-4">
                <AnimalCard v-for="animal in val.arrData" :key="animal._id" :animal="animal"
                    class="col-span-12 md:col-span-4 xl:col-span-3 shadow-sm shadow-gray-800 border border-gray-600" />
            </div>
        </Fieldset>
    </div>
</template>
<script setup lang="ts">
import AnimalCard from '@/components/animal/AnimalCard.vue';
import useAnimal from '@/services/animal.service';
import { AnimalStatus } from '@/types/enums';
import { Animal } from '@/types/types';
import { onMounted, ref, Ref } from 'vue';

const endangeredStatuses = ref([AnimalStatus.extinct, AnimalStatus.extinct_in_the_wild, AnimalStatus.critically_endangered, AnimalStatus.endangered])
const leastEndangeredStatuses = ref([AnimalStatus.vulnerable, AnimalStatus.least_concerned, AnimalStatus.near_threatened])
const notDangeredStatuses = ref([AnimalStatus.data_deficient, AnimalStatus.not_evaluated, AnimalStatus.not_endagered])

const { getAnimals: getGeneralAnimals, query: generalQuery } = useAnimal();
const generalAnimals: Ref<Animal[]> = ref([]);
const loadGeneralAnimals = () => {
    generalQuery.limit(8);
    getGeneralAnimals().then(({rows}) => {
        generalAnimals.value = rows;
    })
}

const { getAnimals: getDangerAnimals, query: dangerQuery } = useAnimal();
const dangerAnimals: Ref<Animal[]> = ref([]);
const loadDangerAnimals = () => {
    dangerQuery.limit(8).inFilter("status", endangeredStatuses.value);
    getDangerAnimals().then(({rows}) => {
        dangerAnimals.value = rows;
    })
}

const { getAnimals: getLeastEndangeredAnimals, query: leastEndangeredQuery } = useAnimal();
const leastEndangeredAnimals: Ref<Animal[]> = ref([]);
const loadLeastEndangeredAnimals = () => {
    leastEndangeredQuery.limit(8).inFilter("status", leastEndangeredStatuses.value);
    getLeastEndangeredAnimals().then(({rows}) => {
        leastEndangeredAnimals.value = rows;
    })
}

const { getAnimals: getNotDangeredAnimals, query: notDangeredQuery } = useAnimal();
const notDangeredAnimals: Ref<Animal[]> = ref([]);
const loadNotDangeredAnimals = () => {
    notDangeredQuery.limit(8).inFilter("status", notDangeredStatuses.value);
    getNotDangeredAnimals().then(({rows}) => {
        notDangeredAnimals.value = rows;
    })
}

type Values = {
    label: string;
    arrData: Animal[];
    path?: { name: string, query?: { [key: string]: string } }
}
const values: Ref<Values[]> = ref([
    {
        label: 'Principal',
        arrData: generalAnimals,
        path: { name: 'all_animals' }
    },
    {
        label: '¡Peligro! Hay que cuidarlos',
        arrData: dangerAnimals,
        path: { name: 'all_animals', query: { status: endangeredStatuses.value.join(','), statusName: 'En algún tipo de peligro' } }
    },
    {
        label: 'Menos amenezados, pero en la mira',
        arrData: leastEndangeredAnimals,
        path: { name: 'all_animals', query: { status: leastEndangeredStatuses.value.join(','), statusName: 'Menos amenazados' } }

    },
    {
        label: 'Fuera de peligro',
        arrData: notDangeredAnimals,
        path: { name: 'all_animals', query: { status: notDangeredStatuses.value.join(','), statusName: 'Fuera de peligro' } }
    },

])



onMounted(() => {
    loadGeneralAnimals();
    loadDangerAnimals();
    loadNotDangeredAnimals();
    loadLeastEndangeredAnimals();
})


</script>