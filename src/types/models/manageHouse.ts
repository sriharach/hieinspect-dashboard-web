export interface IManageHouse {
  id?: string;
  category_house_id?: string;
  service_category_house_id?: string ;
  realitys_id?: string;
  name?: string;
  is_active?: boolean;
  created_date?: string;
  created_by?: string;
  updated_date?: string;
  updated_by?: string;
  code_house?: string;
  house_images?: IHouseImages[];
  realty?: null;
}

export type IHouseImages = object;

export type RequestManageHouse = Pick<
  IManageHouse,
  'name' | 'category_house_id' | 'id' | 'realitys_id' | 'is_active' 
>;
