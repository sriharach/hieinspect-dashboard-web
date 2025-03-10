import { POST_ROLE_SERVICE } from '@/services';
import { constatentKey } from '@/services/constatentKey';
import { IManageRoles } from '@/types/models/manageRoles';
import { useMutation } from '@tanstack/react-query';

const useManageRole = () => {
  return useMutation({
    mutationKey: [constatentKey.POST_ROLE_MANAGE_KEY],
    mutationFn: (payload: IManageRoles['name']) => POST_ROLE_SERVICE(payload),
  });
};

export default useManageRole;
