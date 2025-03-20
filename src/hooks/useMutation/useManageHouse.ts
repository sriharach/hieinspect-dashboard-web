import { POST_HOUSE_SERVICE } from '@/services';
import { constatentKey } from '@/services/constatentKey';
import { RequestManageHouse } from '@/types/models/manageHouse';
import { useMutation } from '@tanstack/react-query';

const useManageHouse = () => {
  return useMutation({
    mutationKey: [constatentKey.POST_HOUSE_MANAGE_KEY],
    mutationFn: (payload: RequestManageHouse) => POST_HOUSE_SERVICE(payload),
  });
};

export default useManageHouse;
