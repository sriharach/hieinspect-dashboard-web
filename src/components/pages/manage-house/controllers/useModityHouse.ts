// libs
import useModifyEdit from '@/hooks/useModifyEdit';
import useManageHouse from '@/hooks/useMutation/useManageHouse';
import useManageOnceHouse from '@/hooks/useMutation/useManageOnceHouse';
import useManageUpdateHouse from '@/hooks/useMutation/useManageUpdateHouse';
import useUpload from '@/hooks/useMutation/useUpload';
import useManageCategoriesAll from '@/hooks/useQuery/useManageCategoriesAll';
import useRealtysAll from '@/hooks/useQuery/useRealtysAll';
import { RequestManageHouse } from '@/types/models/manageHouse';
import { ResponseUploadPath } from '@/types/models/upload';
import { addToast } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

const useModityRealty = () => {
  const router = useRouter();

  // state
  const inputUploadRef = useRef<HTMLInputElement | null>(null);
  const boxUploadRef = useRef<HTMLInputElement | null>(null);
  const [imageSrcs, setImageSrcs] = useState<
    {
      base64?: string;
      file: File;
      fileName?: string;
    }[]
  >([]);
  const [imageSrcCoverImg, setImageSrcCoverImg] = useState<{
    base64?: string;
    file: File;
    fileName?: string;
  } | null>(null);
  const [excludeFilename, setExcludeFilename] = useState<string[]>([]);
  const [errorCoverimage, setErrorCoverimage] = useState('');

  // hooks
  const { mutateAsync: mutatePost, isPending: isPendingPost } = useManageHouse();
  const { mutateAsync: mutateHousePut, isPending: isPendingHousePut } = useManageUpdateHouse();
  const { mutateAsync: mutatePostUpload, isPending: isPendingPostUpload } = useUpload();
  const { userModify, passOfEdit } = useModifyEdit({ serviceMutateFn: useManageOnceHouse });
  const { data: categoriesData } = useManageCategoriesAll();
  const { data: realitysData } = useRealtysAll();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestManageHouse>({
    values: {
      name: userModify?.name,
      category_house_id: userModify?.category_house?.id,
      realitys_id: userModify?.realty?.id,
    },
  });

  const handleCancelModify = () => {
    router.back();
  };

  const handleSubmitForm = handleSubmit(async (data) => {
    if (!imageSrcCoverImg) return setErrorCoverimage('กรุณาอัปโหลดภาพปก');

    if (passOfEdit) {
      let uploaded = undefined;
      let mainImgHouse = undefined;

      // หาไฟล์ภาพทำการอัพโหลดอีกรอบ
      if (imageSrcs.length > 0) {
        // call save image
        uploaded = await Promise.all(
          imageSrcs
            .filter((x) => x.file)
            .map(
              async (ifm) =>
                (await mutatePostUpload({ code_house: userModify!.code_house!, file: ifm.file }))
                  .data,
            ),
        );
      }

      // check cover image
      if (imageSrcCoverImg.file) {
        mainImgHouse = (
          await mutatePostUpload({
            code_house: userModify!.code_house!,
            file: imageSrcCoverImg.file,
          })
        ).data.file_name;
      }

      const model = {
        ...data,
        id: userModify?.id,
        exclude_filename: excludeFilename,
        code_house: userModify?.code_house,
        house_images_upload: uploaded || [],
        main_img_house: mainImgHouse,
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
      if (response.data.code_house && (imageSrcCoverImg || imageSrcs.length > 0)) {
        let uploaded: ResponseUploadPath[] = [];
        let mainImgHouse = undefined;

        if (imageSrcs.length > 0) {
          // call save image
          uploaded = await Promise.all(
            imageSrcs.map(
              async (ifm) =>
                (await mutatePostUpload({ code_house: response.data.code_house, file: ifm.file }))
                  .data,
            ),
          );
        }
        if (imageSrcCoverImg) {
          mainImgHouse = (
            await mutatePostUpload({
              code_house: response.data.code_house,
              file: imageSrcCoverImg.file,
            })
          ).data.file_name;
        }

        // update file path in to api
        await mutateHousePut(
          { id: response.data.id, house_images_upload: uploaded, main_img_house: mainImgHouse },
          {
            onSuccess: () => {
              addToast({ title: 'Add house success', color: 'success' });
            },
          },
        );
      }
      router.push('/manage-house');
    }
  });

  const handleUploadFile = () => {
    inputUploadRef.current?.click();
  };
  const handleBoxUploadFile = () => {
    boxUploadRef.current?.click();
  };

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const files = event.target.files;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageSrcs((prevImageSrcs) => [
            ...prevImageSrcs,
            { file, base64: reader.result as string },
          ]);
        };
        reader.readAsDataURL(file);
      }

      event.target.value = ''; // reset file
    }
  };

  const handleChanageBoxFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setErrorCoverimage('');
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrcCoverImg((prevImageSrcCoverImg) => ({
          ...prevImageSrcCoverImg,
          file,
          base64: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);

      event.target.value = ''; // reset file
    }
  };

  const handleRemoveFile = (index: number, fileName?: string) => {
    setImageSrcs((prevImageSrcs) => prevImageSrcs.filter((_, i) => i !== index));
    if (fileName) {
      setExcludeFilename((prev) => [...prev, fileName]);
    }
  };

  const handleRemoveCoverfile = (fileName?: string) => {
    setImageSrcCoverImg(null);
    setErrorCoverimage('');
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
          }) as never,
        );
      }
      if (userModify.cover_image_house) {
        setImageSrcCoverImg({
          base64: userModify.cover_image_house,
          fileName: userModify.main_img_house,
          file: undefined,
        } as never);
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
    boxUploadRef,
    imageSrcs,
    imageSrcCoverImg,
    errorCoverimage,
    Controller,
    handleCancelModify,
    handleSubmitForm,
    onUploadFile: handleUploadFile,
    onBoxUploadFile: handleBoxUploadFile,
    onChanageFile: handleChangeFile,
    onChanageBoxFile: handleChanageBoxFile,
    onRemoveFile: handleRemoveFile,
    onRemoveCoverfile: handleRemoveCoverfile,
  };
};

export default useModityRealty;
