'use client';

import React, { useEffect, useMemo, useLayoutEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Loading from '@/components/nextui/Loading/Loading';
import { useAuth } from '@/store/userAuth';

const AuthGuestGuard = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, initialize, user } = useAuth();

  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const whiteListAuth = useMemo(() => ['/sign-in'], []);
  const whiteList = useMemo(() => ['/manage-user', '/manage-role'], []);

  // useEffect(() => {
  // if (isAuthenticated) {
  //   if (user?.role_name.toUpperCase() != 'ADMIN' && whiteList.includes(pathName)) {
  //     router.back();
  //   }
  //   if (!whiteListAuth.includes(pathName) && pathName) {
  //     const newRoute = !!searchParams.toString() ? pathName + '?' + searchParams.toString() : pathName;
  //     router.replace(newRoute);
  //   }
  // }
  // if (!whiteListAuth.includes(pathName) && !isAuthenticated) {
  //   router.push('/sign-in');
  // }
  // }, [isAuthenticated, pathName, router, searchParams, user?.role_name, whiteList, whiteListAuth]);

  useEffect(() => {
    if (isAuthenticated) {
      if (user?.role_name.toUpperCase() != 'ADMIN' && whiteList.includes(pathName)) {
        router.back();
      }
      if (whiteListAuth.includes(pathName)) router.push('/dashboard');
    } else {
      if (!whiteListAuth.includes(pathName)) {
        router.push('/sign-in');
      }
    }
  }, [isAuthenticated, pathName, whiteListAuth]);

  useLayoutEffect(() => {
    initialize();
  }, []);

  if (!isAuthenticated && !whiteListAuth.includes(pathName)) return <Loading />;

  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthGuestGuard;
