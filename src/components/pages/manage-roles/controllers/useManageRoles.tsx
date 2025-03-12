import ButtonEditRow from '@/components/modules/ButtonRemoveRow.tsx/ButtonEditRow';
import ButtonRemoveRow from '@/components/modules/ButtonRemoveRow.tsx/ButtonRemoveRow';
import { ColumnsType } from '@/components/nextui/Tables/type';
import useManageRoleRemove from '@/hooks/useMutation/useManageRoleRemove';
import useManageRole from '@/hooks/useQuery/useManageRole';
import { IManageRoles } from '@/types/models/manageRoles';
import { addToast } from '@heroui/react';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

const useManageRoles = () => {
  const router = useRouter();

  const { data, isLoading, isFetching, refetch } = useManageRole();
  const { mutate } = useManageRoleRemove();

  const columns: ColumnsType<IManageRoles> = [
    {
      key: 'name',
      title: 'Roles',
    },
    {
      key: 'created_date',
      title: 'Created Date',
      render: (data) => {
        return dayjs(data.created_date).format('DD/MM/YYYY H:mm');
      },
    },
    // {
    //   key: 'created_by',
    //   title: 'Created By',
    // },
    {
      title: 'Action',
      render: (data) => {
        return (
          <div className="flex items-center gap-4">
            <ButtonEditRow row_id={data.id!} path='manage-role' />
            <ButtonRemoveRow
              onPress={() => {
                mutate(data.id, {
                  onSuccess: () => {
                    addToast({
                      color: 'success',
                      title: 'Role Deleted',
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

  const dataSource = useMemo<IManageRoles[]>(() => {
    if (data?.data) {
      return data.data.map((item) => ({
        id: item.id,
        name: item.name,
        created_date: item.created_date,
        created_by: item.created_by,
      }));
    }
    return [];
  }, [data]);

  const handleAddRoles = () => {
    router.push('/manage-role/modify');
  };

  return {
    columns,
    dataSource,
    isLoading: isLoading || isFetching,
    onManageAddRoles: handleAddRoles,
  };
};

export default useManageRoles;
