import React from 'react';
import { LayoutProps } from './type';
import SidebarWrapper from './shared/SidebarWrapper';
import NavbarWrapper from './shared/NavbarWrapper';
import styles from './layout.module.scss';
import { Card } from '@heroui/react';

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles['layout']}>
      <SidebarWrapper />
      <NavbarWrapper />
      <section className={styles['layout-section']}>
        <Card className={styles['layout-card']} shadow="lg">
          {children}
        </Card>
      </section>
    </div>
  );
};

export default Layout;
