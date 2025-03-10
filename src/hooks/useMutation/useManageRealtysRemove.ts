import { DELETE_REALTYS_SERVICE } from '@/services';
import { constatentKey } from '@/services/constatentKey';
import { RequestManageRealtys } from '@/types/models/manageRealtys';
import { useMutation } from '@tanstack/react-query';

const useManageRealtysRemove = () => {
  return useMutation({
    mutationKey: [constatentKey.DELETE_REALTY_MANAGE_KEY],
    mutationFn: (payload: RequestManageRealtys['id']) => DELETE_REALTYS_SERVICE(payload),
  });
};

export default useManageRealtysRemove;
