<template>
    <div class="grid grid-cols-1 gap-8">
        <Fieldset v-for="val in values.filter((val) => val.arrData.length > 0)" :legend="val.label" :key="val.label" :toggleable="values.length>1">
            <template #legend>
                <h1 class="md:text-xl xl:text-2xl">{{ val.label }}</h1>
            </template>
            <div class="grid grid-cols-12 gap-y-6 md:gap-x-6 md:gap-y-0 pt-4">
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



const { getAnimals: getGeneralAnimals, query: generalQuery } = useAnimal();
const generalAnimals: Ref<Animal[]> = ref([]);
const loadGeneralAnimals = () => {
    generalQuery.limit(8);
    getGeneralAnimals().then((res) => {
        generalAnimals.value = res;
    })
}

const { getAnimals: getDangerAnimals, query: dangerQuery } = useAnimal();
const dangerAnimals: Ref<Animal[]> = ref([]);
const loadDangerAnimals = () => {
    dangerQuery.limit(8).inFilter("status", [AnimalStatus.extinct, AnimalStatus.extinct_in_the_wild, AnimalStatus.critically_endangered, AnimalStatus.endangered]);
    getDangerAnimals().then((res) => {
        dangerAnimals.value = res;
    })
}

const { getAnimals: getLeastEndangeredAnimals, query: leastEndangeredQuery } = useAnimal();
const leastEndangeredAnimals: Ref<Animal[]> = ref([]);
const loadLeastEndangeredAnimals = () => {
    leastEndangeredQuery.limit(8).inFilter("status", [AnimalStatus.vulnerable, AnimalStatus.least_concerned, AnimalStatus.near_threatened]);
    getLeastEndangeredAnimals().then((res) => {
        leastEndangeredAnimals.value = res;
    })
} 

const { getAnimals: getNotDangeredAnimals, query: notDangeredQuery } = useAnimal();
const notDangeredAnimals: Ref<Animal[]> = ref([]);
const loadNotDangeredAnimals = () => {
    notDangeredQuery.limit(8).inFilter("status", [ AnimalStatus.data_deficient, AnimalStatus.not_evaluated, AnimalStatus.not_endagered]);
    getNotDangeredAnimals().then((res) => {
        notDangeredAnimals.value = res;
    })
}

type Values = {
    label: string;
    arrData: Animal[];
}
const values: Ref<Values[]> = ref([
    {
        label: 'Principal',
        arrData: generalAnimals
    },
    {
        label: '¡Peligro! Hay que cuidarlos',
        arrData: dangerAnimals
    },
    {
        label: 'Menos amenezados, pero en la mira',
        arrData: leastEndangeredAnimals
    },
    {
        label: 'Fue de peligro',
        arrData: notDangeredAnimals
    },

])



onMounted(() => {
    loadGeneralAnimals();
    loadDangerAnimals();
    loadNotDangeredAnimals();
    loadLeastEndangeredAnimals();
})


</script>