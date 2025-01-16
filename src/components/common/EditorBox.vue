<template>
    <div class="flex flex-col h-max">
        <Editor ref="editorBox" class="w-full h-max " v-model="value" @load="initEditor"
            @update:modelValue="$emit('update:modelValue', value.replace(/'/g, ''))"
            :editorStyle="{ height: '100%', maxHeight: maxHeight || '20rem', minHeight: minHeight || '10rem' }"
            :modules="modules" @blur="$emit('blur')" />
        <div class="flex justify-end px-2 h-3">
            <small class="transition-all duration-300 ease-in-out" v-if="contentLength">{{ contentLength || 0 }} / {{
                maxLength || validator[field]?.maxLength?.$params?.max || 0 }}</small>
        </div>
    </div>
</template>
<script setup lang="ts">
import useApp from '@/services/app.service';
import { Validation } from '@vuelidate/core';
import { computed, inject, onMounted, Ref, ref, watch } from 'vue';


interface IProps {
    modelValue: string,
    field: string,
    validator: Validation,
    maxHeight?: string, // rem
    minHeight?: string, // rem
    maxLength?: number,
    isFromTemplate?: boolean
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
const pasteInCurrentPosition: Ref<((key: string) => void) | null> | undefined =
    props.isFromTemplate ? inject('pasteInCurrentPosition') : undefined

const emits = defineEmits(['update:modelValue', 'blur']);


watch(() => props.modelValue, (newValue) => {
    if (editorBox.value && newValue !== value.value) {
        const { quill } = editorBox.value;
        if (quill) {
            quill.clipboard.dangerouslyPasteHTML(newValue);
            quill.setSelection(quill.getLength(), 0);
        }
    }
});

onMounted(() => {
    if (props.isFromTemplate && pasteInCurrentPosition && !pasteInCurrentPosition.value && editorBox.value) {
        pasteInCurrentPosition.value = (newValue: string) => {
            const { quill } = editorBox.value;
            const selection = quill.getSelection(true);
            quill.deleteText(selection.index, selection.length);
            quill.insertText(selection.index, newValue);
            emits('update:modelValue', quill.root.innerHTML.replace(/'/g, ''));
            setTimeout(() => {
                quill.setSelection(selection.index + newValue.length, 0);
            }, 500);
        }
    }
})


</script>