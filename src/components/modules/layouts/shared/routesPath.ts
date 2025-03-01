import {
  HeroHomeIcon,
  HeroManageUserIcon,
  HeroManageSpectHouse,
  HeroUserRoleIcon,
} from '@/components/assets/icons/hero';
import { createElement } from 'react';

export const sideBarRoutesPath = {
  main: [
    {
      icon: createElement(HeroHomeIcon),
      key: 'dashboard',
      href: '/dashboard',
      name: 'Home',
    },
  ],
  manageUser: [
    {
      icon: createElement(HeroManageUserIcon),
      key: 'manage-user',
      href: '/manage-user',
      name: 'Manage Users',
    },
    {
      icon: createElement(HeroUserRoleIcon),
      key: 'manage-role',
      href: '/manage-role',
      name: 'Manage Roles',
    },
  ],
  manageHouse: [
    {
      icon: createElement(HeroManageSpectHouse),
      key: 'manage-house',
      href: '/manage-house',
      name: 'Manage House',
    },
    {
      icon: createElement(HeroManageSpectHouse),
      key: 'manage-realty',
      href: '/manage-realty',
      name: 'Manage Realtys',
    },
  ],
};

export type TsideBarRoutesPath = typeof sideBarRoutesPath;
