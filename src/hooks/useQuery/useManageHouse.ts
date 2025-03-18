import { GET_HOUSE_MANAGE_SERIVCE } from '@/services';
import { constatentKey } from '@/services/constatentKey';
import { OptionQuery } from '@/types/common/queryCommon';
import { useQuery } from '@tanstack/react-query';

const useManageHouseService = (query?: OptionQuery) => {
  return useQuery({
    queryKey: [constatentKey.GET_HOUSE_MANAGE_KEY],
    queryFn: () => GET_HOUSE_MANAGE_SERIVCE(query),
  });
};

export default useManageHouseService;
