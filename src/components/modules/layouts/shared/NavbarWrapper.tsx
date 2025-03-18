'use client';

// libs
import React from 'react';
import { Avatar, Navbar, NavbarContent, NavbarItem } from '@heroui/react';
import { Dropdown, DropdownMenu, DropdownTrigger, DropdownItem } from '@heroui/dropdown';
import clsx from 'clsx';

import styles from './navbarWrapper.module.scss';

// types
import { NavbarWrapperProps } from './type';
import { HeroMenuNavIcon } from '@/components/assets/icons/hero';
import { useAuth } from '@/store/userAuth';

const NavbarWrapper = ({ setCollapsed, collapsed }: NavbarWrapperProps) => {
  const { signOut, user } = useAuth();

  const handleLogout = () => signOut();

  return (
    <div className={styles['navbar-wrapper']}>
      <Navbar
        isBordered
        className="w-full"
        classNames={{
          wrapper: 'w-full max-w-full',
        }}
      >
        <NavbarContent
          className={clsx('inline-flex md:hidden items-center', {
            ' ml-[16rem]': collapsed,
          })}
        >
          <HeroMenuNavIcon role="button" onClick={() => setCollapsed((prev) => !prev)} />
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Avatar as="button" size="md" name={user?.username.substring(0, 1).toUpperCase()} />
              </DropdownTrigger>
              <DropdownMenu disabledKeys={['profile']}>
                <DropdownItem key={'profile'} className="flex flex-col justify-start w-full items-start">
                  <p className="text-black">Signed in as {user?.username}</p>
                </DropdownItem>
                <DropdownItem key="logout" color="danger" className="text-danger" onPress={handleLogout}>
                  Sign Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default NavbarWrapper;
