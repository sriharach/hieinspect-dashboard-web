export interface IManageHouseCategories {
  id?: string;
  name?: string;
  is_active?: boolean;
  created_date?: string;
  created_by?: string;
  updated_date?: string;
  updated_by?: string;
}

export type RequestManageHouseCategories = Pick<IManageHouseCategories, 'name' | 'id'|'is_active'>
