import { createRouter, createWebHistory } from "vue-router";
import Dark from "../views/Dark.vue";
import Light from "../views/Light.vue";

const routes = [
  {
    path: "/",
    name: "Dark",
    component: Dark,
  },
  {
    path: "/.",
    name: "Light",
    component: Light,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
