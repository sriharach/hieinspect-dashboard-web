import { GET_ONCE_HOUSE_MANAGE_SERIVCE } from '@/services';
import { constatentKey } from '@/services/constatentKey';
import { useMutation } from '@tanstack/react-query';

const useManageOnceHouse = () => {
  return useMutation({
    mutationKey: [constatentKey.GET_ONCE_HOUSE_MANAGE_KEY],
    mutationFn: (id: string) => GET_ONCE_HOUSE_MANAGE_SERIVCE(id),
  });
};

export default useManageOnceHouse;
