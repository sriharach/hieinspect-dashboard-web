import { IresponseCommon } from '@/types/common/responseCommon';
import { UseMutationResult } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

interface useModifyEditProps<Mdata extends object> {
  serviceMutateFn: () => UseMutationResult<IresponseCommon<Mdata>, Error, string, unknown>;
}

const useModifyEdit = <Mdata extends object>({ serviceMutateFn }: useModifyEditProps<Mdata>) => {
  // url

  const searchParams = useSearchParams();
  const getUrlid = decodeURIComponent(searchParams.toString());

  const newSearchParam = new URLSearchParams(getUrlid);
  const userId = newSearchParam.get('id')?.replace(/=+$/, '');

  // hook
  const { mutate, data } = serviceMutateFn();

  useEffect(() => {
    if (userId) {
      mutate(userId);
    }
  }, [userId]);

  return { userModify: data?.data, passOfEdit: !!userId };
};

export default useModifyEdit;
