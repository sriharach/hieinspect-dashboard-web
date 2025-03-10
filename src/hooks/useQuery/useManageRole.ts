import { GET_ROLE_SERVICE } from '@/services';
import { constatentKey } from '@/services/constatentKey';
import { useQuery } from '@tanstack/react-query';

const useManageRole = () => {
  return useQuery({
    queryKey: [constatentKey.ROLE_MANAGE_KEY],
    queryFn: GET_ROLE_SERVICE,
  });
};

export default useManageRole;
