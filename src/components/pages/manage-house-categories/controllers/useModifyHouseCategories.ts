import useModifyEdit from '@/hooks/useModifyEdit';
import useManageHouseCategories from '@/hooks/useMutation/useManageHouseCategories';
import useManageOnceHouseCategories from '@/hooks/useMutation/useManageOnceHouseCategories';
import useManageUpdateHouseCatagories from '@/hooks/useMutation/useManageUpdateHouseCatagories';
import { RequestManageHouseCategories } from '@/types/models/manageHouseCategories';
import { addToast } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';

const useModifyHouseCategories = () => {
  const router = useRouter();

  const { passOfEdit, userModify } = useModifyEdit({ serviceMutateFn: useManageOnceHouseCategories });
  console.log('userModify :>> ', userModify);
  const { mutate: mutatePost, isPending: isPendingPost } = useManageHouseCategories();
  const { mutate: mutateUpdate, isPending: isPendingUpdate } = useManageUpdateHouseCatagories();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestManageHouseCategories>({
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
            addToast({ color: 'success', title: 'Catagory edited success' });
            router.back();
          },
        },
      );
    } else {
      mutatePost(data.name, {
        onSuccess: () => {
          addToast({ color: 'success', title: 'Catagory added success' });
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

export default useModifyHouseCategories;
