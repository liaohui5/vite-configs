import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './routes';

export * from './const';
export * from './routes';

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});