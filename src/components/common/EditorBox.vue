<template>
    <div class="flex flex-col h-max mb-2" :style="{maxHeight: maxHeight||'10rem'}" >
        <Editor ref="editorBox"  class="w-full h-full mb-1.5 max-h-[inherit]" v-model="value" @load="initEditor"
            @update:modelValue="$emit('update:modelValue', value.replace(/'/g, ''))" 
            editorStyle="height: fit-content; max-height: inherit; padding-bottom: 4px" :modules="modules" @blur="$emit('blur')" />
        <div class="flex justify-end -mt-1.5 px-2">
            <small class="" v-if="contentLength">{{ contentLength || 0 }} / {{ maxLength || validator[field]?.maxLength?.$params?.max || 0 }}</small>
        </div>
    </div>
</template>
<script setup lang="ts">
import useApp from '@/services/app.service';
import { Validation } from '@vuelidate/core';
import { computed, Ref, ref } from 'vue';


interface IProps {
    modelValue: string,
    field: string,
    validator: Validation,
    maxHeight?: string, // rem
    maxLength?: number
}

const props = withDefaults(defineProps<IProps>(), {
    modelValue: ''
})

const value = ref('');
const editorBox: Ref<any> = ref(null);
const { modules } = useApp();

const initEditor = ({ instance }: any) => {
    instance.setContents(instance.clipboard?.convert({
        html: props.modelValue,
    }));
   
}

const contentLength = computed(() => {
    if (editorBox.value && value.value) {
        const { quill } = editorBox.value;
        return quill.getLength()
    }
    return 0;
})

</script>