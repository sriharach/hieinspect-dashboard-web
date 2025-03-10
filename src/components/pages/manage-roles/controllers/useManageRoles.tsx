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
            {/* <Tooltip content="Edit user">
              <button className="text-[#979797]">
                <HeroPencilIcon width={20} />
              </button>
            </Tooltip> */}
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
        created_date: new Date(item.created_date).toLocaleString('th-TH'),
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
