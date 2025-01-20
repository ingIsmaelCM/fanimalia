<template>
    <div class="flex flex-col items-center justify-center w-full  md:min-w-[25rem] text-primary ">
        <img :src="logo" alt="logo" class="h-6 md:h-8 " />
        <form class="flex flex-col pt-4 w-full" @submit.prevent="onSubmit">
            <FloatLabel class="my-6 relative">
                <InputText class="w-full" v-model="formData.email" id="email" @focus="validation.email?.$reset()"
                    role="email" aria-label="Correo Electrónico" aria-hidden="true" />
                <ValidationMessage :validator="validation" property="email" placeholder="Correo Electrónico" />
            </FloatLabel>
            <FloatLabel class="my-6 relative">
                <InputText class="w-full" v-model="formData.username" id="username"
                    @focus="validation.username?.$reset()" role="username" aria-label="Username" aria-hidden="true" />
                <ValidationMessage :validator="validation" property="username" placeholder="Nombre de usuario" />
            </FloatLabel>
            <FloatLabel class="my-6 relative">
                <Password class="w-full" input-class="w-full" v-model="formData.password" id="password" :feedback="false"
                    @focus="validation.password?.$reset()" role="password" aria-label="Password" aria-hidden="true" />
                <ValidationMessage :validator="validation" property="password" placeholder="Contraseña" />
            </FloatLabel>
            <Button severity="contrast" class="my-6 mt-4 w-full bg-accent font-bold " @click="onSubmit">
                Crear Cuenta
            </Button>
            <span class="ml-auto">
                ¿Ya tienes cuenta?
                <a href="javascript:void(0)" class="text-sky-300 hover:underline text-sm mt-4 text-center"
                    @click="openLogin">
                    Inicia Sesión
                </a>
            </span>
            <input type="submit" class="hidden" />
        </form>
    </div>
</template>
<script setup lang="ts">
import logo from "@/assets/logo.png";
import { registerRules } from '@/rules/auth.rules';
import useVuelidate from '@vuelidate/core';
import { Ref, ref } from 'vue';
import { IRegister } from "@/types/types";
import { UserRole } from "@/types/enums";
import useAuth from "@/services/auth.service";

const formData: Ref<IRegister> = ref({
    username: '',
    password: '',
    email: '',
    role: UserRole.viewer,
});

const { register } = useAuth();
const validation = useVuelidate(registerRules, formData);

const emit = defineEmits(['ToggleComponent']);


const openLogin = () => {
    console.log('open login')
    emit('ToggleComponent');
}
const onSubmit = () => {
    register(formData.value).then(() => {
        console.log('Registered')
    })
}

</script>
