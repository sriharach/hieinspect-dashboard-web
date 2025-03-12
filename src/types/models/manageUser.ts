export interface IManageUserDataSoure {
  id: string;
  user_name: string;
  is_active: boolean;
  first_name: string;
  last_name: string | null;
  created_date: string;
  role: string;
}

export interface IreponseDataManageUser extends Omit<IManageUserDataSoure, 'role'> {
    role: {
        id: string,
        name: string
    }
}


export interface RequestManageUser {
  id?: string
  user_name?: string,
  password?: string
  first_name?: string
  role_id?: string
}