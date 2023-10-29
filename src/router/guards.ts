import { type Router } from 'vue-router';
import { start, done } from '@/shared/progress';

function setLoadingProgress(router: Router): void {
  router.beforeEach(() => start());
  router.afterEach(() => done());
}

export function setupRouterGuards(router: Router) {
  setLoadingProgress(router);
}
