<template>
    <div class="relative md:grid md:grid-cols-12 gap-8 ">
        <div class="col-span-12 md:col-span-4 fixed md:relative top-0 left-0 w-full image-header">
            <div class="absolute left-0 top-0 w-full z-10 bg-dark"></div>
            <el-image :src="animal.image" :alt="animal.name" fit="cover"
                class="w-full h-56 md:h-full object-cover  z-0 md:rounded-xl  transitionable" loading="lazy" />
        </div>

        <div
            class=" col-span-12 md:col-span-8 flex flex-col justify-start p-0 px-2 pb-4 md:px-0 pt-[5rem] md:pt-0 md:pl-4 md:pr-8 md:py-0 transition-all duration-700 ease-in-out ">
            <div class="flex flex-col justify-end  top-0 bg-opacity-40 
                bg-left-top bg-no-repeat bg-cover">
               <div class="flex justify-between items-center">
                <h1 class="text-2xl md:text-3xl font-bold text-accent z-10">{{ animal.name }}</h1>
                <Button v-if="hasAnyRole([UserRole.admin, UserRole.editor])"
                severity="contrast" @click="$router.push({name: 'admin_animals_edit', params: {id: animal._id}})">
                    <IconAction action="edit"  class="text-2xl" />
                </Button>
               </div>
                <h2 class="text-xl md:text-2xl font-semibold italic z-10">{{ animal.scientific_name }}</h2>
            </div>
            <div class="w-full px-2 pt-4 md:px-0 ">
                <p class="text-justify transition-all duration-700 ease-in-out overflow-hidden cursor-pointer "
                    @click="shrinkDescription = !shrinkDescription" :class="shrinkDescription ? 'h-[6rem]' : ' h-full'"
                    v-html="animal.description"></p>
            </div>
            <TabView class="hidden md:block mt-6 px-2 md:p-0">
                <TabPanel header="Detalles">
                    <AnimalInformation :animal="animal" />
                </TabPanel>
                <TabPanel header="Taxón">
                    <AnimalTaxonomy v-if="animal.taxonomy" :taxonomy="animal.taxonomy" />
                    <div v-else class="flex flex-col items-center justify-center w-full h-full">
                        <Icon icon="mdi:image-off-outline" class="text-primary text-8xl opacity-70" />
                        <h1 class="text-primary text-2xl">No hay información</h1>
                    </div>
                </TabPanel>
                <TabPanel header="Hábitat">
                    <AnimalHabitat v-if="animal.habitat"  :habitat="animal.habitat" />
                    <div v-else class="flex flex-col items-center justify-center w-full h-full">
                        <Icon icon="mdi:image-off-outline" class="text-primary text-8xl opacity-70" />
                        <h1 class="text-primary text-2xl">No hay información</h1>
                    </div>
                </TabPanel>
                <TabPanel header="Alimentación">
                    <AnimalDiet />
                </TabPanel>
                <TabPanel header="Reproducción">
                    <AnimalReproduction />
                </TabPanel>
                <TabPanel header="Relacionados">
                    <AnimalRelated />
                </TabPanel>
                <TabPanel header="Galería">
                    <AnimalGallery />
                </TabPanel>
            </TabView>
            <Accordion class="md:hidden mt-6 px-2 md:p-0">
                <AccordionTab header="Detalles">
                    <AnimalInformation :animal="animal" />
                </AccordionTab>
                <AccordionTab header="Taxón">
                    <AnimalTaxonomy v-if="animal.taxonomy"  :taxonomy="animal.taxonomy"/>
                </AccordionTab>
                <AccordionTab header="Hábitat">
                    <AnimalHabitat v-if="animal.habitat" :habitat="animal.habitat" />
                </AccordionTab>
                <AccordionTab header="Alimentación">
                    <AnimalDiet />
                </AccordionTab>
                <AccordionTab header="Reproducción">
                    <AnimalReproduction />
                </AccordionTab>
                <AccordionTab header="Relacionados">
                    <AnimalRelated />
                </AccordionTab>
                <AccordionTab header="Galería">
                    <AnimalGallery />
                </AccordionTab>
            </Accordion>


        </div>

    </div>
</template>

<script setup lang="ts">
import AnimalDiet from '@/components/animal/AnimalDiet.vue';
import AnimalGallery from '@/components/animal/AnimalGallery.vue';
import AnimalHabitat from '@/components/animal/AnimalHabitat.vue';
import AnimalInformation from '@/components/animal/AnimalInformation.vue';
import AnimalRelated from '@/components/animal/AnimalRelated.vue';
import AnimalReproduction from '@/components/animal/AnimalReproduction.vue';
import AnimalTaxonomy from '@/components/animal/AnimalTaxonomy.vue';
import useAnimal from '@/services/animal.service';
import { hasAnyRole } from '@/services/auth.middleware';
import { UserRole } from '@/types/enums';
import {  onMounted, ref} from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
//const isMobile: Ref<boolean> = inject<Ref<boolean>>('isMobile')!;

const animalId = route.params.id;
const { findAnimal, animal } = useAnimal();

const shrinkDescription = ref(true);


onMounted(() => {
    findAnimal(animalId as string).then(() => {
        document.title = `${animal.value.name} | Animalia`;
    })
})

</script>