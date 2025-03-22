// libs
import useModifyEdit from '@/hooks/useModifyEdit';
import useManageHouse from '@/hooks/useMutation/useManageHouse';
import useManageOnceHouse from '@/hooks/useMutation/useManageOnceHouse';
import useManageUpdateHouse from '@/hooks/useMutation/useManageUpdateHouse';
import useUpload from '@/hooks/useMutation/useUpload';
import useManageCategoriesAll from '@/hooks/useQuery/useManageCategoriesAll';
import useRealtys from '@/hooks/useQuery/useRealtys';
import { RequestManageHouse } from '@/types/models/manageHouse';
import { addToast } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

const useModityRealty = () => {
  const router = useRouter();

  // state
  const inputUploadRef = useRef<HTMLInputElement | null>(null);

  const [imageSrcs, setImageSrcs] = useState<
    {
      base64?: string;
      file: File;
      fileName?: string;
    }[]
  >([]);
  const [excludeFilename, setExcludeFilename] = useState<string[]>([]);

  // hooks
  const { mutateAsync: mutatePost, isPending: isPendingPost } = useManageHouse();
  const { mutateAsync: mutateHousePut, isPending: isPendingHousePut } = useManageUpdateHouse();
  const { mutateAsync: mutatePostUpload, isPending: isPendingPostUpload } = useUpload();
  const { userModify, passOfEdit } = useModifyEdit({ serviceMutateFn: useManageOnceHouse });
  const { data: categoriesData } = useManageCategoriesAll();
  const { data: realitysData } = useRealtys();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestManageHouse>({
    values: {
      name: userModify?.name,
      category_house_id: userModify?.category_house_id,
      realitys_id: userModify?.realitys_id,
    },
  });

  const handleCancelModify = () => {
    router.back();
  };

  const handleSubmitForm = handleSubmit(async (data) => {
    if (passOfEdit) {
      let uploaded = undefined;

      // หาไฟล์ภาพทำการอัพโหลดอีกรอบ
      if (imageSrcs.length > 0) {
        // call save image
        uploaded = await Promise.all(
          imageSrcs
            .filter((x) => x.file)
            .map(async (ifm) => (await mutatePostUpload({ code_house: userModify!.code_house!, file: ifm.file })).data),
        );
      }

      const model: any = {
        ...data,
        id: userModify?.id,
        exclude_filename: excludeFilename,
        code_house: userModify?.code_house,
        house_images_upload: uploaded || [],
      };

      // update file path in to api
      await mutateHousePut(model, {
        onSuccess: () => {
          addToast({ title: 'Uploaded success', color: 'success' });
          router.push('/manage-house');
        },
      });
    } else {
      const response = await mutatePost({ ...data, house_images_upload: [] });
      if (response.data.code_house) {
        if (imageSrcs.length > 0) {
          // call save image
          const uploaded = await Promise.all(
            imageSrcs.map(
              async (ifm) => (await mutatePostUpload({ code_house: response.data.code_house, file: ifm.file })).data,
            ),
          );

          // update file path in to api
          await mutateHousePut(
            { id: response.data.id, house_images_upload: uploaded },
            {
              onSuccess: () => {
                addToast({ title: 'Add house success', color: 'success' });
              },
            },
          );
        }
      }
      router.push('/manage-house');
    }
  });

  const handleUploadFile = () => {
    inputUploadRef.current?.click();
  };

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const files = event.target.files;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageSrcs((prevImageSrcs) => [...prevImageSrcs, { file, base64: reader.result as string }]);
        };
        reader.readAsDataURL(file);
      }

      event.target.value = ''; // reset file
    }
  };

  const handleRemoveFile = (index: number, fileName?: string) => {
    setImageSrcs((prevImageSrcs) => prevImageSrcs.filter((_, i) => i !== index));
    if (fileName) {
      setExcludeFilename((prev) => [...prev, fileName]);
    }
    
  };

  const categories = useMemo(() => {
    return categoriesData ? categoriesData.data : [];
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

  useEffect(() => {
    if (userModify) {
      const previewImage = userModify.house_images?.find((x) => x.image);
      if (previewImage) {
        setImageSrcs(
          userModify.house_images?.map((val) => {
            return {
              base64: val.image,
              fileName: val.file_name,
              file: undefined,
            };
          }) as any,
        );
      }
    }
  }, [userModify]);

  return {
    categories,
    realitys,
    isLoading: isPendingPost || isPendingHousePut || isPendingPostUpload,
    errors,
    control,
    inputUploadRef,
    imageSrcs,
    Controller,
    handleCancelModify,
    handleSubmitForm,
    onUploadFile: handleUploadFile,
    onChanageFile: handleChangeFile,
    onRemoveFile: handleRemoveFile,
  };
};

export default useModityRealty;
