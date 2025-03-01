import { HeroDeleteIcon, HeroEyeIcon, HeroPencilIcon } from '@/components/assets/icons/hero';
import { ColumnsType } from '@/components/nextui/Tables/type';
import { IManageRoles } from '@/types/models/manageRoles';
import { Tooltip } from '@heroui/react';
import { useRouter } from 'next/navigation';

const useManageRoles = () => {
  const router = useRouter();

  const columns: ColumnsType<IManageRoles> = [
    {
      key: 'name',
      title: 'Roles',
    },
    {
      key: 'created_date',
      title: 'Created Date',
    },
    {
      key: 'created_by',
      title: 'Created By',
    },
    {
      title: 'Action',
      render: () => {
        return (
          <div className="flex items-center gap-4">
            <Tooltip content="Edit user">
              <button className="text-[#979797]">
                <HeroPencilIcon width={20} />
              </button>
            </Tooltip>
            <Tooltip content="Delete user" color="danger">
              <button className="text-red-500">
                <HeroDeleteIcon width={20} />
              </button>
            </Tooltip>
          </div>
        );
      },
    },
  ];

  const dataSource: IManageRoles[] = [
    {
      name: 'Super Admin',
      id: '1',
      created_date: new Date().toISOString(),
      created_by: 'Admin',
    },
  ];

  const handleAddRoles = () => {
    router.push('/manage-role/modify');
  };
  return { columns, dataSource, onManageAddRoles: handleAddRoles };
};

export default useManageRoles;
