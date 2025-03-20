import { DELETE_HOUSE_SERVICE } from '@/services';
import { constatentKey } from '@/services/constatentKey';
import { RequestManageHouse } from '@/types/models/manageHouse';
import { useMutation } from '@tanstack/react-query';

const useManageHouseRemove = () => {
  return useMutation({
    mutationKey: [constatentKey.DELETE_HOUSE_MANAGE_KEY],
    mutationFn: (payload: RequestManageHouse['id']) => DELETE_HOUSE_SERVICE(payload),
  });
};

export default useManageHouseRemove;
