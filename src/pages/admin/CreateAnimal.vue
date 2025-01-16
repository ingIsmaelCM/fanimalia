<template>
    <div class="flex flex-col gap-4 p-8">
        <h1 class="text-2xl font-bold">Registro de datos para nuevo animal</h1>
        <form class="grid grid-cols-12 gap-x-4 gap-y-8 pt-8 text-primary max-w-2xl">
            <FloatLabel class="col-span-6 relative">
                <InputText class="w-full" v-model="newAnimal.name" id="name" @focus="$v.name?.$reset()" />
                <ValidationMessage :validator="$v" property="name" placeholder="Nombre común del animal" />
            </FloatLabel>
        </form>
    </div>
</template>
<script setup lang="ts">
import { animalRules } from '@/rules/animal.rules';
import useAnimal from '@/services/animal.service';
import useVuelidate from '@vuelidate/core';


const { newAnimal } = useAnimal();

const $v = useVuelidate(animalRules, newAnimal);

</script>