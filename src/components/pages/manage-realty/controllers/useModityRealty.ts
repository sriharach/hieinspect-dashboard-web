// libs
import useManageRealtys from '@/hooks/useMutation/useManageRealtys';
import { addToast } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const useModityRealty = () => {
  const [realty, setRealty] = useState('');
  const [errorMessage, setErrMessage] = useState('');
  const router = useRouter();

  const { mutate, isPending } = useManageRealtys();

  const handleCancelModify = () => {
    router.back();
  };

  const handleSubmitForm = () => {
    if (!realty) return setErrMessage('Request!');

    mutate(realty, {
      onSuccess: () => {
        addToast({ color: 'success', title: 'Realty added success' });
        router.back();
      },
    });
  };

  useEffect(() => {
    if (realty) setErrMessage('');
  }, [realty]);

  return {
    isLoading: isPending,
    errorMessage,
    handleCancelModify,
    handleSubmitForm,
    setRealty,
  };
};

export default useModityRealty;
