import { PUT_CATEGORIES_SERVICE } from '@/services';
import { constatentKey } from '@/services/constatentKey';
import { RequestManageHouseCategories } from '@/types/models/manageHouseCategories';
import { useMutation } from '@tanstack/react-query';

const useManageUpdateHouseCatagories = () => {
  return useMutation({
    mutationKey: [constatentKey.PUT_CATEGORIES_MANAGE_KEY],
    mutationFn: (payload: RequestManageHouseCategories) => PUT_CATEGORIES_SERVICE(payload),
  });
};

export default useManageUpdateHouseCatagories;
