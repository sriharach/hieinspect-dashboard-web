//  lib
import React from 'react';
import Image from 'next/image';
import { Divider } from '@heroui/react';
import { AuthLayoutProps } from './type';

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex-col flex items-center justify-center md:p-6 p-4">
        <div className="absolute left-0 right-0 bottom-0 top-0 z-0">
          <Image
            draggable={false}
            width={100}
            height={100}
            className="w-full h-full"
            src="https://nextui.org/gradients/docs-right.png"
            alt="gradient"
          />
        </div>
        {children}
      </div>

      <div className="hidden my-10 md:block">
        <Divider className="text-red" orientation="vertical" />
      </div>
    </div>
  );
};

export default AuthLayout;
