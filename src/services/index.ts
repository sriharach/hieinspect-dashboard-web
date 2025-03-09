import { RequestSignIn, ResponseSignIn } from '@/types/models/signIn';
import axiosConfig from './axiosConfig';
import { serviceConfig } from './configs';
import { IresponseCommon, IresponsePaginateCommon } from '@/types/common/responseCommon';
import { IreponseDataManageUser } from '@/types/models/manageUser';
import { OptionQuery } from '@/types/common/queryCommon';
import { IManageRoles } from '@/types/models/manageRoles';

// auth
export const POST_AUTH_SIGNIN = (payload: RequestSignIn) =>
  axiosConfig.post<IresponseCommon<ResponseSignIn>>(serviceConfig.AUTH_LOGIN, payload);

// users
export const GET_USER_SERVICE = async (query: OptionQuery) => {
  const newQuery = new URL(serviceConfig.USER_MANAGE);

  if (query.page) newQuery.searchParams.set('page', String(query.page));
  if (query.limit) newQuery.searchParams.set('limit', String(query.limit));
  if (query.search) newQuery.searchParams.set('search', String(query.search));
  const response = await axiosConfig.get<IresponseCommon<IresponsePaginateCommon<IreponseDataManageUser[]>>>(
    newQuery.toString(),
  );
  return response;
};

// role
export const GET_ROLE_SERVICE = async () => {
  const response = await axiosConfig.get<IresponseCommon<IManageRoles[]>>(serviceConfig.ROLE_MANAGE);
  return response.data;
};
