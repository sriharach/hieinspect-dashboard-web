// libs
import useModifyEdit from '@/hooks/useModifyEdit';
import useManageOnceRealtys from '@/hooks/useMutation/useManageOnceRealtys';
import useManageRealtys from '@/hooks/useMutation/useManageRealtys';
import useManageUpdateRealtys from '@/hooks/useMutation/useManageUpdateRealtys';
import { RequestManageRealtys } from '@/types/models/manageRealtys';
import { addToast } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';

const useModityRealty = () => {
  const router = useRouter();

  // hooks
  const { mutate: mutatePost, isPending: isPendingPost } = useManageRealtys();
  const { mutate: mutateUpdate, isPending: isPendingUpdate } = useManageUpdateRealtys();
  const { userModify, passOfEdit } = useModifyEdit({ serviceMutateFn: useManageOnceRealtys });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestManageRealtys>({
    values: {
      name: userModify?.name,
    },
  });

  const handleCancelModify = () => {
    router.back();
  };

  const handleSubmitForm = handleSubmit((data) => {
    if (passOfEdit) {
      mutateUpdate(
        { id: userModify?.id, name: data.name },
        {
          onSuccess: () => {
            addToast({ color: 'success', title: 'Realty edited success' });
            router.back();
          },
        },
      );
    } else {
      mutatePost(data.name, {
        onSuccess: () => {
          addToast({ color: 'success', title: 'Realty added success' });
          router.back();
        },
      });
    }
  });

  return {
    isLoading: isPendingPost || isPendingUpdate,
    errors,
    control,
    Controller,
    handleCancelModify,
    handleSubmitForm,
  };
};

export default useModityRealty;
