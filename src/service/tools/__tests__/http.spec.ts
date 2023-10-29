import AxiosMockAdapter from 'axios-mock-adapter';
import { removeToken, saveToken } from '@/service/tools/token';
import { http, TOKEN_HEADER_KEY } from '@/service/tools/http';
import { errorHandler } from '@/service/tools/errorHandler';

vi.mock('@/service/tools/errorHandler', () => {
  return {
    errorHandler: vi.fn(),
  };
});

interface MockResponseBody {
  code?: number;
  msg?: string;
  data?: unknown;
}

const mockHttp = new AxiosMockAdapter(http);
function mockReply(httpStatusCode: number, response?: MockResponseBody) {
  if (response) {
    // TODO: 注意要和服务端核对数据结构, 否则测试可以通过, 但是实际代码无法通过
    const { code = 0, msg = '', data = null } = response;
    mockHttp.onGet('/api/users').reply(httpStatusCode, { code, msg, data });
  } else {
    mockHttp.onGet('/api/users').reply(httpStatusCode);
  }
}

function triggerApiRequest() {
  return http.get('/api/users');
}

describe('http', () => {
  beforeEach(() => {
    removeToken();
    mockHttp.reset();
  });

  it(`should add request header ${TOKEN_HEADER_KEY} when has token`, async () => {
    const token = 'token-string';
    saveToken(token);
    mockReply(200, {});
    await triggerApiRequest();

    expect(mockHttp.history.get[0].headers![TOKEN_HEADER_KEY]).toBe(token);
  });

  it('should throw an error when code is not 0', async () => {
    const msg = 'error-message';
    mockReply(200, { code: 1, msg });
    await expect(() => triggerApiRequest()).rejects.toThrow(msg);
  });

  it('should resolved response body data when success is true', async () => {
    const data = 1;
    mockReply(200, { data });
    const res = await triggerApiRequest();
    expect(res).toBe(data);
  });

  it('should throw an error when http status is not 200', async () => {
    mockReply(1);
    await expect(() => triggerApiRequest()).rejects.toThrow();
  });

  it('should call errorHandler function when http status is not 200', async () => {
    mockReply(500);
    await expect(() => triggerApiRequest()).rejects.toThrow();
    expect(errorHandler).toBeCalled();
  });
});
