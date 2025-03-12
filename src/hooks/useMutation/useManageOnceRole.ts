import { GET_ONCE_ROLE_SERVICE } from '@/services';
import { constatentKey } from '@/services/constatentKey';
import { useMutation } from '@tanstack/react-query';

const useManageOnceRole = () => {
  return useMutation({
    mutationKey: [constatentKey.GET_ONCE_ROLE_MANAGE_KEY],
    mutationFn: (id: string) => GET_ONCE_ROLE_SERVICE(id),
  });
};

export default useManageOnceRole;
