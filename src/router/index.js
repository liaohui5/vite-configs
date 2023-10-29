import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
export * from "./const";
export * from "./routes";

Vue.use(VueRouter);

export const router = new VueRouter({
  history: "hash",
  routes,
});
