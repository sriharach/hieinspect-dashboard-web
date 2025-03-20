'use client';

import React, { useMemo, useLayoutEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Loading from '@/components/nextui/Loading/Loading';
import { useAuth } from '@/store/userAuth';

const AuthGuestGuard = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, user } = useAuth();

  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const whiteListAuth = useMemo(() => ['/sign-in'], []);
  const whiteList = useMemo(() => ['/manage-user', '/manage-role'], []);

  useLayoutEffect(() => {
    if (!whiteListAuth.includes(pathName) && !isAuthenticated) {
      router.push('/sign-in');
    }
    if (isAuthenticated) {
      if (user?.role_name.toUpperCase() != 'ADMIN' && whiteList.includes(pathName)) {
        return router.push('/dashboard');
      }

      // if (pathName && !whiteListAuth.includes(pathName)) {
      //   router.push(pathName + '?' + searchParams.toString());
      // } else {
      //   router.push('/dashboard');
      // }
    }
  }, [isAuthenticated, pathName, router, searchParams, user?.role_name, whiteList, whiteListAuth]);

  if (!whiteListAuth.includes(pathName) && !isAuthenticated) return <Loading />;

  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthGuestGuard;
