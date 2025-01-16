import { RouteRecordRaw } from "vue-router";


const animalRoutes: Array<RouteRecordRaw> = [
    {
        path: '/admin/animals',
        name: 'admin_animals',
        component: () => import('@/pages/admin/CreateAnimal.vue'),
        meta: {
            title: 'Animales',
            icon: 'mdi:pets'
        }
    },
    {
        path: '/animals/:id',
        name: 'animal',
        component: () => import('@/pages/AnimalPage.vue'),
        meta: {
            title: 'Animales',
            icon: 'mdi:pets'
        }
    }
]

export default animalRoutes;