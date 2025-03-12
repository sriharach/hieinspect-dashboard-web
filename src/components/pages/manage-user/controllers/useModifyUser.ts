import useModifyEdit from '@/hooks/useModifyEdit';
import useMangeOnceUser from '@/hooks/useMutation/useManageOnceUser';
import useManageUpdateUser from '@/hooks/useMutation/useManageUpdateUser';
import useManageUser from '@/hooks/useMutation/useManageUser';
import useManageRole from '@/hooks/useQuery/useManageRole';
import { RequestManageUser } from '@/types/models/manageUser';
import { addToast } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { useForm, Controller } from 'react-hook-form';

const useModifyUser = () => {
  const router = useRouter();

  // hook
  const { data } = useManageRole();
  const { mutate: mutatePost, isPending: isLoadingPost } = useManageUser();
  const { mutate: mutateUpdate, isPending: isPendingUpdate } = useManageUpdateUser();
  const { userModify, passOfEdit } = useModifyEdit({ serviceMutateFn: useMangeOnceUser });

  const { handleSubmit, formState, control } = useForm<RequestManageUser>({
    values: { user_name: userModify?.user_name, role_id: userModify?.role.id, first_name: userModify?.first_name },
  });

  const handleCancelModify = () => {
    router.back();
  };

  const handleSubmitForm = handleSubmit((data) => {
    if (passOfEdit) {
      mutateUpdate(
        {
          id: userModify?.id,
          user_name: data.user_name,
          first_name: data.first_name,
        },
        {
          onSuccess: () => {
            addToast({ color: 'success', title: 'User edited success' });
            router.back();
          },
        },
      );
    } else {
      mutatePost(
        {
          user_name: data.user_name,
          password: data.user_name,
          first_name: data.first_name,
        },
        {
          onSuccess: () => {
            addToast({ color: 'success', title: 'User added success' });
            router.back();
          },
        },
      );
    }
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
    isLoading: isLoadingPost || isPendingUpdate,
    handleCancelModify,
    handleSubmitForm,
    roles,
    errors: formState.errors,
    Controller,
    control,
  };
};

export default useModifyUser;
