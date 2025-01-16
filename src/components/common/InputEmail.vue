<template>
    <AutoComplete type="email" v-model="value" :suggestions="items" @complete="onComplete"
        input-class="!w-full py-2.5 dark:bg-gray-800" @update:modelValue="$emit('update:modelValue', value.trim())"
        v-bind="$attrs" />
</template>

<script setup lang="ts">
import { AutoCompleteCompleteEvent } from 'primevue/autocomplete';
import { onMounted, ref, Ref, watch } from 'vue';

interface IProps {
    modelValue: string;
}

const props = withDefaults(defineProps<IProps>(), {
    modelValue: ''
})

const value: Ref<string> = ref("");

const items: Ref<string[]> = ref([]);
const emailSuffixes = ref([
    "@gmail.com",
    "@hotmail.com",
    "@outlook.com",
    "@icloud.com",
    "@outlook.es",
    "@yahoo.com",
    "@live.com",
]);

const onComplete = (evt: AutoCompleteCompleteEvent) => {
    items.value = evt.query.includes("@") ? [] :
        emailSuffixes.value.map((suffix: string) => evt.query + suffix);
}

onMounted(() => {
    value.value = props.modelValue;
})

watch(() => props.modelValue, () => {
    value.value = props.modelValue;
})
</script>