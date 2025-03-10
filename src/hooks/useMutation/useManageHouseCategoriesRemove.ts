import { DELETE_CATEGORIES_SERVICE } from '@/services';
import { constatentKey } from '@/services/constatentKey';
import { RequestManageHouseCategories } from '@/types/models/manageHouseCategories';
import { useMutation } from '@tanstack/react-query';

const useManageRoleRemove = () => {
  return useMutation({
    mutationKey: [constatentKey.DELETE_CATEGORIES_MANAGE_KEY],
    mutationFn: (payload: RequestManageHouseCategories['id']) => DELETE_CATEGORIES_SERVICE(payload),
  });
};

export default useManageRoleRemove;
