import { POST_AUTH_SIGNIN } from '@/services';
import { constatentKey } from '@/services/constatentKey';
import { RequestSignIn } from '@/types/models/signIn';
import { useMutation } from '@tanstack/react-query';

const useAuthSignIn = () => {
  return useMutation({
    mutationKey: [constatentKey.AUTH_SIGNIN],
    mutationFn: (payload: RequestSignIn) =>  POST_AUTH_SIGNIN(payload)
  });
};

export default useAuthSignIn;
