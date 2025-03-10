import { DELETE_USER_SERVICE } from '@/services';
import { constatentKey } from '@/services/constatentKey';
import { RequestManageUser } from '@/types/models/manageUser';
import { useMutation } from '@tanstack/react-query';

const useManageUserRemove = () => {
  return useMutation({
    mutationKey: [constatentKey.DELETE_GET_USER_MANAGE_KEY],
    mutationFn: (payload: RequestManageUser['id']) => DELETE_USER_SERVICE(payload),
  });
};

export default useManageUserRemove;
