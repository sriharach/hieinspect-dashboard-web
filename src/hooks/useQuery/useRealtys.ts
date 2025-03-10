import { GET_REALTYS_SERVICE } from '@/services';
import { constatentKey } from '@/services/constatentKey';
import { OptionQuery } from '@/types/common/queryCommon';
import { useQuery } from '@tanstack/react-query';

const useRealtys = (query?: OptionQuery) => {
  return useQuery({
    queryKey: [constatentKey.GET_REALTY_MANAGE_KEY, query],
    queryFn: () => GET_REALTYS_SERVICE(query),
  });
};

export default useRealtys;
