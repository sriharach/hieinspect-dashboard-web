'use client';

import React, { useEffect, useMemo, useLayoutEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Loading from '@/components/nextui/Loading/Loading';
import { useAuth } from '@/store/userAuth';

const AuthGuestGuard = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, initialize } = useAuth();

  const router = useRouter();
  const pathName = usePathname();

  const whiteListAuth = useMemo(() => ['/sign-in'], []);

  useEffect(() => {
    if (!whiteListAuth.includes(pathName) && !isAuthenticated) {
      router.push('/sign-in');
    }

    if (isAuthenticated) {
      if (!whiteListAuth.includes(pathName) && pathName) {
        router.push(pathName);
      }
    }
  }, [isAuthenticated, pathName, router, whiteListAuth]);

  useLayoutEffect(() => {
    initialize();
  }, []);

  if (!isAuthenticated && !whiteListAuth.includes(pathName)) return <Loading />;

  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthGuestGuard;
