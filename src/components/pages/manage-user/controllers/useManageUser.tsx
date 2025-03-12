import ButtonEditRow from '@/components/modules/ButtonRemoveRow.tsx/ButtonEditRow';
import ButtonRemoveRow from '@/components/modules/ButtonRemoveRow.tsx/ButtonRemoveRow';
import { ColumnsType } from '@/components/nextui/Tables/type';
import useManageUserRemove from '@/hooks/useMutation/useManageUserRemove';
import useManageUserService from '@/hooks/useQuery/useManageUser';
import { useAuth } from '@/store/userAuth';
import { IManageUserDataSoure } from '@/types/models/manageUser';
import { Chip, addToast } from '@heroui/react';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

const useManageUser = () => {
  // state
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [search, setSearch] = useState('');

  // hook
  const { data, isLoading, isFetching, refetch } = useManageUserService({
    page,
    limit,
    search,
    searchBy: ['user_name', 'first_name'],
  });
  const { mutate } = useManageUserRemove();
  const { user } = useAuth();

  const dataSource: IManageUserDataSoure[] = useMemo(() => {
    if (data) {
      return data.data.data.data.map((item) => ({
        id: item.id,
        user_name: item.user_name,
        first_name: item.first_name,
        role: item.role.name,
        created_date: dayjs(item.created_date).format('DD/MM/YYYY H:mm'),
        is_active: item.is_active,
      })) as IManageUserDataSoure[];
    }
    return [];
  }, [data]);

  const coloums: ColumnsType<IManageUserDataSoure> = [
    {
      key: 'user_name',
      title: 'Username',
    },
    {
      key: 'role',
      title: 'Role',
    },
    {
      key: 'first_name',
      title: 'Name',
    },
    {
      key: 'is_active',
      title: 'Active',
      render: (data) => {
        if (data.is_active)
          return (
            <Chip color="success" variant="dot">
              Active
            </Chip>
          );
        return (
          <Chip color="danger" variant="dot">
            Not Active
          </Chip>
        );
      },
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
            <ButtonEditRow row_id={data.id} path='manage-user' />
            {user?.id != data.id && (
              <ButtonRemoveRow
                onPress={() => {
                  mutate(data.id, {
                    onSuccess() {
                      addToast({
                        color: 'success',
                        title: 'User Deleted',
                      });
                      refetch();
                    },
                  });
                }}
              />
            )}
          </div>
        );
      },
    },
  ];

  const handleAddUser = () => router.push('/manage-user/modify');

  return {
    dataSource,
    coloums,
    paginationPage: page,
    paginationTotal: data?.data.data.meta.totalPages,
    isLoading: isLoading || isFetching,
    onManageAddUser: handleAddUser,
    onChangePage: (page: number) => setPage(page),
    onPressSearchButton: (search: string) => setSearch(search),
  };
};

export default useManageUser;
