
'use client'

import Loading from '@/components/nextui/Loading/Loading';
import { useAuth } from '@/store/userAuth';
import React, { useLayoutEffect } from 'react';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { initialized, initialize } = useAuth();

  useLayoutEffect(() => {
    initialize();
  }, [initialized]);

  if (!initialized) return <Loading />;

  return <>{children}</>;
};

export default AuthProvider;
