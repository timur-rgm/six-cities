const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

type TokenType = string;

export function getToken(): TokenType {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};

export function saveToken(token: TokenType): void {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

export function dropToken(): void {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};
