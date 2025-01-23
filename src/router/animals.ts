import { RouteRecordRaw } from "vue-router";


const animalRoutes: Array<RouteRecordRaw> = [
    {
        path: "/animals",
        name: "animals",
        component: () => import("@/pages/AnimalPage.vue"),
        meta: {
            key: "animals",
        },
    },
    {
        path: '/admin/animals',
        name: 'admin_animals_create',
        component: () => import('@/pages/admin/CreateAnimal.vue'),
        meta: {
            title: 'Registro de Animal',
            key: 'create_animal'
        }
    },
    {
        path: '/admin/animals/:id',
        name: 'admin_animals_edit',
        component: () => import('@/pages/admin/CreateAnimal.vue'),
        meta: {
            title: 'Edición de Animal',
            key: 'create_animal'
        }
    },
    {
        path: '/animals/:id',
        name: 'animal',
        component: () => import('@/pages/AnimalDetails.vue'),
        meta: {
            title: 'Detalles del Animal',
            key: 'animals'
        }
    },


]

export default animalRoutes;