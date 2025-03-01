import { HeroDeleteIcon, HeroEyeIcon, HeroPencilIcon } from '@/components/assets/icons/hero';
import { ColumnsType } from '@/components/nextui/Tables/type';
import { IManageUser } from '@/types/models/manageUser';
import { Tooltip } from '@heroui/react';
import { useRouter } from 'next/navigation';

const useManageUser = () => {
  const router = useRouter();

  const dataMock: IManageUser[] = [
    {
      id: '1',
      user_name: 'Tony Reichert',
      role: 'SuperAdmin',
      first_name: 'Tony',
      created_date: '2021-09-01',
      is_active: true,
    },
    {
      id: '2',
      user_name: 'Zoey Lang',
      role: 'Member',
      first_name: 'Zoey',
      created_date: '2021-09-01',
      is_active: true,
    },
    {
      id: '3',
      user_name: 'William Howard',
      role: 'Member',
      first_name: 'William',
      created_date: '2021-09-01',
      is_active: true,
    },
    {
      id: '4',
      user_name: 'Jane Fisher',
      role: 'Member',
      first_name: 'Jane',
      created_date: '2021-09-01',
      is_active: true,
    },
  ];

  const coloums: ColumnsType<IManageUser> = [
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

  return { dataSource: dataMock, coloums, onManageAddUser: handleAddUser };
};

export default useManageUser;
