<template>
  <label
  :title="validator[property].$error ? validator[property].$errors[0].$message : ''"
    class="ellipsis w-[90%] text-xs md:text-base md:-translate-y-1.5 label-error pr-3"
    :class="validator[property].$error ? 'text-red-200' : 'text-gray-300 '"
    >
    <sup v-if="validator[property].required" class="-mr-1"><small class="text-red-500">*</small></sup>
    {{
      validator[property].$error
        ? validator[property].$errors[0].$message
        : placeholder
    }}</label
  >
</template>

<script setup lang="ts">
import { Validation } from "@vuelidate/core";

interface IProps {
  validator: Validation;
  property: string;
  placeholder: string;
}

defineProps<IProps>();
</script>

