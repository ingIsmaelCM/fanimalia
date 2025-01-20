<template>
    <CustomDialog :key="key" title="Registrar nuevo Taxón" class="!w-[95vw] md:!w-full md:!max-w-2xl" appendTo="self"
    :dismissableMask="true">
        <template #button>
            <Button severity="contrast" class="w-full  text-white px-4 !py-5 rounded-lg flex space-x-2 items-center">
                <IconAction action="add" class="text-2xl" />
                <span>Añadir Taxón</span>
            </Button>
        </template>
        <form class="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-y-12 py-8 text-primary ">
            <FloatLabel class="col-span-6 md:col-span-6 xl:col-span-4 relative">
                <InputText class="w-full" v-model="taxonomy.phylum" id="phylum" @focus="validation.phylum?.$reset()" />
                <ValidationMessage :validator="validation" property="phylum" placeholder="Phylum" />
            </FloatLabel>
            <FloatLabel class="col-span-6 md:col-span-6 xl:col-span-4 relative">
                <InputText class="w-full" v-model="taxonomy.class" id="class" @focus="validation.class?.$reset()" />
                <ValidationMessage :validator="validation" property="class" placeholder="Clase" />
            </FloatLabel>
            <FloatLabel class="col-span-6 md:col-span-6 xl:col-span-4 relative">
                <InputText class="w-full" v-model="taxonomy.order" id="class" @focus="validation.order?.$reset()" />
                <ValidationMessage :validator="validation" property="order" placeholder="Orden" />
            </FloatLabel>
            <FloatLabel class="col-span-6 md:col-span-6 xl:col-span-4 relative">
                <InputText class="w-full" v-model="taxonomy.family" id="class" @focus="validation.family?.$reset()" />
                <ValidationMessage :validator="validation" property="family" placeholder="Famlia" />
            </FloatLabel>
            <FloatLabel class="col-span-6 md:col-span-6 xl:col-span-4 relative">
                <InputText class="w-full" v-model="taxonomy.genus" id="class" @focus="validation.genus?.$reset()" />
                <ValidationMessage :validator="validation" property="genus" placeholder="Género" />
            </FloatLabel>
            <FloatLabel class="col-span-6 md:col-span-6 xl:col-span-4 relative">
                <InputText class="w-full" v-model="taxonomy.specie" id="class" @focus="validation.specie?.$reset()" />
                <ValidationMessage :validator="validation" property="specie" placeholder="Especie" />
            </FloatLabel>
        </form>
    </CustomDialog>
</template>

<script setup lang="ts">
import { taxonomyRules } from '@/rules/taxonomy.rules';
import { Taxonomy } from '@/types/types';
import useVuelidate from '@vuelidate/core';
import { onMounted, Ref, ref, watch } from 'vue';

const taxonomy: Ref<Taxonomy> = ref({} as Taxonomy);

interface Props {
    prevTaxonomy?: Taxonomy
}


const emits = defineEmits(['onUpdateTaxonomy'])
const props = defineProps<Props>()

const validation = useVuelidate(taxonomyRules, taxonomy);

const key = ref(Math.random());


watch(taxonomy.value, () => {
    validation.value.$touch();
    if (validation.value.$invalid) {
        return
    }
    emits('onUpdateTaxonomy', taxonomy.value);
})

onMounted(() => {

    if (props.prevTaxonomy) {
        taxonomy.value = props.prevTaxonomy;
    } else {
        taxonomy.value._id = 'new_taxonomy';
    }
})  
</script>