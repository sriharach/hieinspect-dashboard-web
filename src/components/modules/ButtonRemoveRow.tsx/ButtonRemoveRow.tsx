import { HeroDeleteIcon } from '@/components/assets/icons/hero';
import { Button, Popover, PopoverContent, PopoverTrigger } from '@heroui/react';
import React from 'react';

interface ButtonRemoveRowProps {
  onPress: () => void;
}

const ButtonRemoveRow = ({ onPress }: ButtonRemoveRowProps) => {
  return (
    <Popover placement="top">
      <PopoverTrigger>
        <button className="text-red-500">
          <HeroDeleteIcon width={20} />
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="inline-flex gap-3">
          <Button variant="light" size="sm" onPress={onPress}>
            Confirm
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ButtonRemoveRow;
