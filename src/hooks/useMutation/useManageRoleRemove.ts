import { DELETE_ROLE_SERVICE } from '@/services';
import { constatentKey } from '@/services/constatentKey';
import { IManageRoles } from '@/types/models/manageRoles';
import { useMutation } from '@tanstack/react-query';

const useManageRoleRemove = () => {
  return useMutation({
    mutationKey: [constatentKey.DELETE_ROLE_MANAGE_KEY],
    mutationFn: (payload: IManageRoles['id']) => DELETE_ROLE_SERVICE(payload),
  });
};

export default useManageRoleRemove;
