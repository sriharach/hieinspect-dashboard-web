import { RequestSignIn, ResponseSignIn } from '@/types/models/signIn';
import axiosConfig from './axiosConfig';
import { serviceConfig } from './configs';
import { IresponseCommon, IresponsePaginateCommon } from '@/types/common/responseCommon';
import { IreponseDataManageUser, RequestManageUser } from '@/types/models/manageUser';
import { OptionQuery } from '@/types/common/queryCommon';
import { IManageRoles } from '@/types/models/manageRoles';
import { IManageHouseCategories, RequestManageHouseCategories } from '@/types/models/manageHouseCategories';
import { IManageRealtys, RequestManageRealtys } from '@/types/models/manageRealtys';
import { IManageHouse, RequestManageHouse, ResponseManageHouse } from '@/types/models/manageHouse';
import { RequestUploadPath, ResponseUploadPath } from '@/types/models/upload';

function commonPayloadQuery(url: string, query?: OptionQuery) {
  const newQuery = new URL(url);

  if (query?.page) newQuery.searchParams.set('page', String(query.page));
  if (query?.limit) newQuery.searchParams.set('limit', String(query.limit));
  if (query?.search) newQuery.searchParams.set('search', String(query.search));
  if (query?.searchBy) newQuery.searchParams.set('searchBy', String(query.searchBy));

  return newQuery.toString();
}

// auth
export const POST_AUTH_SIGNIN = (payload: RequestSignIn) =>
  axiosConfig.post<IresponseCommon<ResponseSignIn>>(serviceConfig.AUTH_LOGIN, payload);

// users
export const GET_USER_SERVICE = async (query: OptionQuery) => {
  const response = await axiosConfig.get<IresponseCommon<IresponsePaginateCommon<IreponseDataManageUser[]>>>(
    commonPayloadQuery(serviceConfig.USER_MANAGE, query),
  );
  return response.data;
};

export const GET_ONCE_USER_SERVICE = async (payload: RequestManageUser['id']) => {
  const response = await axiosConfig.get<IresponseCommon<IreponseDataManageUser>>(
    commonPayloadQuery(`${serviceConfig.USER_MANAGE}/${payload}`),
  );
  return response.data;
};

export const POST_USER_SERVICE = async (payload: RequestManageUser) => {
  const response = await axiosConfig.post(serviceConfig.USER_MANAGE, payload);
  return response.data;
};

export const PUT_USER_SERVICE = async (payload: RequestManageUser) => {
  const response = await axiosConfig.put(`${serviceConfig.USER_MANAGE}/${payload.id}`, payload);
  return response.data;
};

export const DELETE_USER_SERVICE = async (payload: RequestManageUser['id']) => {
  const response = await axiosConfig.delete(`${serviceConfig.USER_MANAGE}/${payload}`);
  return response.data;
};

// role
export const GET_ROLE_SERVICE = async () => {
  const response = await axiosConfig.get<IresponseCommon<IManageRoles[]>>(serviceConfig.ROLE_MANAGE);
  return response.data;
};

export const GET_ONCE_ROLE_SERVICE = async (payload: IManageRoles['id']) => {
  const response = await axiosConfig.get<IresponseCommon<IManageRoles>>(`${serviceConfig.ROLE_MANAGE}/${payload}`);
  return response.data;
};

export const POST_ROLE_SERVICE = async (payload: IManageRoles) => {
  const response = await axiosConfig.post(serviceConfig.ROLE_MANAGE, payload);
  return response.data;
};

export const DELETE_ROLE_SERVICE = async (payload: IManageRoles['id']) => {
  const response = await axiosConfig.delete(`${serviceConfig.ROLE_MANAGE}/${payload}`);
  return response.data;
};

// categories
export const GET_CATEGORIES_SERVICE = async (query?: OptionQuery) => {
  const response = await axiosConfig.get<IresponseCommon<IresponsePaginateCommon<IManageHouseCategories[]>>>(
    commonPayloadQuery(serviceConfig.CATEGORIES_MANAGE, query),
  );
  return response.data;
};

export const GET_CATEGORIES_ALL_SERVICE = async () => {
  const response = await axiosConfig.get<IresponseCommon<IManageHouseCategories[]>>(`${serviceConfig.CATEGORIES_MANAGE}/all`);
  return response.data;
};

