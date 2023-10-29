import { routes, RouteNames } from '@/router';
import { setupRouterMock } from '@/__tests__/helpers/router-mock';
import { RouterMock } from 'vue-router-mock';
import { start, done } from '@/shared/progress';

vi.mock('@/shared/progress', () => {
  return {
    start: vi.fn(),
    done: vi.fn(),
  };
});

describe('router', () => {
  let routerMock: RouterMock;
  beforeEach(() => {
    routerMock = setupRouterMock({
      routes,
      useRealNavigation: true,
    });
  });

  it('should be add loading progress when route change', async () => {
    await routerMock.push({ name: RouteNames.HOME });
    expect(start).toBeCalled();
    expect(done).toBeCalled();
  });
});
