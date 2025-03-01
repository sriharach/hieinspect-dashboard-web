import React from 'react';
import { LayoutProps } from './type';
import SidebarWrapper from './shared/SidebarWrapper';
import NavbarWrapper from './shared/NavbarWrapper';

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-1">
      <SidebarWrapper />
      <NavbarWrapper>{children}</NavbarWrapper>
    </div>
  );
};

export default Layout;
