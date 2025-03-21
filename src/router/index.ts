import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import UsersView from "../views/UsersView.vue";
import HomeView from "../views/HomeView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/dashboard", component: Dashboard },
  { path: "/users", component: UsersView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
