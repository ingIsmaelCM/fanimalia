<template>
    <Toast position="bottom-right">
        <template #message="{ message }: { 'message': Message }">
            <div class="flex items-center" :class="message.className">
                <Icon :icon="toastIcons[message.severity]" class="text-3xl mr-2" />
                <div>
                    <h4 class="m-0 font-bold ">{{
                        message.summary }}</h4>
                    <div class="mt-3 line-clamp-3">{{ message.detail }}</div>
                </div>
            </div>
        </template>
    </Toast>
    <div class="fixed  items-center justify-center w-full h-full bg-black bg-opacity-50 z-[99999]"
        :class="useGlobalStore().getLoading ? 'flex flex-col' : 'hidden'">
        <div class="loader"></div>
        <span :data-text="useGlobalStore().getLoadingText" v-if="useGlobalStore().getLoadingText"
            class="text-primary text-xl md:text-2xl mt-2 uppercase font-bold text-loader">
            <span v-for="t in useGlobalStore().getLoadingText" :key="t" v-html="t">
            </span>

        </span>
    </div>
    <router-view class="overflow-hidden size-full  mx-auto text-primary" />
</template>

<script setup lang="ts">
import { computed, provide, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useGlobalStore } from './stores';
const router = useRouter();


const isMobile = computed(() => window.matchMedia("(max-width: 768px)").matches);
provide('isMobile', isMobile);

type Message = {
    summary: string,
    detail: string,
    severity: string,
    className: string,
}

router.afterEach((to) => {
    if (to.meta.title) {
        document.title = `${to.meta.title} | Animalia`;
    } else {
        document.title = "Animalia";
    }
})
router.beforeEach(() => {
    document.startViewTransition && document.startViewTransition()
})
const toastIcons = ref({
    'success': "line-md:check-all",
    'info': "line-md:alert-circle",
    'warn': "line-md:alert",
    'error': "line-md:close-circle",
    undefined: "line-md:alert-circle"
})


</script>
