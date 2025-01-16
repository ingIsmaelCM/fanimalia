
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import animalRoutes from "./animals";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
    component: () => import("@/AppLayout.vue"),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/pages/HomePage.vue"),
        meta: {
          key: "home",
          title: "Inicio"
        },
      },
      {
        path: "/animals",
        name: "animals",
        component: () => import("@/pages/AnimalPage.vue"),
        meta: {
          key: "animals",
        },
      },
      {
        path: "/categories",
        name: "categories",
        component: () => import("@/pages/CategoryPage.vue"),
        meta: {
          key: "categories",
          title: "Categorías"
        },
      },
      {
        path: "/habitats",
        name: "habitats",
        component: () => import("@/pages/HabitatPage.vue"),
        meta: {
          key: "habitats",
          title: "Hábitats"
        },
      },
      {
        path: "/danger",
        name: "danger",
        component: () => import("@/pages/DangerPage.vue"),
        meta: {
          key: "danger",
          title: "En Peligro de Extinción"
        },
      },
      ...animalRoutes

    ],
  },

  /*   {
      path: "/auth/login",
      name: "login",
      component: () => import("@/views/auth/LoginPage.vue"),
      meta: {
        requiresAuth: false,
      },
    }, */
];

const router = createRouter({

  history: createWebHistory(),
  routes,
});

export default router;