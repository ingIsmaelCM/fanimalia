<template>
    <main class="h-[100dvh] w-screen flex flex-col max-h-[100dvh] ">
        <!-- Topbar -->
        <div class="w-full h-full flex-col ">
            <!-- set transition for router view -->
            <router-view v-slot="{ Component }" class="w-full overflow-auto  h-[100dvh] " id="container"
                @scroll="handleScroll" :class="{ 'pt-16 md:pt-20': $route.path != '/home' }">
                <div class="fixed top-0 z-50 w-full transition-all duration-500 ease-in-out" id="navbarDiv" ref="navbar">
                    <NavBar />
                </div>
                <section>
                    <transition name="slide-fade" mode="out-in" appear class="size-full p-4">
                        <component class="" :is="Component" />
                    </transition>
                </section>
            </router-view>
        </div>
    </main>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue';
import NavBar from './components/NavBar.vue';

const navbar: Ref<HTMLElement | null> = ref(null);

const handleScroll = () => {
    const container = document.getElementById("container");
    const homeParallax = document.getElementById("home-parallax");
    const scrollY =container?.scrollTop || 0;
    const maxOpacity = 1; 
    const opacity = Math.min(scrollY / 500, maxOpacity); // Ajusta '500' según el scroll deseado
    if (navbar.value) {
        navbar.value.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    }
    if (homeParallax) {
        homeParallax.style.opacity = `${1-(opacity*1.5)}`;
    }
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});
</script>