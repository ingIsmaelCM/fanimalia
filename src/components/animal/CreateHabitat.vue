<template>
    <CustomDialog :key="key" title="Registrar nuevo Habitat" class="!w-[95vw] md:!w-full md:!max-w-2xl" appendTo="self" :showBack="true"
    >
        <template #button>
            <Button severity="contrast" class="w-full  text-white px-4 !py-5 rounded-lg flex space-x-2 items-center">
                <IconAction action="add" class="text-2xl" />
                <span>{{ habitat.name ? 'Editar Habitat' : 'Añadir Habitat' }}</span>
            </Button>
        </template>
        <form class="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-y-12 py-8 text-primary ">
            <FloatLabel class="col-span-6 md:col-span-6 xl:col-span-4 relative">
                <InputText class="w-full" v-model="habitat.name" id="name" @focus="validation.name?.$reset()" />
                <ValidationMessage :validator="validation" property="name" placeholder="Nombre del Habitat" />
            </FloatLabel>
            <FloatLabel class="col-span-6 md:col-span-6 xl:col-span-4 relative">
                <InputText class="w-full" v-model="habitat.location" id="location" @focus="validation.location?.$reset()" />
                <ValidationMessage :validator="validation" property="location" placeholder="Ubicación geográfica" />
            </FloatLabel>
            <FloatLabel class="col-span-6 md:col-span-6 xl:col-span-4">
                <Dropdown appendTo="self" id="climate" class="!w-full" inputClass="!py-2" size="large" v-model="habitat.climate"
                    :options="climates"  
                    :class="{ '!ring-2 !ring-red-400': validation.climate?.$error }" @focus="validation.climate?.$reset()" show-clear>
                </Dropdown>
                <ValidationMessage :validator="validation" property="climate" placeholder="Zona Climática" />
            </FloatLabel>
            <FloatLabel class="col-span-6 md:col-span-6 xl:col-span-4">
                <Dropdown appendTo="self" id="type" class="!w-full" inputClass="!py-2" size="large" v-model="habitat.type"
                    :options="types"  
                    :class="{ '!ring-2 !ring-red-400': validation.type?.$error }" @focus="validation.type?.$reset()" show-clear>
                </Dropdown>
                <ValidationMessage :validator="validation" property="type" placeholder="Tipo de Hábitat" />
            </FloatLabel>
            <FloatLabel class="col-span-6 md:col-span-6 xl:col-span-4 relative">
                <div class="flex items-center space-x-0 w-full ring-1 ring-primary rounded-md">
                    <InputNumber class="w-full !ring-0" inputClass="w-full focus:!ring-0 " v-model="habitat.elevation_range[0]" id="elevation_range[0]" 
                    @focus="validation.elevation_range?.$reset()" suffix=" mt." :allowEmpty="false"/>
                    <InputNumber class="w-full !ring-0" inputClass="w-full focus:!ring-0" v-model="habitat.elevation_range[1]" id="elevation_range[1]" 
                    @focus="validation.elevation_range?.$reset()" suffix=" mt." :allowEmpty="false"/>   
                </div>
                <ValidationMessage :validator="validation" property="elevation_range" placeholder="Rango de Elevación" />
            </FloatLabel>
            <div class="col-span-6 md:col-span-4 items-center xl:col-span-4 flex overflow-hidden px-0.5">
                <SingleUpload  accept="image/*" @onUpload="onUpload" key="photo_on_habitat">
                    <template #button>
                        <Button severity="contrast" class=" text-white px-4 py-4 rounded-lg w-full" :class="{
                            'border-2 border-red-500': validation.image?.$error,
                            'bg-transparent ring-2 ring-secondary ring-offset-1 ': uploadLabel != defaultUploadLabel,
                            'bg-secondary ring-1 ring-primary ring-offset-1': uploadLabel == defaultUploadLabel
                        }" >
                            <div class="ellipsis">
                                {{ uploadLabel }}
                            </div>
                        </Button>
                    </template>
                </SingleUpload>
            </div>
            <div class="col-span-12">
                <ValidationMessage :validator="validation" property="description" placeholder="Descripción del hábitat" />
                <EditorBox id="description" class="w-full" maxHeight="20rem" v-model="habitat.description"
                    :validator="validation" field="description" :maxLength="1500" :key="key" />
            </div>
        </form>
    </CustomDialog>
</template>

<script setup lang="ts">
import { habitatRules } from '@/rules/habitat.rules';
import { HabitatClimate, HabitatType } from '@/types/enums';
import { Habitat, Photo} from '@/types/types';
import useVuelidate from '@vuelidate/core';
import { onBeforeMount, onMounted, Ref, ref, watch } from 'vue';

const habitat: Ref<Habitat> = ref({} as Habitat);
    const climates = Object.values(HabitatClimate);
    const types = Object.values(HabitatType);

interface Props {
    prevHabitat: Habitat
}


const emits = defineEmits(['onUpdateDependency'])
const props = defineProps<Props>()

const defaultUploadLabel = ref('Seleccione una foto');
const uploadLabel = ref(defaultUploadLabel.value);

const validation = useVuelidate(habitatRules, habitat);

const key = ref(Math.random());

const onUpload = (photo: Photo | null) => {
    if (!photo) {
        habitat.value.image = '';
        uploadLabel.value = defaultUploadLabel.value;
        return;
    }

    habitat.value.image = photo.url;
    const fileNameEllipsis = photo.name.length > 20 ? photo.name.substring(0, 20) + '[...]' : photo.name;
    uploadLabel.value = `${fileNameEllipsis}.${photo.extension}`;
}

watch(habitat.value, () => {
   if(Object.keys(habitat.value).length > 2){
       validation.value.$touch();
       if (validation.value.$invalid) {
           return
       }
       emits('onUpdateDependency', habitat.value);
   }
})
onBeforeMount(() => {
    habitat.value.elevation_range = [0, 0];
})
onMounted(() => {

    if (props.prevHabitat) {
        habitat.value = props.prevHabitat;
    } else {
        habitat.value._id = 'new_habitat';
    }
})  
</script>