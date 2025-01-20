<template>
    <Menubar :model="items" class="!bg-transparent !ring-0 !border-0 !shadow-none" id="menuBar">
        <template v-if="!isMobile" #start>
            <router-link v-ripple class="flex align-items-center" to="/">
                <img :src="logo" alt="logo" class="h-6 md:h-8 " :class="{ 'in-home-logo': $route.path === '/home' }" />
            </router-link>

        </template>
        <template #item="{ item, props, hasSubmenu }">
            <router-link v-slot="{ href, navigate }" :to="item.route" custom
                v-if="(!item.onlyMobile || isMobile) && !hasSubmenu && !item.hidden">
                <a v-ripple :href="href" v-bind="props.action" @click="navigate"
                    :class="{ 'text-accent bg-secondary rounded-md bg-opacity-50': $route.meta.key === item.key }">
                    <Icon :icon="item.icon" class="text-2xl" />
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </router-link>
            <span v-else-if="hasSubmenu && !item.hidden">
                <a v-ripple v-bind="props.action"
                    :class="{ 'text-accent bg-secondary rounded-md bg-opacity-50': $route.meta.key === item.key }">
                    <Icon :icon="item.icon" class="text-2xl" />
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </span>

        </template>
        <template #end>
            <div class="flex items-center space-x-4 ">
                <InputText placeholder="Search" type="text" class="hidden xl:block md:w-96  bg-transparent text-primary ring-primary ring-opacity-40
                placeholder:text-primary placeholder:text-opacity-80 focus:ring-2 focus:ring-opacity-60 rounded-md"
                    @focus="opacityNavbar(true)" @blur="opacityNavbar(false)" />
                <AuthContainer v-if="!useUserStore().getToken">
                    <template #button>
                        <Avatar shape="circle"
                            class="cursor-pointer md:hover:scale-105 transition-all ease-in-out bg-secondary" >
                            <template #icon>
                                <IconAction action="add" icon="mdi:account-circle-outline" class=" text-4xl" />
                            </template>
                        </Avatar>
                    </template>
                </AuthContainer>
                <ProfileComponent v-else />
            </div>
        </template>
    </Menubar>
</template>

<script setup lang="ts">
import logo from "@/assets/logo.png";
import { computed, inject, onMounted } from "vue";
import AuthContainer from "./auth/AuthContainer.vue";
import { useUserStore } from "@/stores";
import { UserRole } from "@/types/enums";
import ProfileComponent from "./auth/ProfileComponent.vue";

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

const items = computed(() => [
    {
        label: 'Inicio',
        icon: 'mdi:home',
        route: '/home',
        key: 'home',
        onlyMobile: true
    },
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
        hidden: !Boolean(useUserStore().getToken) || useUserStore().getUser?.role !== UserRole.admin,
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
    }
]);

onMounted(() => {

})
</script>
