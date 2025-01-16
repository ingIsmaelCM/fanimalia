<template>
  <span @click="openDialog = !openDialog"
    :class="{ 'pointer-events-none text-gray cursor-not-allowed opacity-60': disabled }">
    <slot name="button" />
  </span>

  <Dialog  :dismissable="!!dismissable"
    v-bind="$attrs" :draggable="true" v-model:visible="openDialog" :modal="!showBack">
    <template #header>
      <span class="font-semibold text-gray text-lg md:text-xl px-2">{{ title  }}</span>
    </template>
    <template #closeicon>
      <Icon icon="mdi:close" class="text-2xl" />
    </template>
    <div class="">
      <slot />
    </div>
    <slot name="footer" />
  </Dialog>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";

interface IProps {
  title?: string;
  initOpen?: boolean;
  disabled?: boolean;
  dismissable?: boolean;
}

const props = defineProps<IProps>();
const openDialog: Ref<boolean> = ref(props.initOpen || false);
const showBack: Ref<boolean> = ref(false);
</script>
