// libs
import { addToast } from '@heroui/react';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

// components
import ButtonRemoveRow from '@/components/modules/ButtonRemoveRow.tsx/ButtonRemoveRow';
import { ColumnsType } from '@/components/nextui/Tables/type';

// hook
import useManageRealtysRemove from '@/hooks/useMutation/useManageRealtysRemove';
import useRealtys from '@/hooks/useQuery/useRealtys';

import { IManageRealtys } from '@/types/models/manageRealtys';
import ButtonEditRow from '@/components/modules/ButtonRemoveRow.tsx/ButtonEditRow';

const useManageRealtys = () => {
  const router = useRouter();

  // state
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [search, setSearch] = useState('');

  // hooks
  const { data, isLoading, isFetching, refetch } = useRealtys({ search, page, limit });
  const { mutate } = useManageRealtysRemove();

  const columns: ColumnsType<IManageRealtys> = [
    {
      key: 'name',
      title: 'Realtys',
    },
    {
      key: 'created_date',
      title: 'Created Date',
    },
    {
      title: 'Action',
      render: (data) => {
        return (
          <div className="flex items-center gap-4">
            <ButtonEditRow row_id={data.id!} path="manage-realty" />
            <ButtonRemoveRow
              onPress={() => {
                mutate(data.id, {
                  onSuccess: () => {
                    addToast({
                      color: 'success',
                      title: 'Realty Deleted',
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

  const dataSource = useMemo<IManageRealtys[]>(() => {
    if (data) {
      return data.data.data.map((item) => ({
        id: item.id,
        name: item.name,
        created_date: dayjs(item.created_date).format('DD/MM/YYYY H:mm'),
      }));
    }
    return [];
  }, [data]);

  const handleAddRealtys = () => {
    router.push('/manage-realty/modify');
  };
  return {
    columns,
    dataSource,
    isLoading: isLoading || isFetching,
    paginationPage: page,
    paginationTotal: data?.data.meta.totalPages,
    onChangePage: (page: number) => setPage(page),
    onManageAddRealtys: handleAddRealtys,
    onPressSearchButton: (search: string) => setSearch(search),
  };
};

export default useManageRealtys;
