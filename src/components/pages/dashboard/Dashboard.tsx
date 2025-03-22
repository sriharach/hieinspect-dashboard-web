'use client';

import Layout from '@/components/modules/layouts/Layout';
import { useAuth } from '@/store/userAuth';
import React from 'react';

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth();
  return (
    <Layout>
      <div className="h-[calc(100vh_-_160px)] flex flex-col justify-center items-center m-auto space-y-4">
        <h2 className="text-3xl font-bold">Hieinspect</h2>
        {isAuthenticated && <p className="text-xl">Hi, {user?.first_name}</p>}
      </div>
    </Layout>
  );
};

export default Dashboard;
