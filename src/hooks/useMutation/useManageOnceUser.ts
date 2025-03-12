import { GET_ONCE_USER_SERVICE } from '@/services';
import { constatentKey } from '@/services/constatentKey';
import { useMutation } from '@tanstack/react-query';

const useMangeOnceUser = () => {
  return useMutation({
    mutationKey: [constatentKey.GET_ONCE_USER_MANAGE_KEY],
    mutationFn: (id: string) => GET_ONCE_USER_SERVICE(id),
  });
};

export default useMangeOnceUser;
