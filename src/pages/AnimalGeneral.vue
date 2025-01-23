<template>
    <div class="grid grid-cols-1 gap-8">
        <Fieldset :legend="label" :toggleable="false">
            <template #legend>
                <h1 class="md:text-xl xl:text-2xl">{{ label }}</h1>
            </template>
            <div class="grid grid-cols-1 gap-y-6 md:gap-6  pt-4" v-infinite-scroll="onLoadMore"
                infinite-scroll-distance="500">
                <AnimalCard v-for="animal in animals" :key="animal._id" :animal="animal"
                    class="col-span-12 md:col-span-4 xl:col-span-3 shadow-sm shadow-gray-800 border border-gray-600" />
            </div>
        </Fieldset>
    </div>
</template>

<script setup lang="ts">
import AnimalCard from '@/components/animal/AnimalCard.vue';
import useAnimal from '@/services/animal.service';
import { Animal } from '@/types/types';
import { onMounted, Ref, ref } from 'vue';
import { useRoute } from 'vue-router';


const label = ref('')
const route = useRoute();

const { getAnimals, query } = useAnimal();
const animals: Ref<Animal[]> = ref([]);

const lazyLoading = ref(false);
const curPagination = ref({
    currentPage: 0,
    lastPage: 0,
    nextPage: 0,
    prevPage: 0,
    count: 0,
    pageSize: 0,
    inThisPage: 0,
})

const loadAnimals = async () => {
    query.perpage(3).page(curPagination.value.currentPage+1);
    await getAnimals().then(({ rows, pagination }) => {
        animals.value.push(...rows);
        curPagination.value = pagination;
    })
}

const onLoadMore = async () => {
    if (!curPagination.value.nextPage) return;
    lazyLoading.value = true;
    await loadAnimals();
    setTimeout(() => {
        lazyLoading.value = false;
    }, 500);
}

onMounted(async () => {
    const { categoryId, status, categoryName, statusName } = route.query;
    if (categoryId) {
        label.value = categoryName as string;
        query.filter('categoryId', categoryId as string, 'eq', 'and');
    }
    if (status) {
        label.value = statusName as string;
        query.inFilter('status', (<string>status).split(','));
    }
    loadAnimals();
})

</script>