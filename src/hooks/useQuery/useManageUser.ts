import { GET_USER_SERVICE } from '@/services';
import { constatentKey } from '@/services/constatentKey';
import { OptionQuery } from '@/types/common/queryCommon';
import { useQuery } from '@tanstack/react-query';

const useManageUserService = (query: OptionQuery) => {
  return useQuery({
    queryKey: [constatentKey.GET_USER_MANAGE_KEY, query],
    queryFn: () => GET_USER_SERVICE(query),
  });
};

export default useManageUserService;
