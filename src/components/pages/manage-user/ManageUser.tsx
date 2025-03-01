'use client';

// libs
import React from 'react';

// components
import Layout from '@/components/modules/layouts/Layout';
import Table from '@/components/nextui/Tables/Table';
import Button from '@/components/nextui/Button/Button';

import useManageUser from './controllers/useManageUser';

const ManageUser = () => {
  const { dataSource, coloums, onManageAddUser } = useManageUser();

  return (
    <Layout>
      <div className="flex flex-1 justify-between">
        <h2 className="text-3xl">Manage Users</h2>
        <Button color="primary" variant="flat" className="min-w-[120px]" onPress={onManageAddUser}>
          + Add user
        </Button>
      </div>
      <Table pagination columns={coloums} dataSource={dataSource} />
    </Layout>
  );
};

export default ManageUser;
