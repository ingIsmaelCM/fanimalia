<template>
    <div class="flex justify-end -mt-1.5 px-2">
        <small class="">{{ obj[field]?.length || 0 }} / {{validator[field]?.maxLength?.$params?.max || 0 }}</small>
    </div>
</template>

<script setup lang="ts">
import { Validation } from '@vuelidate/core';

interface IProps {
    obj: Record<string, string>,
    field: string,
    validator: Validation
}
defineProps<IProps>();
</script>