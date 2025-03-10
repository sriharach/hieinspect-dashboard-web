//  lib
import React from 'react';
import Image from 'next/image';
import { Divider } from '@heroui/react';
import { AuthLayoutProps } from './type';

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="relative items-center flex h-screen max-h-[860px]">
      <div className="container mx-auto md:ml-auto lg:ml-[400px] items-center flex flex-wrap">
        <div className="flex-1 w-full md:w-3/5 lg:w-6/12 xl:w-6/12 md:px-6 px-4">
          <div className="absolute right-0 top-0 z-0">
            <Image
              draggable={false}
              width={700}
              height={700}
              className="w-[400px] lg:w-full lg:h-full"
              src="/pattern_react.webp"
              alt="gradient"
              quality={100}
            />
          </div>
          {children}
        </div>

        <div className="hidden my-10 md:block">
          <Divider className="text-red" orientation="vertical" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
