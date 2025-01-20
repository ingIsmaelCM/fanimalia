<template>
    <CustomDialog :key="key" title="Subir archivo" class="!w-[95vw] md:!w-full md:!max-w-2xl">
        <template #button>
            <slot name="button" />
        </template>
        <div class="extraOutline p-4 bg-secondary w-full m-auto md:min-w-[35rem] rounded-lg" @drop.prevent="onDrop" @dragover="onDragPrevent">
            <input class="text-sm cursor-pointer w-36 hidden" type="file" :accept="accept" :id="inputId"
                @change="uploadFile" ref="fileInput" />
            <template v-if="!selectedFile">
                <div class="file_upload p-5 relative border-4 border-dotted border-gray-500 rounded-lg "
                    >
                    <label :for="inputId" class="cursor-pointer ">
                        <IconAction action="upload" icon="mdi:cloud-upload" class="text-primary mx-auto my-4 text-8xl opacity-70
                    hover:scale-105 hover:opacity-90 transition-all ease-in-out duration-500" />
                    </label>
                    <div class="input_field flex flex-col w-max mx-auto text-center">
                        <label :for="inputId">
                            <div
                                class="text bg-secondary text-white border uppercase border-gray-500 rounded-lg font-semibold 
                            cursor-pointer py-1.5 px-4 hover:bg-dark hover:scale-105 transition-all ease-in-out duration-500">
                                {{ label }}</div>
                        </label>

                        <div class="font-bold text-primary opacity-70 uppercase mt-4">O arrastre y suelte aquí</div>
                    </div>
                </div>
            </template>
            <!-- Preview  -->
            <template v-else>
                <div class="file_upload p-5 relative border-4 border-dotted border-gray-500 rounded-lg flex flex-col ">
                    <el-image class="w-full " :src="fileUrl" fit="contain" :preview-src-list="[fileUrl]">
                        <template #error>
                            <div class="flex flex-col items-center justify-center  size-full">
                                <Icon icon="mdi:image-off-outline" class="text-primary text-8xl opacity-70" />
                            </div>
                        </template>
                    </el-image>
                    <div class="grid grid-cols-3  gap-2 mt-4 text-sm w-full">
                        <div class="font-bold col-span-2 text-primary opacity-70 ellipsis pr-4 ">Nombre: {{
                            selectedFile.name }}</div>
                        <div class="font-bold text-primary text-right opacity-70 ">Tamaño: {{
                            utils.formatStorage(selectedFile.size) }}</div>
                    </div>
                </div>
                <div class="flex justify-end space-x-6 py-4 w-full ">
                    <Button class=" bg-red-700 text-primary px-2 md:px-4 py-2.5 w-max rounded-lg flex space-x-2 outline-none ring-0
                    hover:bg-opacity-80 hover:scale-105 transition-all ease-in-out duration-500" @click="onCancel">
                        <IconAction action="cancel" icon="mdi:close" />
                        <span class="hidden md:block">Cancelar</span>
                    </Button>

                    <label :for="inputId" class="cursor-pointer ">
                        <div
                            class="text bg-sky-800 text-white md:border  border-gray-500 rounded-lg font-semibold  flex space-x-2
                            cursor-pointer py-1  px-2 md:px-4 hover:bg-sky-700 hover:scale-105 transition-all ease-in-out duration-500">
                            <IconAction action="change" icon="mdi:exchange" />
                            <span class="hidden md:block">Cambiar</span>
                        </div>
                    </label>
                    <Button class=" bg-primary text-secondary px-2 md:px-4 py-2.5 w-max rounded-lg flex space-x-2 outline-none ring-0
                    hover:bg-opacity-60 hover:scale-105 transition-all ease-in-out duration-500"
                        @click="onUploadFile(selectedFile)">
                        <IconAction action="upload" icon="mdi:cloud-upload" class="text-secondary " />
                        <span class="hidden md:block">Subir</span>
                    </Button>
                </div>
            </template>
        </div>
    </CustomDialog>
</template>

<script setup lang="ts">
import useApp from '@/services/app.service';
import utils from '@/types/helpers/utils';
import { useToast } from 'primevue/usetoast';
import { Ref, ref } from 'vue';



interface Props {
    maxFileSize?: number;
    accept?: string;
    label?: string;
}

const props = withDefaults(defineProps<Props>(), {
    maxFileSize: 10 * 1024 * 1024,
    accept: 'image/*',
    label: 'Seleccione un archivo'
})

const emits = defineEmits(['onUpload'])
const key = ref(Math.random());
const fileInput: Ref<HTMLInputElement | null> = ref(null);

const { uploadSingleFile } = useApp();
const toast = useToast();

const inputId = ref(`file-upload-${Math.random()}`)
const selectedFile: Ref<File | null> = ref(null);
const fileUrl = ref('');


const uploadFile = (event: Event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    (event.target as HTMLInputElement).value = '';
    onSelectFile(file);

}

const onDrop = (event: DragEvent) => {
    const file = event.dataTransfer?.files[0];
    onSelectFile(file);
}

const onDragPrevent = (event: DragEvent) => {
    event.preventDefault();
}

const onSelectFile = async (file?: File) => {
    if (!file) return;

    if (file.size > props.maxFileSize) {
        utils.toastError(toast, 'El archivo excede el tamaño máximo permitido');
        return;
    }
    selectedFile.value = file;
    fileUrl.value = URL.createObjectURL(file);


}

const onUploadFile = async (file: File) => {
    await uploadSingleFile(file).then((res) => {
        emits('onUpload', res);
        key.value = Math.random();
    })
}

const onCancel = () => {
    selectedFile.value = null;
    fileUrl.value = '';
}



</script>