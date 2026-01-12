import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/",
    name: "dashboard",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/tasks",
    name: "tasks",
    component: () => import("../views/Tasks.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/Profile.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Route Guard global
router.beforeEach((to, _from, next) => {
  const auth = useAuthStore();

  if (to.name !== "login" && !auth.isLoggedIn) {
    next({ name: "login" }); // Redirige vers login si non connecté
  } else if (to.name === "login" && auth.isLoggedIn) {
    next({ name: "dashboard" }); // Redirige vers dashboard si déjà connecté
  } else {
    next();
  }
});

export default router;
