import React from 'react';
import { LayoutProps } from './type';
import SidebarWrapper from './shared/SidebarWrapper';
import NavbarWrapper from './shared/NavbarWrapper';
import styles from './layout.module.scss';

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles['layout']}>
      <SidebarWrapper />
      <NavbarWrapper />
      <section className={styles['layout-section']}>{children}</section>
    </div>
  );
};

export default Layout;
