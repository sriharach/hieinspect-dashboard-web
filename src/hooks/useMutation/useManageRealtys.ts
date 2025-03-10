import { POST_REALTYS_SERVICE } from '@/services';
import { constatentKey } from '@/services/constatentKey';
import { RequestManageRealtys } from '@/types/models/manageRealtys';
import { useMutation } from '@tanstack/react-query';

const useManageRealtys = () => {
  return useMutation({
    mutationKey: [constatentKey.POST_REALTY_MANAGE_KEY],
    mutationFn: (payload: RequestManageRealtys['name']) => POST_REALTYS_SERVICE(payload),
  });
};

export default useManageRealtys;
