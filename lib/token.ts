import { TokenType } from "@interfaces/signin";

function getToken() : TokenType {
  const token = localStorage.getItem('token') ?? "";
  const refresh_token = localStorage.getItem('refresh_token') ?? "";
  return { token : token, refresh_token : refresh_token };
}

function setToken(token : TokenType) {
  localStorage.setItem('token', token.token);
  localStorage.setItem('refresh_token', token.refresh_token);
}

function removeToken() {
  localStorage.removeItem('token');
  localStorage.removeItem('refresh_token');
}

export {
  getToken,
  setToken,
  removeToken
}