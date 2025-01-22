<template>
    <CustomDialog :key="key" title="Registrar nueva Dieta" class="!w-[95vw] md:!w-full md:!max-w-2xl" appendTo="self"
    :dismissableMask="true">
        <template #button>
            <Button severity="contrast" class="w-full  text-white px-4 !py-5 rounded-lg flex space-x-2 items-center">
                <IconAction action="add" class="text-2xl" />
                <span>{{ diet.type ? 'Editar Dieta' : 'Añadir Dieta' }}</span>
            </Button>
        </template>
        <form class="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-y-12 py-8 text-primary ">
          
        </form>
    </CustomDialog>
</template>

<script setup lang="ts">
import { dietRules } from '@/rules/diet.rules';
import { Diet} from '@/types/types';
import useVuelidate from '@vuelidate/core';
import { onMounted, Ref, ref, watch } from 'vue';

const diet: Ref<Diet> = ref({} as Diet);

interface Props {
    prevDiet: Diet
}


const emits = defineEmits(['onUpdateDependency'])
const props = defineProps<Props>()

const validation = useVuelidate(dietRules, diet);

const key = ref(Math.random());


watch(diet.value, () => {
   if(diet.value.type){
       validation.value.$touch();
       if (validation.value.$invalid) {
           return
       }
       emits('onUpdateDependency', diet.value);
   }
})

onMounted(() => {

    if (props.prevDiet) {
        diet.value = props.prevDiet;
    } else {
        diet.value._id = 'new_diet';
    }
})  
</script>