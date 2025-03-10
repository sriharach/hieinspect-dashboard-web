//  lib
import React from 'react';
import { AuthLayoutProps } from './type';

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="relative items-center flex h-screen justify-center max-h-[860px] md:px-6 px-4">
      <div className="absolute right-0 top-0 z-0">
        <img
          draggable={false}
          width={600}
          height={600}
          src="/pattern_react.webp"
          alt="gradient"
        />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
