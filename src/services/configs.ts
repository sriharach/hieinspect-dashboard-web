const ENDPOINT = process.env.NEXT_PUBLIC_SERVICE_HOST

export const serviceConfig = {
  AUTH_LOGIN: `${ENDPOINT}/auth/login`,

  USER_MANAGE: `${ENDPOINT}/user`,
  ROLE_MANAGE: `${ENDPOINT}/role`
} as const;
