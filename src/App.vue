

<template>
   <router-view class="overflow-hidden size-full  mx-auto text-primary" 
      />
</template>

<script setup lang="ts">
import { computed, provide } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();


const isMobile = computed(() => window.matchMedia("(max-width: 768px)").matches);
provide('isMobile', isMobile);

router.afterEach((to) => {
    if (to.meta.title) {
        document.title = `${to.meta.title} | Animalia`;
    } else {
        document.title = "Animalia";
    }
})

</script>
