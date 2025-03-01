import { HeroDeleteIcon, HeroPencilIcon } from '@/components/assets/icons/hero';
import { ColumnsType } from '@/components/nextui/Tables/type';
import { IManageRoles } from '@/types/models/manageRoles';
import { Tooltip } from '@heroui/react';
import { useRouter } from 'next/navigation';

const useManageRealtys = () => {
  const router = useRouter();

  const columns: ColumnsType<IManageRoles> = [
    {
      key: 'name',
      title: 'Realtys',
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
      name: 'แสนสิริ',
      id: '1',
      created_date: new Date().toISOString(),
      created_by: 'Admin',
    },
    {
      name: 'พฤกษา เรียลเอสเตท',
      id: '2',
      created_date: new Date().toISOString(),
      created_by: 'Admin',
    },
    {
      name: 'AP (Thailand)',
      id: '3',
      created_date: new Date().toISOString(),
      created_by: 'Admin',
    },
    {
      name: 'Land and Houses',
      id: '4',
      created_date: new Date().toISOString(),
      created_by: 'Admin',
    },
    {
      name: 'Supalai Public Company Limited',
      id: '5',
      created_date: new Date().toISOString(),
      created_by: 'Admin',
    },
    {
      name: 'SC ASSET Corporation Public Company Limited',
      id: '6',
      created_date: new Date().toISOString(),
      created_by: 'Admin',
    },
    {
      name: 'LPN Development',
      id: '7',
      created_date: new Date().toISOString(),
      created_by: 'Admin',
    },
  ];

  const handleAddRealtys = () => {
    router.push('/manage-realty/modify');
  };
  return { columns, dataSource, onManageAddRealtys: handleAddRealtys };
};

export default useManageRealtys;
