<template>
        <Menubar :model="items" class="!bg-transparent !ring-0 !border-0 !shadow-none">
            <template #start>
                <router-link v-ripple class="flex align-items-center" to="/">
                    <img :src="logo" alt="logo" class="h-6 md:h-8 " :class="{ 'in-home-logo': $route.path === '/home' }" />
                </router-link>
            </template>
            <template #item="{ item, props }">
                <router-link v-slot="{ href, navigate }" :to="item.route" custom
                    :active="item.route === $route.path"
                    v-if="!item.onlyMobile || isMobile">
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate"
                    :class="{ 'text-accent bg-secondary rounded-md bg-opacity-50': item.route === $route.path }">
                        <Icon :icon="item.icon" class="text-2xl" />
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                </router-link>

            </template>
            <template v-if="!isMobile" #end>
                <div class="flex align-items-center gap-2">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                </div>
            </template>
        </Menubar>
</template>

<script setup lang="ts">
import logo from "@/assets/logo.png";
import {  inject, onMounted, ref } from "vue";

const isMobile = inject('isMobile');

const items = ref([
    {
        label: 'Animales',
        icon: 'mdi:pets',
        route: '/animals'
    },
    {
        label: 'Categorías',
        icon: 'mdi:family-tree',
        route: '/categories'
    },
    {
        label: 'Hábitats',
        icon: 'mdi:leaf',
        route: '/habitats'

    },
    {
        label: 'En Peligro',
        icon: 'mdi:alert-circle',
        route: '/danger'
    },
    {
        label: 'Mi Perfil',
        icon: 'mdi:account-circle',
        route: '/profile',
        onlyMobile: true
    }
]);

onMounted(() => {
   
})
</script>
