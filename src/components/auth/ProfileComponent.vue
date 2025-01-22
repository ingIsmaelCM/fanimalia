<template>
    <div id="profile" class="relative w-full md:w-max">
      <Button @click="toggleOverlay" severity="contrast" rounded>
        <MazAvatar :caption="useUserStore().getUser?.username" roundedSize="full"
          class="rounded-full " size="0.6rem" />
      </Button>
  
      <OverlayPanel ref="oProfile" id="oProfile" :model="items" popup appendTo="#menuBar"> 
        <div class="flex flex-col justify-center space-y-4">
          <CustomConfirm :isConfirm="item.isConfirm" v-for="item in items" :key="item.label" width="200"
            title="?Desea cerrar sesión?" :accept="item.command"
            confirmText="Aceptar"
            cancelText="Cancelar">
            <button class="w-full !text-left flex space-x-2 !text-primary"
              @click="() => { !item.isConfirm ? item.command() : '' }">
              <Icon :icon="item.icon" class="text-3xl !text-primary" />
              <span class="ml-2 !text-primary max-w-36 ellipsis">{{ item.label }}</span>
            </button>
          </CustomConfirm>
        </div>
      </OverlayPanel>
  
    </div>
  </template>
  
  <script setup lang="ts">
  import { useUserStore } from "@/stores";
  import { ref, Ref } from "vue";
  import CustomConfirm from "../common/CustomConfirm.vue";
  import MazAvatar from "maz-ui/components/MazAvatar"
  import useAuth from "@/services/auth.service";
  import { useRouter } from "vue-router";
  import OverlayPanel from "primevue/overlaypanel";
  
  const { logout } = useAuth();
  const router = useRouter();
  
  const oProfile: Ref<OverlayPanel | null> = ref(null);
  
  const items = ref([
    {
      label: useUserStore().getUser.username,
      icon: "mdi:account-outline",
      isConfirm: false,
      command: () => router.push({ name: "profile" }),
    },
    {
      label: "Cerrar sesión",
      icon: "mdi:logout",
      isConfirm: true,
      command: logout
    },
  ]);
  const toggleOverlay = (event: Event) => {
    if (oProfile.value) {
      oProfile.value.toggle(event);
    }
  };
  
  
  </script>