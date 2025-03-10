import useManageRole from '@/hooks/useMutation/useManageRole';
import { addToast } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const useModifyRole = () => {
  const [role, setRole] = useState('');
  const [errorMessage, setErrMessage] = useState('');
  const router = useRouter();

  const { mutate } = useManageRole();

  const handleCancelModify = () => {
    router.back();
  };

  const handleSubmitForm = () => {
    if (!role) return setErrMessage('Request!');

    mutate(role, {
      onSuccess: () => {
        addToast({ color: 'success', title: 'Role added success' });
        router.back();
      },
    });
  };

  useEffect(() => {
    if (role) setErrMessage('');
  }, [role]);

  return { errorMessage, handleCancelModify, handleSubmitForm, setRole };
};

export default useModifyRole;
