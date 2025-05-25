'use client';

// libs
import React, { useState } from 'react';
import {
  Avatar,
  Form,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Navbar,
  NavbarContent,
  NavbarItem,
  addToast,
} from '@heroui/react';
import { Dropdown, DropdownMenu, DropdownTrigger, DropdownItem } from '@heroui/dropdown';
import clsx from 'clsx';

import styles from './navbarWrapper.module.scss';

// types
import { NavbarWrapperProps } from './type';
import { HeroMenuNavIcon } from '@/components/assets/icons/hero';
import { useAuth } from '@/store/userAuth';
import Button from '@/components/nextui/Button/Button';
import useManageUpdateUser from '@/hooks/useMutation/useManageUpdateUser';

const NavbarWrapper = ({ setCollapsed, collapsed }: NavbarWrapperProps) => {
  // auth
  const { signOut, user } = useAuth();

  const handleLogout = () => signOut();

  // state
  const [openModal, setOpenModal] = useState(false);

  // hook
  const { mutate } = useManageUpdateUser();

  const handleChangePassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as { password: string };
    mutate(
      { id: user?.id, user_name: user?.username, password: data.password },
      {
        onSuccess() {
          addToast({ title: 'Changed password', color: 'success' });
          setOpenModal(false);
        },
      },
    );
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
        <NavbarContent
          className={clsx('inline-flex md:hidden items-center', {
            'ml-[16rem]': collapsed,
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
                <DropdownItem key="change-password" color="primary" onPress={() => setOpenModal(true)}>
                  Change Password
                </DropdownItem>
                <DropdownItem key="logout" color="danger" className="text-danger" onPress={handleLogout}>
                  Sign Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Modal Change Password */}
      {openModal && (
        <Modal isOpen={openModal} size="lg" placement="center" onClose={() => setOpenModal(false)}>
          <ModalContent className="pb-4">
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Change Password</ModalHeader>
                <ModalBody>
                  <Form className="w-full max-w-md space-y-6" onSubmit={handleChangePassword}>
                    <Input
                      isRequired
                      errorMessage="Request"
                      label="New password"
                      labelPlacement="outside"
                      name="password"
                      placeholder=""
                      type="password"
                    />
                    <div className="flex justify-end gap-3 w-full">
                      <Button type="submit" color="primary" className="min-w-[100px] h-[40px] text-sm">
                        Submit
                      </Button>
                      <Button variant="bordered" className="min-w-[100px] h-[40px] text-sm" onPress={onClose}>
                        Close
                      </Button>
                    </div>
                  </Form>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default NavbarWrapper;
