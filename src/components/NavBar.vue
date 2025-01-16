<template>
    <Menubar :model="items" class="!bg-transparent !ring-0 !border-0 !shadow-none">
        <template #start>
            <router-link v-ripple class="flex align-items-center" to="/">
                <img :src="logo" alt="logo" class="h-6 md:h-8 " :class="{ 'in-home-logo': $route.path === '/home' }" />
            </router-link>
        </template>
        <template #item="{ item, props, hasSubmenu }">
            <router-link v-slot="{ href, navigate }" :to="item.route" custom 
                v-if="(!item.onlyMobile || isMobile) && !hasSubmenu">
                <a v-ripple :href="href" v-bind="props.action" @click="navigate"
                    :class="{ 'text-accent bg-secondary rounded-md bg-opacity-50': $route.meta.key === item.key}">
                    <Icon :icon="item.icon" class="text-2xl" />
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </router-link>
            <span v-else-if="hasSubmenu">
                <a v-ripple v-bind="props.action"
                    :class="{ 'text-accent bg-secondary rounded-md bg-opacity-50': $route.meta.key === item.key }">
                    <Icon :icon="item.icon" class="text-2xl" />
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </span>

        </template>
        <template v-if="!isMobile" #end>
            <div class="flex align-items-center gap-2">
                <InputText placeholder="Search" type="text" class="hidden xl:block md:w-96  bg-transparent text-primary ring-primary ring-opacity-40
                placeholder:text-primary placeholder:text-opacity-80 focus:ring-2 focus:ring-opacity-60 rounded-md"
                    @focus="opacityNavbar(true)" @blur="opacityNavbar(false)" />
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
            </div>
        </template>
    </Menubar>
</template>

<script setup lang="ts">
import logo from "@/assets/logo.png";
import { inject, onMounted, ref } from "vue";

const isMobile = inject('isMobile');

const opacityNavbar = (state: boolean) => {
    const navbarDiv = document.getElementById("navbarDiv");
    if (navbarDiv) {
        if (state) {
            navbarDiv.style.backgroundColor = "rgba(0, 0, 0, 1)";
        } else {
            navbarDiv.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
    }
};

const items = ref([
    {
        label: 'Animales',
        icon: 'mdi:pets',
        route: '/animals',
        key: 'animals'
    },
    {
        label: 'Categorías',
        icon: 'mdi:tag-multiple',
        route: '/categories',
        key: 'categories'
    },
    {
        label: 'Hábitats',
        icon: 'mdi:leaf',
        route: '/habitats',
        key: 'habitats'

    },
    {
        label: 'En Peligro',
        icon: 'mdi:alert-circle',
        route: '/danger',
        key: 'danger'
    },
    {
        label: 'Administrar',
        icon: 'mdi:cog',
        items: [
            {
                label: 'Animales',
                icon: 'mdi:pets',
                route: '/admin/animals',
                key: 'create_animal'
            },
            {
                label: 'Categorias',
                icon: 'mdi:tag-multiple',
                route: '/admin/categories',
                key: 'create_category'
            },
            {
                label: "Usuarios",
                icon: "mdi:account-multiple",
                route: "/admin/users",
                key: 'users'
            }
        ]
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
