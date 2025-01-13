<template>
    <main class="h-[100dvh] w-screen flex flex-col max-h-[100dvh] p-2 ">
        <!-- Topbar -->
        <NavBar />
            <div class="w-full h-full flex-col p-4">
                <!-- set transition for router view -->
                <router-view v-slot="{ Component }"
                    class="w-full  overflow-auto h-[calc(100dvh-7.2rem)] md:h-[calc(100dvh-3.6rem)]" >
                    <section>
                        <transition name="slide-fade" mode="out-in" appear class="size-full">
                            <component class="" :is="Component" />
                        </transition>
                    </section>
                </router-view>
        </div>
    </main>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>