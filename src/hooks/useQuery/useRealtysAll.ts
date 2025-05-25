import { GET_REALTYS_ALL_SERVICE } from '@/services';
import { constatentKey } from '@/services/constatentKey';
import { useQuery } from '@tanstack/react-query';

const useRealtysAll = () => {
  return useQuery({
    queryKey: [constatentKey.GET_REALTY_MANAGE_KEY],
    queryFn: () => GET_REALTYS_ALL_SERVICE(),
  });
};

export default useRealtysAll;
