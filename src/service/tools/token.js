export const TOKEN_KEY = '__user_token__';

export const saveToken = setToken;
export function setToken(token) {
  window.localStorage.setItem(TOKEN_KEY, token);
}

export function getToken() {
  return window.localStorage.getItem(TOKEN_KEY);
}

export function hasToken() {
  return Boolean(getToken());
}

export function removeToken() {
  window.localStorage.removeItem(TOKEN_KEY);
}
