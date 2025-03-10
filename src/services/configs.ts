const ENDPOINT = process.env.API_URL;

export const serviceConfig = {
  AUTH_LOGIN: `${ENDPOINT}/auth/login`,
  USER_MANAGE: `${ENDPOINT}/user`,
  ROLE_MANAGE: `${ENDPOINT}/role`,
  CATEGORIES_MANAGE: `${ENDPOINT}/category_house`,
  REALTY_MANAGE: `${ENDPOINT}/realtys`,
} as const;
