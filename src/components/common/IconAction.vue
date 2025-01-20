<template>
    <Icon :icon="iconProps.icon" :class="iconProps.class" v-bind="$attrs" />
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface IProps {
    action: 'delete' | 'edit' | 'view' | 'add' | 'download' | "menu",
    icon?: string
}

const props = defineProps<IProps>()

const iconProps = computed(() => {
    switch (props.action) {
        case 'delete':
            return {
                icon: props.icon || 'mdi:trash-can-outline',
                class: 'text-2xl text-red-500 text-opacity-90 hover:text-opacity-100'
            }
        case 'edit':
            return {
                icon: props.icon || 'mdi:playlist-edit',
                class: 'text-2xl text-primary text-opacity-90 hover:text-opacity-100'
            }
        case 'view':
            return {
                icon: props.icon || 'mdi:eye-outline',
                class: 'text-2xl text-dark text-opacity-70 hover:text-opacity-100'
            }
        case 'add':
            return {
                icon: props.icon || 'mdi:playlist-plus',
                class: 'text-2xl text-primary text-opacity-90 hover:text-opacity-100'
            }
        case 'download':
            return {
                icon: props.icon || 'mdi:download-outline',
                class: 'text-2xl text-primary text-opacity-90 hover:text-opacity-100'
            }
        case 'menu':
            return {
                icon: props.icon || 'mdi:ellipsis-vertical',
                class: 'text-2xl text-primary text-opacity-90 hover:text-opacity-100'
            }
        default:
            return {
                icon: props.icon || 'mdi:playlist-plus',
                class: 'text-2xl text-primary text-opacity-90 hover:text-opacity-100'
            }
    }
})
</script>