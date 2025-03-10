import {
  HeroHomeIcon,
  HeroManageUserIcon,
  HeroManageSpectHouse,
  HeroUserRoleIcon,
  HeroHouseRealtysIcon,
  HeroHouseBuildIcon
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
      icon: createElement(HeroHouseRealtysIcon),
      key: 'manage-realty',
      href: '/manage-realty',
      name: 'Manage Realtys',
    },
    {
      icon: createElement(HeroHouseBuildIcon),
      key: 'manage-house-categories',
      href: '/manage-house-categories',
      name: 'Manage House Categories',
    },
  ],
};

export type TsideBarRoutesPath = typeof sideBarRoutesPath;
