import { HeroDeleteIcon, HeroEyeIcon, HeroPencilIcon } from '@/components/assets/icons/hero';
import { ColumnsType } from '@/components/nextui/Tables/type';
import useManageUserService from '@/hooks/useQuery/useManageUser';
import { IManageUserDataSoure } from '@/types/models/manageUser';
import { Tooltip } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

const useManageUser = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [search, setSearch] = useState('');

  const { data } = useManageUserService({ page, limit, search });

  const dataSource: IManageUserDataSoure[] = useMemo(() => {
    if (data) {
      return data.data.data.data.map((item) => ({
        id: item.id,
        user_name: item.user_name,
        first_name: item.first_name,
        role: item.role.name,
        created_date: new Date(item.created_date).toLocaleString('th-TH'),
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
      title: 'Firstname',
    },
    {
      key: 'is_active',
      title: 'Active',
      render: (data) => {
        if (data.is_active) return <span>ใช้งานอยู่</span>;
        return <span>เลิกใช้งาน</span>;
      },
    },
    {
      key: 'created_date',
      title: 'Created date',
    },
    {
      title: 'Action',
      render: () => {
        return (
          <div className="flex items-center gap-4 ">
            <div>
              <Tooltip content="Details">
                <button className="text-[#979797]">
                  <HeroEyeIcon width={20} />
                </button>
              </Tooltip>
            </div>
            <div>
              <Tooltip content="Edit user">
                <button className="text-[#979797]">
                  <HeroPencilIcon width={20} />
                </button>
              </Tooltip>
            </div>
            <div>
              <Tooltip content="Delete user" color="danger">
                <button className="text-red-500">
                  <HeroDeleteIcon width={20} />
                </button>
              </Tooltip>
            </div>
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
    onManageAddUser: handleAddUser,
    onChangePage: (page: number) => setPage(page),
    onPressSearchButton: (search: string) => setSearch(search),
  };
};

export default useManageUser;
