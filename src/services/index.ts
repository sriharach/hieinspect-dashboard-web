import { RequestSignIn, ResponseSignIn } from '@/types/models/signIn';
import axiosConfig from './axiosConfig';
import { serviceConfig } from './configs';
import { IresponseCommon } from '@/types/common/responseCommon';

export const POST_AUTH_SIGNIN = (payload: RequestSignIn) =>
  axiosConfig.post<IresponseCommon<ResponseSignIn>>(serviceConfig.AUTH_LOGIN, payload);
