import { RouteRecordRaw } from "vue-router";


const animalRoutes: Array<RouteRecordRaw> = [
    {
        path: '/admin/animals',
        name: 'admin_animals',
        component: () => import('@/pages/admin/CreateAnimal.vue'),
        meta: {
            title: 'Registro de Animal',
            icon: 'mdi:pets',
            key: 'create_animal'
        }
    },
    {
        path: '/animals/:id',
        name: 'animal',
        component: () => import('@/pages/AnimalPage.vue'),
        meta: {
            title: 'Detalles del Animal',
            icon: 'mdi:pets',
            key: 'animals'
        }
    }
]

export default animalRoutes;