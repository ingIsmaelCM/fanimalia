<template>
    <div class="relative md:grid md:grid-cols-12 gap-8 ">
        <div class="col-span-12 md:col-span-4 fixed md:relative top-0 left-0 w-full image-header">
            <div class="absolute left-0 top-0 w-full z-10 bg-dark"></div>
            <el-image :src="animal.image" :alt="animal.name" fit="cover"
                class="w-full h-56 md:h-full object-cover  z-0 md:rounded-xl image " loading="lazy" />
        </div>

        <div
            class=" col-span-12 md:col-span-8 flex flex-col justify-start p-0 px-2 pb-4 md:px-0 pt-[5rem] md:pt-0 md:pl-4 md:pr-8 md:py-0 transition-all duration-700 ease-in-out ">
            <div class="flex flex-col justify-end  top-0 bg-opacity-40 
                bg-left-top bg-no-repeat bg-cover">
                <h1 class="text-2xl md:text-3xl font-bold text-accent z-10">{{ animal.name }}</h1>
                <h2 class="text-xl md:text-2xl font-semibold italic z-10">{{ animal.scientific_name }}</h2>
            </div>
            <div class="w-full px-2 pt-4 md:px-0 ">
                <p class="text-justify transition-all duration-700 ease-in-out overflow-hidden cursor-pointer "
                    @click="shrinkDescription = !shrinkDescription" :class="shrinkDescription ? 'h-[6rem]' : ' h-full'"
                    v-html="animal.description"></p>
            </div>
            <TabView class="mt-6 px-2 md:p-0">
                <TabPanel header="Detalles">
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>
                </TabPanel>al
                <TabPanel header="Hábitat y Alimentación">
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                        dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non
                        numquam eius modi.
                    </p>
                </TabPanel>
                <TabPanel header="Comportamiento">
                    <p class="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                        provident, similique sunt in culpa qui
                        officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
                        est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                        impedit quo minus.
                    </p>
                </TabPanel>
            </TabView>


        </div>

    </div>
</template>

<script setup lang="ts">
import useAnimal from '@/services/animal.service';
import { inject, onMounted, ref, Ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isMobile: Ref<boolean> = inject<Ref<boolean>>('isMobile')!;

const animalId = route.params.id;
const { findAnimal, animal } = useAnimal();

const shrinkDescription = ref(true);


onMounted(() => {
    findAnimal(animalId as string).then(() => {
        document.title = `${animal.value.name} | Animalia`;
    })
})

</script>