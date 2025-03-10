import { IpahinateResponseCommon } from './paginateCommon';

export interface IresponseCommon<T = void> {
  data: T;
  status_code: number;
}

export interface IresponsePaginateCommon<T = void> {
  data: T;
  meta: IpahinateResponseCommon;
}
