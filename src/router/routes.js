import { ROUTE_NAMES } from "./const";
import Home from "@/pages/home/index.vue";
import About from "@/pages/about/index.vue";

export const routes = [
  {
    path: "/home",
    name: ROUTE_NAMES.HOME,
    component: Home,
  },
  {
    path: "/about",
    name: ROUTE_NAMES.ABOUT,
    component: About,
  },
];
