import { GET_CATEGORIES_SERVICE } from '@/services';
import { constatentKey } from '@/services/constatentKey';
import { OptionQuery } from '@/types/common/queryCommon';
import { useQuery } from '@tanstack/react-query';

const useManageUserService = (query?: OptionQuery) => {
  return useQuery({
    queryKey: [constatentKey.GET_CATEGORIES_MANAGE_KEY, query],
    queryFn: () => GET_CATEGORIES_SERVICE(query),
  });
};

export default useManageUserService;
