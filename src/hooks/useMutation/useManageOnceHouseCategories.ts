import { GET_ONCE_CATEGORIES_SERVICE } from '@/services';
import { constatentKey } from '@/services/constatentKey';
import { useMutation } from '@tanstack/react-query';

const useManageOnceHouseCategories = () => {
  return useMutation({
    mutationKey: [constatentKey.GET_ONCECATEGORIES_MANAGE_KEY],
    mutationFn: (id: string) => GET_ONCE_CATEGORIES_SERVICE(id),
  });
};

export default useManageOnceHouseCategories;
