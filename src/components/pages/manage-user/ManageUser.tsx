'use client';

// libs
import React from 'react';

// components
import Layout from '@/components/modules/layouts/Layout';
import Table from '@/components/nextui/Tables/Table';
import useManageUser from './controllers/useManageUser';

const ManageUser = () => {
  const { dataSource, coloums } = useManageUser();

  return (
    <Layout>
      <Table pagination columns={coloums} dataSource={dataSource} />
    </Layout>
  );
};

export default ManageUser;
