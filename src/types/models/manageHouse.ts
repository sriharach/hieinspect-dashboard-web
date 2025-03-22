import { ResponseUploadPath } from './upload';

export interface IManageHouse {
  id?: string;
  category_house_id?: string;
  service_category_house_id?: string;
  realitys_id?: string;
  name?: string;
  is_active?: boolean;
  created_date?: string;
  created_by?: string;
  created_name?: string;
  updated_date?: string;
  updated_by?: string;
  code_house?: string;
  house_images?: IHouseImages[];
  realty?: {
    name: string;
  };
  category_house?: {
    name: string
  };
}

export type IHouseImages = {
  file_name: string;
  id: string;
  model_house_id: string;
  image: string;
  path_name: string;
};

export interface RequestManageHouse
  extends Pick<IManageHouse, 'name' | 'category_house_id' | 'id' | 'realitys_id' | 'is_active'> {
  house_images_upload?: ResponseUploadPath[];
  exclude_filename?: string[];
}

export interface ResponseManageHouse {
  id: string;
  code_house: string;
}
