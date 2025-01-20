<template>
    <div class="flex flex-col items-center justify-center w-full  md:min-w-[25rem] text-primary ">
        <img :src="logo" alt="logo" class="h-6 md:h-8 " />
        <form class="flex flex-col pt-4" @submit.prevent="onSubmit">
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
                Iniciar Sesión
            </Button>
            <span class="ml-auto">
                ¿No tienes cuenta?
                <a href="javascript:void(0)" class="text-sky-300 hover:underline text-sm mt-4 text-center" @click="openRegister">
                    Regístrate
                </a>
            </span>
            <input type="submit" class="hidden" />

        </form>
    </div>
</template>
<script setup lang="ts">
import logo from "@/assets/logo.png";
import { authRules } from '@/rules/auth.rules';
import useAuth from '@/services/auth.service';
import { IAuth } from "@/types/types";
import useVuelidate from '@vuelidate/core';
import { Ref, ref } from 'vue';

const { login } = useAuth();

const formData: Ref<IAuth> = ref({
    username: '',
    password: '',
    rememberMe: false
});

const emit = defineEmits(['ToggleComponent']);

const validation = useVuelidate(authRules, formData);

const openRegister = () => {
    emit('ToggleComponent');
}

const onSubmit = () => {
    login(formData.value).then(() => {
        formData.value = {
            username: '',
            password: '',
            rememberMe: false
        }
    })
}

</script>