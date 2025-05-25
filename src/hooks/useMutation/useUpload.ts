import { POST_UPLOAD_SERVICE } from '@/services';
import { constatentKey } from '@/services/constatentKey';
import { RequestUploadPath } from '@/types/models/upload';
import { useMutation } from '@tanstack/react-query';

const useUpload = () => {
  return useMutation({
    mutationKey: [constatentKey.POST_UPLOAD_KEY],
    mutationFn: (payload: RequestUploadPath) => POST_UPLOAD_SERVICE(payload),
  });
};

export default useUpload;
