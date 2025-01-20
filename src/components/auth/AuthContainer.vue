<template>
    <div class="relative w-full md:w-max overflow-hidden " @show="onOpenOverlay">
        <span @click="showAuthOverlay">
            <slot name="button" />
        </span>
        <OverlayPanel ref="authOverlay" appendTo="#menuBar" :dismissable="true" >
            <transition v-if="isLogincomponent" name="slide-fade" mode="out-in" appear class="size-full p-4 bg-secondary rounded-xl" >
                <component class="" :is="LoginComponent" @ToggleComponent="toggleComponent(false)"  />
            </transition>
            <transition v-else name="slide-fade" mode="out-in" appear class="size-full p-4 bg-secondary rounded-xl">
                <component class="" :is="RegisterComponent" @ToggleComponent="toggleComponent(true)"  />
            </transition>   
        </OverlayPanel>
    </div>
</template>

<script setup lang="ts">
import OverlayPanel from 'primevue/overlaypanel';
import { ref, Ref } from 'vue';
import LoginComponent from './LoginComponent.vue';
import RegisterComponent from './RegisterComponent.vue';

const isLogincomponent = ref(true);

const authOverlay: Ref<OverlayPanel | null> = ref(null);

const initialEvent: Ref<MouseEvent | null> = ref(null);



const showAuthOverlay = (event: MouseEvent) => {
    initialEvent.value = event;
    authOverlay.value?.toggle(event);
}

const onOpenOverlay = () => {
   isLogincomponent.value = true;
}

const toggleComponent = (isLogin: boolean) => {
    isLogincomponent.value = isLogin;
}   

</script>