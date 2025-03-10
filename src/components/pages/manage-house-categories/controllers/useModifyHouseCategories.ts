import useManageHouseCategories from '@/hooks/useMutation/useManageHouseCategories';
import { addToast } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const useModifyHouseCategories = () => {
  const [catagory, setCategory] = useState('');
  const [errorMessage, setErrMessage] = useState('');
  const router = useRouter();

  const { mutate, isPending } = useManageHouseCategories();

  const handleCancelModify = () => {
    router.back();
  };

  const handleSubmitForm = () => {
    if (!catagory) return setErrMessage('Request!');

    mutate(catagory, {
      onSuccess: () => {
        addToast({ color: 'success', title: 'Role added success' });
        router.back();
      },
    });
  };

  useEffect(() => {
    if (catagory) setErrMessage('');
  }, [catagory]);

  return {
    isLoading: isPending,
    errorMessage,
    handleCancelModify,
    handleSubmitForm,
    setCategory,
  };
};

export default useModifyHouseCategories;
