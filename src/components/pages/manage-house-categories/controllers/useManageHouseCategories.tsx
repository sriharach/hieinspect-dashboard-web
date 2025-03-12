import ButtonEditRow from '@/components/modules/ButtonRemoveRow.tsx/ButtonEditRow';
import ButtonRemoveRow from '@/components/modules/ButtonRemoveRow.tsx/ButtonRemoveRow';
import { ColumnsType } from '@/components/nextui/Tables/type';
import useManageHouseCategoriesRemove from '@/hooks/useMutation/useManageHouseCategoriesRemove';
import useManageCategories from '@/hooks/useQuery/useManageCategories';
import { IManageHouseCategories } from '@/types/models/manageHouseCategories';
import { addToast } from '@heroui/react';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

const useManageHouseCategories = () => {
  const router = useRouter();

  // hook
  const { data, isLoading, isFetching, refetch } = useManageCategories();
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
      return data.data.map((item) => ({
        id: item.id,
        name: item.name,
        created_date: dayjs(item.created_date).format('DD/MM/YYYY H:mm'),
      }));
    }
    return [];
  }, [data]);

  return {
    isLoading: isLoading || isFetching,
    paginationTotal: 0,
    columns,
    dataSource,
    onManageAddCategoreis: () => {
      router.push('/manage-house-categories/modify');
    },
    onChangePage: () => {},
    onPressSearchButton: () => {},
  };
};

export default useManageHouseCategories;
