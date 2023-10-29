export const TOKEN_KEY = '__user_token__';

export function setToken(token) {
  window.localStorage.setItem(TOKEN_KEY, token);
}

export function getToken() {
  window.localStorage.getItem(TOKEN);
}

export function hasToken() {
  return Boolean(getToken());
}
