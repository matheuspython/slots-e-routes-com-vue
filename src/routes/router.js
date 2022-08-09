import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "@/pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "TheHome",
    component: <HomeVue page="home"/>,
  },
  {
    path: "/sobre",
    name: "TheSobre",
    component: <HomeVue page="sobre"/>,
  },
  {
    path: "/contato",
    name: "TheContato",
    component: <HomeVue page="contato"/>,
  },
  {
    path: "/localizacao",
    name: "TheLocalizacao",
    component: <HomeVue page="localizacao"/>,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
