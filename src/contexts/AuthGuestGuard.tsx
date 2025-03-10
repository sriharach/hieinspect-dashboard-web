'use client';

import React, { useEffect, useMemo, useLayoutEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Loading from '@/components/nextui/Loading/Loading';
import { useAuth } from '@/store/userAuth';

const AuthGuestGuard = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, initialize, user } = useAuth();

  const router = useRouter();
  const pathName = usePathname();

  const whiteListAuth = useMemo(() => ['/sign-in'], []);
  const whiteList = useMemo(() => ['/manage-user', '/manage-role'], []);

  useEffect(() => {
    if (!whiteListAuth.includes(pathName) && !isAuthenticated) {
      router.push('/sign-in');
    }

    if (isAuthenticated) {
      if (
        user?.role_name.toUpperCase() != 'ADMIN' &&
        whiteList.includes(pathName)
      ) {
        router.back();
      }

      if (!whiteListAuth.includes(pathName) && pathName) {
        router.push(pathName);
      }
    }
  }, [isAuthenticated, pathName, router, user?.role_name, whiteList, whiteListAuth]);

  useLayoutEffect(() => {
    initialize();
  }, []);

  if (!isAuthenticated && !whiteListAuth.includes(pathName)) return <Loading />;

  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthGuestGuard;
