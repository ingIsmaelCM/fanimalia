
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

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
        },
        {
          path: "/animals",
          name: "animals",
          component: () => import("@/pages/AnimalPage.vue"),
        },
        {
          path: "/categories",
          name: "categories",
          component: () => import("@/pages/CategoryPage.vue"),
        },
        {
          path: "/habitats",
          name: "habitats",
          component: () => import("@/pages/HabitatPage.vue"),
        },
        {
          path: "/danger",
          name: "danger",
          component: () => import("@/pages/DangerPage.vue"),
        },
        
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