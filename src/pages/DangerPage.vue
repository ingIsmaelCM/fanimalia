<template>
    <div class="grid grid-cols-1 gap-8">
        <Fieldset :legend="label" :toggleable="false">
            <template #legend>
                <div class="flex items-center justify-between" v-if="label">
                    <h1 class="md:text-xl xl:text-2xl">{{ label }}</h1>
                    <router-link :to="{ name: 'animals' }"
                        class="text-sm text-gray-200 hover:text-accent hover:underline">
                        Ver todos
                    </router-link>
                </div>
            </template>
            <div class="grid grid-cols-12 gap-y-6 md:gap-6  pt-4" v-infinite-scroll="onLoadMore"
                infinite-scroll-distance="500" v-if="animals.length > 0">
                <AnimalCard v-for="animal in animals" :key="animal._id" :animal="animal"
                    class="col-span-12 md:col-span-4 xl:col-span-3 shadow-sm shadow-gray-800 border border-gray-600" />
            </div>
            <NotAnimalFound v-else />
        </Fieldset>
    </div>
</template>

<script setup lang="ts">
import AnimalCard from '@/components/animal/AnimalCard.vue';
import useAnimal from '@/services/animal.service';
import { AnimalStatus } from '@/types/enums';
import { Animal } from '@/types/types';
import { inject, onMounted, Ref, ref } from 'vue';
import { useRoute } from 'vue-router';


const label = ref('')
const route = useRoute();

const { getAnimals, query } = useAnimal();
const animals: Ref<Animal[]> = ref([]);
const isMobile: Ref<boolean> = inject<Ref<boolean>>('isMobile')!;

const endangeredStatuses = ref([AnimalStatus.extinct, AnimalStatus.extinct_in_the_wild, AnimalStatus.critically_endangered, AnimalStatus.endangered])

const pagesize = ref(isMobile.value ? 40 : 10);

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
    query.perpage(pagesize.value).page(curPagination.value.currentPage + 1)
        .inFilter("status", endangeredStatuses.value);
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
