import { GET_ONCE_REALTYS_SERVICE } from '@/services';
import { constatentKey } from '@/services/constatentKey';
import { useMutation } from '@tanstack/react-query';

const useManageOnceRealtys = () => {
  return useMutation({
    mutationKey: [constatentKey.PUT_REALTY_MANAGE_KEY],
    mutationFn: (id: string) => GET_ONCE_REALTYS_SERVICE(id),
  });
};

export default useManageOnceRealtys;
