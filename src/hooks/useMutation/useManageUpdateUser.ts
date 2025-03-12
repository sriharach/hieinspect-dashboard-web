import { PUT_USER_SERVICE } from '@/services';
import { constatentKey } from '@/services/constatentKey';
import { RequestManageUser } from '@/types/models/manageUser';
import { useMutation } from '@tanstack/react-query';

const useManageUpdateUser = () => {
  return useMutation({
    mutationKey: [constatentKey.PUT_USER_MANAGE_KEY],
    mutationFn: (payload: RequestManageUser) => PUT_USER_SERVICE(payload),
  });
};

export default useManageUpdateUser;
