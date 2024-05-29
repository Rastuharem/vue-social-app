import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/MainLayout.vue"),
      redirect: "/home",
      children: [
        { path: "/home", component: () => import("@/pages/HomePage.vue") },
        { path: "/list", component: () => import("@/pages/TodoList.vue") },
      ],
    },
  ],
});
