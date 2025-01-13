

<template>
   <router-view class="overflow-hidden size-full max-w-screen-2xl mx-auto text-primary p-4" 
      />
</template>

<script setup lang="ts">
import { computed, provide } from 'vue';


const isMobile = computed(() => window.matchMedia("(max-width: 768px)").matches);
provide('isMobile', isMobile);
</script>