export const GET_ONCE_CATEGORIES_SERVICE = async (payload: RequestManageHouseCategories['id']) => {
  const response = await axiosConfig.get<IresponseCommon<IManageHouseCategories>>(
    commonPayloadQuery(`${serviceConfig.CATEGORIES_MANAGE}/${payload}`),
  );
  return response.data;
};

export const POST_CATEGORIES_SERVICE = async (payload: RequestManageHouseCategories['name']) => {
  const response = await axiosConfig.post(commonPayloadQuery(serviceConfig.CATEGORIES_MANAGE), { name: payload });
  return response.data;
};

export const PUT_CATEGORIES_SERVICE = async (payload: RequestManageHouseCategories) => {
  const response = await axiosConfig.put(
    commonPayloadQuery(`${serviceConfig.CATEGORIES_MANAGE}/${payload.id}`),
    payload,
  );
  return response.data;
};

export const DELETE_CATEGORIES_SERVICE = async (payload: RequestManageHouseCategories['id']) => {
  const response = await axiosConfig.delete(`${serviceConfig.CATEGORIES_MANAGE}/${payload}`);
  return response.data;
};

// realtys
export const GET_REALTYS_SERVICE = async (query?: OptionQuery) => {
  const response = await axiosConfig.get<IresponseCommon<IresponsePaginateCommon<IManageRealtys[]>>>(
    commonPayloadQuery(serviceConfig.REALTY_MANAGE, query),
  );
  return response.data;
};

export const GET_REALTYS_ALL_SERVICE = async () => {
  const response = await axiosConfig.get<IresponseCommon<IManageRealtys[]>>(`${serviceConfig.REALTY_MANAGE}/all`);
  return response.data;
};

export const GET_ONCE_REALTYS_SERVICE = async (payload: RequestManageRealtys['id']) => {
  const response = await axiosConfig.get<IresponseCommon<IManageRealtys>>(
    commonPayloadQuery(`${serviceConfig.REALTY_MANAGE}/${payload}`),
  );
  return response.data;
};

export const POST_REALTYS_SERVICE = async (payload: RequestManageRealtys['name']) => {
  const response = await axiosConfig.post(commonPayloadQuery(serviceConfig.REALTY_MANAGE), { name: payload });
  return response.data;
};

export const PUT_REALTYS_SERVICE = async (payload: RequestManageRealtys) => {
  const response = await axiosConfig.put(commonPayloadQuery(`${serviceConfig.REALTY_MANAGE}/${payload.id}`), payload);
  return response.data;
};

export const DELETE_REALTYS_SERVICE = async (payload: RequestManageRealtys['id']) => {
  const response = await axiosConfig.delete(`${serviceConfig.REALTY_MANAGE}/${payload}`);
  return response.data;
};

// house
export const GET_HOUSE_MANAGE_SERIVCE = async (query?: OptionQuery) => {
  const response = await axiosConfig.get<IresponseCommon<IresponsePaginateCommon<IManageHouse[]>>>(
    commonPayloadQuery(serviceConfig.HOUSE_MANAGE, query),
  );
  return response.data;
};
export const GET_ONCE_HOUSE_MANAGE_SERIVCE = async (payload: RequestManageHouse['id']) => {
  const response = await axiosConfig.get<IresponseCommon<IManageHouse>>(`${serviceConfig.HOUSE_MANAGE}/${payload}`);
  return response.data;
};

export const POST_HOUSE_SERVICE = async (payload: RequestManageHouse) => {
  const response = await axiosConfig.post<IresponseCommon<ResponseManageHouse>>(serviceConfig.HOUSE_MANAGE, payload);
  return response.data;
};

export const PUT_HOUSE_SERVICE = async (payload: RequestManageHouse) => {
  const response = await axiosConfig.put<IresponseCommon<ResponseManageHouse>>(
    `${serviceConfig.HOUSE_MANAGE}/${payload.id}`,
    payload,
  );
  return response.data;
};
export const DELETE_HOUSE_SERVICE = async (payload: RequestManageHouse['id']) => {
  const response = await axiosConfig.delete(`${serviceConfig.HOUSE_MANAGE}/${payload}`);
  return response.data;
};

// upload
export const POST_UPLOAD_SERVICE = async (payload: RequestUploadPath) => {
  const response = await axiosConfig.postForm<IresponseCommon<ResponseUploadPath>>(serviceConfig.UPLOAD_PATH, payload);
  return response.data;
};
