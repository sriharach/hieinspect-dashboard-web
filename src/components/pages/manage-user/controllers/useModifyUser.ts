import useManageUser from '@/hooks/useMutation/useManageUser';
import useManageRole from '@/hooks/useQuery/useManageRole';
import { RequestManageUser } from '@/types/models/manageUser';
import { addToast } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { useForm, Controller } from 'react-hook-form';

const useModifyUser = () => {
  // hook
  const router = useRouter();
  const { data } = useManageRole();
  const { mutate, isPending } = useManageUser();

  const { handleSubmit, register, formState, control } =
    useForm<RequestManageUser>();

  const handleCancelModify = () => {
    router.back();
  };

  const handleSubmitForm = handleSubmit((data) => {
    mutate(data, {
      onSuccess: () => {
        addToast({ color: 'success', title: 'User added success' });
        router.back();
      },
    });
  });

  const roles = useMemo(() => {
    if (data) {
      return data.data.map((role) => ({
        id: role.id,
        name: role.name,
      }));
    }
    return [];
  }, [data]);

  return {
    isLoading: isPending,
    handleCancelModify,
    handleSubmitForm,
    roles,
    register,
    errors: formState.errors,
    Controller,
    control,
  };
};

export default useModifyUser;
