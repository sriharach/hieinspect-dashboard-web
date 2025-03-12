// libs
import { addToast } from '@heroui/react';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

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

  // hooks
  const { data, isLoading, isFetching, refetch } = useRealtys();
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
      return data.data.map((item) => ({
        id: item.id,
        name: item.name,
        created_date: dayjs(item.created_date).format('DD/MM/YYYY H:mm'),
      }));
    }
    return [];
  }, [data]);

  // const dataSource: IManageRoles[] = [
  //   {
  //     name: 'แสนสิริ',
  //     id: '1',
  //     created_date: new Date().toISOString(),
  //     created_by: 'Admin',
  //   },
  //   {
  //     name: 'พฤกษา เรียลเอสเตท',
  //     id: '2',
  //     created_date: new Date().toISOString(),
  //     created_by: 'Admin',
  //   },
  //   {
  //     name: 'AP (Thailand)',
  //     id: '3',
  //     created_date: new Date().toISOString(),
  //     created_by: 'Admin',
  //   },
  //   {
  //     name: 'Land and Houses',
  //     id: '4',
  //     created_date: new Date().toISOString(),
  //     created_by: 'Admin',
  //   },
  //   {
  //     name: 'Supalai Public Company Limited',
  //     id: '5',
  //     created_date: new Date().toISOString(),
  //     created_by: 'Admin',
  //   },
  //   {
  //     name: 'SC ASSET Corporation Public Company Limited',
  //     id: '6',
  //     created_date: new Date().toISOString(),
  //     created_by: 'Admin',
  //   },
  //   {
  //     name: 'LPN Development',
  //     id: '7',
  //     created_date: new Date().toISOString(),
  //     created_by: 'Admin',
  //   },
  // ];

  const handleAddRealtys = () => {
    router.push('/manage-realty/modify');
  };
  return { columns, dataSource, isLoading: isLoading || isFetching, onManageAddRealtys: handleAddRealtys };
};

export default useManageRealtys;
