

<template>
   <router-view class="overflow-hidden size-full  mx-auto text-primary" 
      />
</template>

<script setup lang="ts">
import { computed, provide } from 'vue';


const isMobile = computed(() => window.matchMedia("(max-width: 768px)").matches);
provide('isMobile', isMobile);
</script>
