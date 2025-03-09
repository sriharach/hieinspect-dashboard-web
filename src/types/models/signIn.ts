export interface RequestSignIn {
  username: string;
  password: string;
}

export interface ResponseSignIn {
  access_token: string;
  refresh_token: string;
}

export interface IDecodePayload {
  exp: number;
  first_name: string;
  iat: number;
  id: string;
  is_active: boolean;
  last_name: string | null;
  role_name: string;
  username: string;
}
