<template>
    <div class="flex flex-col md:flex-row pt-2 pb-6 md:pb-2 md:space-x-4 ">
        <div class="w-full md:w-1/2 grid grid-cols-12 md:grid-cols-6 row-span-1 gap-4 pt-2 pb-6 md:pb-2 items-center">
            <h1 class="col-span-6 md:col-span-2 text-accent">Filo:</h1>
            <p class="col-span-6 md:col-span-4 text-sm md:text-base font-semibold text-primary">
                {{ taxonomy.phylum || 'No hay información' }}
            </p>
            <h1 class="col-span-6 md:col-span-2 text-accent">Clase:</h1>
            <p class="col-span-6 md:col-span-4 text-sm md:text-base font-semibold text-primary line-clamp-2">
                {{ taxonomy.class || 'No hay información' }}
            </p>
            <h1 class="col-span-6 md:col-span-2 text-accent">Orden:</h1>
            <p class="col-span-6 md:col-span-4 text-sm md:text-base font-semibold text-primary line-clamp-2">
                {{ taxonomy.order || 'No hay información' }}
            </p>
            <h1 class="col-span-6 md:col-span-2 text-accent">Familia:</h1>
            <p class="col-span-6 md:col-span-4 text-sm md:text-base font-semibold text-primary line-clamp-2">
                {{ taxonomy.family || 'No hay información' }}
            </p>
            <h1 class="col-span-6 md:col-span-2 text-accent">Género:</h1>
            <p class="col-span-6 md:col-span-4 text-sm md:text-base font-semibold text-primary line-clamp-2">
                {{ taxonomy.genus || 'No hay información' }}
            </p>
            <h1 class="col-span-6 md:col-span-2 text-accent">Especie:</h1>
            <p class="col-span-6 md:col-span-4 text-sm md:text-base font-semibold text-primary line-clamp-2">
                {{ taxonomy.specie || 'No hay información' }}
            </p>


        </div>
        <div class="w-full hidden md:block md:w-1/2" v-if="taxonomy.phylum">
            <OrganizationChart :key="taxonomy?._id" :value="items" style="width: 100%">
                <template #default="slotProps">
                    <span>{{ slotProps.node.label }}</span>
                </template>
            </OrganizationChart>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Taxonomy } from '@/types/types';
import { OrganizationChartNode } from 'primevue/organizationchart';
import { onMounted, Ref, ref } from 'vue';

interface Props {
    taxonomy: Taxonomy
}

const props = withDefaults(defineProps<Props>(), {
    taxonomy: () => ({
        phylum: '',
        class: '',
        order: '',
        family: '',
        genus: '',
        specie: ''
    }) as Taxonomy
})

const items: Ref<OrganizationChartNode> = ref(
    {
        key: 'phylum',
        label: props.taxonomy.phylum,
        children: [
            {
                key: 'class',
                label: props.taxonomy.class,
                children: [
                    {
                        key: 'order',
                        label: props.taxonomy.order,
                        children: [
                            {
                                key: 'family',
                                label: props.taxonomy.family,
                                children: [
                                    {
                                        key: 'genus',
                                        label: props.taxonomy.genus,
                                        children: [
                                            {
                                                key: 'species',
                                                label: props.taxonomy.specie,
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }

        ]
    }
)

onMounted(() => {
    const removeEmpty = (node: OrganizationChartNode) => {
        if (node.children) {
            node.children = node.children.filter((child) => child.label);
            node.children.forEach((child) => removeEmpty(child));
        }
    }
    removeEmpty(items.value);
})
</script>