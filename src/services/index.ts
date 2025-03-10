import { RequestSignIn, ResponseSignIn } from '@/types/models/signIn';
import axiosConfig from './axiosConfig';
import { serviceConfig } from './configs';
import {
  IresponseCommon,
  IresponsePaginateCommon,
} from '@/types/common/responseCommon';
import {
  IreponseDataManageUser,
  RequestManageUser,
} from '@/types/models/manageUser';
import { OptionQuery } from '@/types/common/queryCommon';
import { IManageRoles } from '@/types/models/manageRoles';
import {
  IManageHouseCategories,
  RequestManageHouseCategories,
} from '@/types/models/manageHouseCategories';

function commonPayloadQuery(url: string, query?: OptionQuery) {
  const newQuery = new URL(url);

  if (query?.page) newQuery.searchParams.set('page', String(query.page));
  if (query?.limit) newQuery.searchParams.set('limit', String(query.limit));
  if (query?.search) newQuery.searchParams.set('search', String(query.search));
  if (query?.searchBy)
    newQuery.searchParams.set('searchBy', String(query.searchBy));

  return newQuery.toString();
}

// auth
export const POST_AUTH_SIGNIN = (payload: RequestSignIn) =>
  axiosConfig.post<IresponseCommon<ResponseSignIn>>(
    serviceConfig.AUTH_LOGIN,
    payload,
  );

// users
export const GET_USER_SERVICE = async (query: OptionQuery) => {
  const response = await axiosConfig.get<
    IresponseCommon<IresponsePaginateCommon<IreponseDataManageUser[]>>
  >(commonPayloadQuery(serviceConfig.USER_MANAGE, query));
  return response;
};

export const POST_USER_SERVICE = async (payload: RequestManageUser) => {
  const response = await axiosConfig.post(serviceConfig.USER_MANAGE, payload);
  return response.data;
};

export const DELETE_USER_SERVICE = async (payload: RequestManageUser['id']) => {
  const response = await axiosConfig.delete(
    `${serviceConfig.USER_MANAGE}/${payload}`,
  );
  return response.data;
};

// role
export const GET_ROLE_SERVICE = async () => {
  const response = await axiosConfig.get<IresponseCommon<IManageRoles[]>>(
    serviceConfig.ROLE_MANAGE,
  );
  return response.data;
};

export const POST_ROLE_SERVICE = async (payload: IManageRoles['name']) => {
  const response = await axiosConfig.post(serviceConfig.ROLE_MANAGE, {
    name: payload,
  });
  return response.data;
};

export const DELETE_ROLE_SERVICE = async (payload: IManageRoles['id']) => {
  const response = await axiosConfig.delete(
    `${serviceConfig.ROLE_MANAGE}/${payload}`,
  );
  return response.data;
};

// categories
export const GET_CATEGORIES_SERVICE = async (query?: OptionQuery) => {
  const response = await axiosConfig.get<
    IresponseCommon<IManageHouseCategories[]>
  >(commonPayloadQuery(serviceConfig.CATEGORIES_MANAGE, query));
  return response.data;
};

export const POST_CATEGORIES_SERVICE = async (
  payload: RequestManageHouseCategories['name'],
) => {
  const response = await axiosConfig.post(
    commonPayloadQuery(serviceConfig.CATEGORIES_MANAGE),
    { name: payload },
  );
  return response.data;
};

export const DELETE_CATEGORIES_SERVICE = async (payload: RequestManageHouseCategories['id']) => {
  const response = await axiosConfig.delete(
    `${serviceConfig.CATEGORIES_MANAGE}/${payload}`,
  );
  return response.data;
};
