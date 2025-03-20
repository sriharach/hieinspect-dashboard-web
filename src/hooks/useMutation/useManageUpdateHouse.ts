import { PUT_HOUSE_SERVICE } from '@/services';
import { constatentKey } from '@/services/constatentKey';
import { RequestManageHouse } from '@/types/models/manageHouse';
import { useMutation } from '@tanstack/react-query';

const useManageUpdateHouse = () => {
  return useMutation({
    mutationKey: [constatentKey.PUT_HOUSE_MANAGE_KEY],
    mutationFn: (payload: RequestManageHouse) => PUT_HOUSE_SERVICE(payload),
  });
};

export default useManageUpdateHouse;
