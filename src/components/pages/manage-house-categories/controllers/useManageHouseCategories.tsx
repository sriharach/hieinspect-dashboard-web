import ButtonEditRow from '@/components/modules/ButtonRemoveRow.tsx/ButtonEditRow';
import ButtonRemoveRow from '@/components/modules/ButtonRemoveRow.tsx/ButtonRemoveRow';
import { ColumnsType } from '@/components/nextui/Tables/type';
import useManageHouseCategoriesRemove from '@/hooks/useMutation/useManageHouseCategoriesRemove';
import useManageCategories from '@/hooks/useQuery/useManageCategories';
import { IManageHouseCategories } from '@/types/models/manageHouseCategories';
import { addToast } from '@heroui/react';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

const useManageHouseCategories = () => {
  const router = useRouter();


  // state
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [search, setSearch] = useState('');

  // hook
  const { data, isLoading, isFetching, refetch } = useManageCategories({
    limit,
    page,
    search
  });
  const { mutate } = useManageHouseCategoriesRemove();

  const columns: ColumnsType<IManageHouseCategories> = [
    {
      key: 'name',
      title: 'Name',
    },
    {
      key: 'created_date',
      title: 'Created date',
    },
    {
      title: 'Action',
      render: (data) => {
        return (
          <div className="flex items-center gap-4">
            <ButtonEditRow row_id={data.id!} path="manage-house-categories" />
            <ButtonRemoveRow
              onPress={() => {
                mutate(data.id, {
                  onSuccess: () => {
                    addToast({
                      color: 'success',
                      title: 'Category Deleted',
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

  const dataSource = useMemo<IManageHouseCategories[]>(() => {
    if (data) {
      return data.data.data.map((item) => ({
        id: item.id,
        name: item.name,
        created_date: dayjs(item.created_date).format('DD/MM/YYYY H:mm'),
      }));
    }
    return [];
  }, [data]);

  return {
    isLoading: isLoading || isFetching,
    columns,
    dataSource,
    paginationPage: page,
    paginationTotal: data?.data.meta.totalPages,
    onManageAddCategoreis: () => {
      router.push('/manage-house-categories/modify');
    },
    onChangePage: (page: number) => setPage(page),
    onPressSearchButton: (search: string) => setSearch(search),
  };
};

export default useManageHouseCategories;
