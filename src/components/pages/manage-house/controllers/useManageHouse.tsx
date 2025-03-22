// libs
import { addToast } from '@heroui/react';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

// components
import ButtonRemoveRow from '@/components/modules/ButtonRemoveRow.tsx/ButtonRemoveRow';
import { ColumnsType } from '@/components/nextui/Tables/type';
import ButtonEditRow from '@/components/modules/ButtonRemoveRow.tsx/ButtonEditRow';

// hook
import useManageHouseService from '@/hooks/useQuery/useManageHouse';
import useManageHouseRemove from '@/hooks/useMutation/useManageHouseRemove';

import { IManageHouse } from '@/types/models/manageHouse';

const useManageHouse = () => {
  const router = useRouter();

  // state
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [search, setSearch] = useState('');

  // hooks
  const { data, isLoading, isFetching, refetch } = useManageHouseService({
    limit,
    page,
    search,
  });
  const { mutate } = useManageHouseRemove();

  const columns: ColumnsType<IManageHouse> = [
    {
      key: 'realty',
      title: 'Realty',
      render: (data) => data.realty?.name,
    },
    {
      key: 'category_house',
      title: 'Category house',
      render: (data) => data.category_house?.name,
    },
    {
      key: 'name',
      title: 'House name',
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
            <ButtonEditRow row_id={data.id!} path="manage-house" />
            <ButtonRemoveRow
              onPress={() => {
                mutate(data.id, {
                  onSuccess: () => {
                    addToast({
                      color: 'success',
                      title: 'House Deleted',
                    });
                    refetch();
                  },
                });
              }}
            />
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
          created_date: item.created_date,
          realty: {
            name: item.realty ? item.realty.name : '-',
          },
          category_house: {
            name: item.category_house ? item.category_house.name : '-',
          },
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
    paginationPage: page,
    paginationTotal: data?.data.meta.totalPages,
    onManageAddHouse: handleAddHouse,
    onChangePage: (page: number) => setPage(page),
    onPressSearchButton: (search: string) => setSearch(search),
  };
};

export default useManageHouse;
