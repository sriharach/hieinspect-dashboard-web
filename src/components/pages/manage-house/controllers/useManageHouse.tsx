// libs
import { addToast } from '@heroui/react';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

// components
import ButtonRemoveRow from '@/components/modules/ButtonRemoveRow.tsx/ButtonRemoveRow';
import { ColumnsType } from '@/components/nextui/Tables/type';
import ButtonEditRow from '@/components/modules/ButtonRemoveRow.tsx/ButtonEditRow';

// hook
import useManageHouseService from '@/hooks/useQuery/useManageHouse';

import { IManageRealtys } from '@/types/models/manageRealtys';
import { IManageHouse } from '@/types/models/manageHouse';

const useManageHouse = () => {
  const router = useRouter();

  // hooks
  const { data, isLoading, isFetching, refetch } = useManageHouseService({
    limit: 10,
  });

  const columns: ColumnsType<IManageHouse> = [
    {
      key: 'realty',
      title: 'Realty',
    },
    {
      key: 'name',
      title: 'Name',
    },
    {
      key: 'created_date',
      title: 'Created Date',
      render: (data) => {
        return dayjs(data.created_date).format('DD/MM/YYYY H:mm');
      },
    },
    {
      title: 'Action',
      render: (data) => {
        return (
          <div className="flex Fitems-center gap-4">
            <ButtonEditRow row_id={data.id!} path="manage-realty" />
            <ButtonRemoveRow onPress={() => {}} />
          </div>
        );
      },
    },
  ];

  const dataSource = useMemo<IManageHouse[]>(() => {
    if (data) {
      return data.data.data.map((item) => {
        return {
          id: item.id,
          name: item.name,
        };
      });
    }
    return [];
  }, [data]);

  const handleAddHouse = () => {
    router.push('/manage-house/modify');
  };
  return {
    columns,
    dataSource,
    isLoading: isLoading || isFetching,
    paginationPage: 1,
    paginationTotal: data?.data.meta.totalPages,
    onManageAddHouse: handleAddHouse,
    onChangePage: () => {},
    onPressSearchButton: () => {},
  };
};

export default useManageHouse;
