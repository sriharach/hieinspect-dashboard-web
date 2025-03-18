// libs
import useModifyEdit from '@/hooks/useModifyEdit';
import useManageOnceRealtys from '@/hooks/useMutation/useManageOnceRealtys';
import useManageRealtys from '@/hooks/useMutation/useManageRealtys';
import useManageUpdateRealtys from '@/hooks/useMutation/useManageUpdateRealtys';
import useManageCategories from '@/hooks/useQuery/useManageCategories';
import useRealtys from '@/hooks/useQuery/useRealtys';
import { RequestManageHouse } from '@/types/models/manageHouse';
import { addToast } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useMemo, useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

const useModityRealty = () => {
  const router = useRouter();

  // state
  const inputUploadRef = useRef<HTMLInputElement | null>(null);

  const [imageSrcs, setImageSrcs] = useState<string[]>([]);
  console.log('imageSrcs :>> ', imageSrcs);

  // hooks
  const { mutate: mutatePost, isPending: isPendingPost } = useManageRealtys();
  const { mutate: mutateUpdate, isPending: isPendingUpdate } = useManageUpdateRealtys();
  const { userModify, passOfEdit } = useModifyEdit({ serviceMutateFn: useManageOnceRealtys });
  const { data: categoriesData } = useManageCategories();
  const { data: realitysData } = useRealtys();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestManageHouse>();

  const handleCancelModify = () => {
    router.back();
  };

  const handleSubmitForm = handleSubmit((data) => {
    // if (passOfEdit) {
    //   mutateUpdate(
    //     { id: userModify?.id, name: data.name },
    //     {
    //       onSuccess: () => {
    //         addToast({ color: 'success', title: 'Realty edited success' });
    //         router.back();
    //       },
    //     },
    //   );
    // } else {
    //   mutatePost(data.name, {
    //     onSuccess: () => {
    //       addToast({ color: 'success', title: 'Realty added success' });
    //       router.back();
    //     },
    //   });
    // }
  });

  const handleUploadFile = () => {
    inputUploadRef.current?.click();
  };

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const files = event.target.files;

      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageSrcs((prevImageSrcs) => [...prevImageSrcs, reader.result as string]);
        };
        reader.readAsDataURL(files[i]);
      }

      event.target.value = ''; // reset file
    }
  };

  const handleRemoveFile = (index: number) => {
    setImageSrcs((prevImageSrcs) => prevImageSrcs.filter((_, i) => i !== index));
  };

  const categories = useMemo(() => {
    if (categoriesData) {
      return categoriesData.data.map((val) => ({
        id: val.id,
        name: val.name,
      }));
    }
    return [];
  }, [categoriesData]);

  const realitys = useMemo(() => {
    if (realitysData) {
      return realitysData.data.map((reqlity) => ({
        id: reqlity.id,
        name: reqlity.name,
      }));
    }
    return [];
  }, [realitysData]);

  return {
    categories,
    realitys,
    isLoading: isPendingPost || isPendingUpdate,
    errors,
    control,
    inputUploadRef,
    imageSrcs,
    Controller,
    handleCancelModify,
    handleSubmitForm,
    onUploadFile: handleUploadFile,
    onChanageFile: handleChangeFile,
    onRemoveFile: handleRemoveFile
  };
};

export default useModityRealty;
