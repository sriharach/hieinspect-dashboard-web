import useModifyEdit from '@/hooks/useModifyEdit';
import useManageOnceRole from '@/hooks/useMutation/useManageOnceRole';
import useManageRole from '@/hooks/useMutation/useManageRole';
import { IManageRoles } from '@/types/models/manageRoles';
import { addToast } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';

const useModifyRole = () => {
  const router = useRouter();

  // hooks
  const { mutate } = useManageRole();
  const { userModify, passOfEdit } = useModifyEdit({ serviceMutateFn: useManageOnceRole });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IManageRoles>({
    values: {
      name: userModify?.name,
    },
  });

  const handleCancelModify = () => {
    router.back();
  };

  const handleSubmitForm = handleSubmit((data) => {
    mutate(
      {
        ...data,
        id: passOfEdit ? userModify?.id : undefined,
      },
      {
        onSuccess: () => {
          addToast({ color: 'success', title: 'Role added success' });
          router.back();
        },
      },
    );
  });

  return { errors, handleCancelModify, handleSubmitForm, Controller, control };
};

export default useModifyRole;
