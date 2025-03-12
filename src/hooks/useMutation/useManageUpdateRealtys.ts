import { PUT_REALTYS_SERVICE } from '@/services';
import { constatentKey } from '@/services/constatentKey';
import { RequestManageRealtys } from '@/types/models/manageRealtys';
import { useMutation } from '@tanstack/react-query';

const useManageUpdateRealtys = () => {
  return useMutation({
    mutationKey: [constatentKey.PUT_REALTY_MANAGE_KEY],
    mutationFn: (payload: RequestManageRealtys) => PUT_REALTYS_SERVICE(payload),
  });
};

export default useManageUpdateRealtys;
