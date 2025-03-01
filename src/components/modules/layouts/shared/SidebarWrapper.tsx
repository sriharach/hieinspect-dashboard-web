'use client';

// libs
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

// styles
import styles from './sidebarWrapper.module.scss';

import { sideBarRoutesPath } from './routesPath';

const SidebarWrapper = () => {
  const pathname = usePathname();

  return (
    <aside className={styles['sidebar-wrapper-aside']}>
      <div className={styles['sidebar-wrapper']}>
        <h1 className={styles['sidebar-wrapper-aside-header']}>HIEspect</h1>
        <div className={styles['sidebar-wrapper-aside-href']}>
          <div className="flex flex-col flex-1 gap-3">
            <h3 id="main" className="text-xs font-normal">
              Main
            </h3>
            {sideBarRoutesPath.main.map((route) => {
              return (
                <Link
                  draggable={false}
                  key={route.key}
                  href={route.href}
                  className="text-default-900 active:bg-none max-w-full"
                >
                  <div
                    className={clsx(styles['sidebar-wrapper-href'], {
                      'bg-primary-100': pathname === route.href,
                    })}
                  >
                    {route.icon}
                    <span>{route.name}</span>
                  </div>
                </Link>
              );
            })}
            <h3 id="manage" className="text-xs font-normal">
              Manage user
            </h3>
            {sideBarRoutesPath.manageUser.map((route) => {
              return (
                <Link
                  draggable={false}
                  key={route.key}
                  href={route.href}
                  className="text-default-900 active:bg-none max-w-full"
                >
                  <div
                    className={clsx(styles['sidebar-wrapper-href'], {
                      'bg-primary-100': pathname.split('/')[1] === route.key,
                    })}
                  >
                    {route.icon}
                    <span>{route.name}</span>
                  </div>
                </Link>
              );
            })}
            <h3 id="manage" className="text-xs font-normal">
              Manage house
            </h3>
            {sideBarRoutesPath.manageHouse.map((route) => {
              return (
                <Link
                  draggable={false}
                  key={route.key}
                  href={route.href}
                  className="text-default-900 active:bg-none max-w-full"
                >
                  <div
                    className={clsx(styles['sidebar-wrapper-href'], {
                      'bg-primary-100': pathname.split('/')[1] === route.key,
                    })}
                  >
                    {route.icon}
                    <span>{route.name}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarWrapper;
