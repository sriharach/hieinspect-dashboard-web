import { POST_USER_SERVICE } from '@/services';
import { constatentKey } from '@/services/constatentKey';
import { RequestManageUser } from '@/types/models/manageUser';
import { useMutation } from '@tanstack/react-query';

const useManageUser = () => {
  return useMutation({
    mutationKey: [constatentKey.POST_GET_USER_MANAGE_KEY],
    mutationFn: (payload: RequestManageUser) => POST_USER_SERVICE(payload),
  });
};

export default useManageUser;
