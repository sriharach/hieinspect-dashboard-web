import { HeroPencilIcon } from '@/components/assets/icons/hero';
import { useRouter } from 'next/navigation';
import React from 'react';

interface ButtonEditRowProps {
  row_id: string;
  path: string;
}

const ButtonEditRow = ({ row_id, path }: ButtonEditRowProps) => {
  const router = useRouter();

  const newParams = new URLSearchParams();
  newParams.set('id', row_id);

  return (
    <button
      className="text-[#979797]"
      onClick={() => {
        router.push(`/${path}/modify?${encodeURIComponent(newParams.toString())}`);
      }}
    >
      <HeroPencilIcon width={20} />
    </button>
  );
};

export default ButtonEditRow;
