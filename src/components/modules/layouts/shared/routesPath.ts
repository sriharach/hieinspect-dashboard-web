import { HeroHomeIcon, HeroManageUserIcon, HeroManageSpectHouse } from '@/components/assets/icons/hero';
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
  manage: [
    {
      icon: createElement(HeroManageUserIcon),
      key: 'manage-user',
      href: '/manage-user',
      name: 'Manage Users',
    },
    {
      icon: createElement(HeroManageSpectHouse),
      key: 'manage-house',
      href: '/manage-house',
      name: 'Manage House',
    },
  ],
};

export type TsideBarRoutesPath = typeof sideBarRoutesPath;
