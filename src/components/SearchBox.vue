<template>
    <AutoComplete optionLabel="label" optionValue="id" input-class="!w-full" :complete-on-focus="true"
        panel-class="!border-gray !ing-gray !outline-none" v-model="textSearch" :suggestions="items"
        @complete="utils.debounce(() => onSearch(), 200)()" @item-select="onSelectAnimal" @input="showPanel"
        empty-search-message="Sin resultados" placeholder="Buscar" @focus="opacityNavbar(true)" @blur="opacityNavbar(false)"
        class="!w-full xl:!w-96 " />

</template>

<script setup lang="ts">
import useAnimal from '@/services/animal.service';
import utils from '@/types/helpers/utils';
import { GenericType } from '@/types/types';
import OverlayPanel from 'primevue/overlaypanel';
import { Ref, ref } from 'vue';
import { useRouter } from 'vue-router';

const OPSearch: Ref<OverlayPanel | null> = ref(null);
const { query, getAnimals, animals } = useAnimal();

const router = useRouter();

const textSearch = ref('');

const showPanel = (event: Event) => {
    opacityNavbar(true)
    OPSearch.value?.show(event);
};

const onSelectAnimal = ({ value }) => {
    router.push({ name: "animal", params: { id: value.id } });
};

const opacityNavbar = (state: boolean) => {
    const navbarDiv = document.getElementById("navbarDiv");
    if (navbarDiv) {
        if (state) {
            navbarDiv.style.backgroundColor = "rgba(0, 0, 0, 1)";
        } else {
            navbarDiv.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
    }
};

const items: Ref<Array<GenericType>> = ref([]);

const onSearch = (limit: number = 20) => {
    query
        .search(textSearch.value)
        .limit(limit)
        .fields(["name", "_id", "image", "scientific_name"])
        .order("name")
        .desc(false);
    getAnimals().then(() => {
        items.value =
            animals.value?.map((animal) => ({
                id: animal._id,
                label: animal.name + (animal.scientific_name ? ` - ${animal.scientific_name}` : ""),
                image: animal.image,
                scientific_name: animal.scientific_name,
            })) || [];
    });

};

router.beforeEach(() => {
        textSearch.value = '';
});

</script>