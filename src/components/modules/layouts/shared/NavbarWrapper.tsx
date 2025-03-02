'use client';

// libs
import React from 'react';
import { Avatar, Navbar, NavbarContent, NavbarItem } from '@heroui/react';
import { Dropdown, DropdownMenu, DropdownTrigger, DropdownItem } from '@heroui/dropdown';
import { useRouter } from 'next/navigation';

import styles from './navbarWrapper.module.scss';

// types
import { NavbarWrapperProps } from './type';
import { HeroMenuNavIcon } from '@/components/assets/icons/hero';

const NavbarWrapper = ({ setCollapsed }: NavbarWrapperProps) => {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/sign-in');
  };

  return (
    <div className={styles['navbar-wrapper']}>
      <Navbar
        isBordered
        className="w-full"
        classNames={{
          wrapper: 'w-full max-w-full',
        }}
      >
        <NavbarContent className="inline-flex md:hidden items-center">
          <HeroMenuNavIcon role="button" onClick={() => setCollapsed((prev) => !prev)} />
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Avatar as="button" size="md" name="U" />
              </DropdownTrigger>
              <DropdownMenu disabledKeys={['profile']}>
                <DropdownItem key={'profile'} className="flex flex-col justify-start w-full items-start">
                  <p className="text-black">Signed in as zoey@example.com</p>
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
