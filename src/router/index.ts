import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import UsersView from "../views/UsersView.vue";
import HomeView from "../views/HomeView.vue";
import ProductsView from "../views/ProductsView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/dashboard", component: DashboardView },
  { path: "/users", component: UsersView },
  { path: "/products", component: ProductsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
