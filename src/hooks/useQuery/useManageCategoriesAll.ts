import { GET_CATEGORIES_ALL_SERVICE } from '@/services';
import { constatentKey } from '@/services/constatentKey';
import { useQuery } from '@tanstack/react-query';

const useManageCategoriesAll = () => {
  return useQuery({
    queryKey: [constatentKey.GET_CATEGORIES_ALL_MANAGE_KEY],
    queryFn: () => GET_CATEGORIES_ALL_SERVICE(),
  });
};

export default useManageCategoriesAll;
