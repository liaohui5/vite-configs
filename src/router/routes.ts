import About from '@/pages/about/index.vue';
import Home from '@/pages/home/index.vue';
import { type RouteRecordRaw } from 'vue-router';
import { RouteNames } from './const';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: RouteNames.HOME,
    component: Home,
  },
  {
    path: '/about',
    name: RouteNames.ABOUT,
    component: About,
  },
];
