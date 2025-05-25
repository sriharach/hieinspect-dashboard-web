export interface IManageRealtys {
  id?: string;
  name?: string;
  is_active?: boolean;
  created_date?: string;
  created_by?: string;
  updated_date?: string;
  updated_by?: string;
}

export type RequestManageRealtys = Pick<IManageRealtys, 'id' | 'name' | 'is_active'>