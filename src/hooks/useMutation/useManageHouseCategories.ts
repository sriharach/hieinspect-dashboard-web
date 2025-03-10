import { POST_CATEGORIES_SERVICE } from '@/services';
import { constatentKey } from '@/services/constatentKey';
import { RequestManageHouseCategories } from '@/types/models/manageHouseCategories';
import { useMutation } from '@tanstack/react-query';

const useManageHouseCategories = () => {
  return useMutation({
    mutationKey: [constatentKey.POST_CATEGORIES_MANAGE_KEY],
    mutationFn: (payload: RequestManageHouseCategories['name']) =>
      POST_CATEGORIES_SERVICE(payload),
  });
};

export default useManageHouseCategories;
