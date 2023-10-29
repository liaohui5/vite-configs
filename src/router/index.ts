import { type App } from 'vue';
import { createRouter, createWebHashHistory, type Router } from 'vue-router';
import { setupRouterGuards } from './guards';
import { routes } from './routes';

export * from './const';
export * from './guards';
export * from './routes';

export let _router: Router;
export function setupRouter(app: App) {
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

  setupRouterGuards(router);
  setRouterInstance(router);
  app.use(router);
}

export function setRouterInstance(router: Router) {
  _router = router;
}
export function getRouterInstance() {
  return _router;
}
