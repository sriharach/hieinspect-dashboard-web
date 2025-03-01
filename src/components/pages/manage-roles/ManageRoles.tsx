'use client';

import React from 'react';
import Layout from '@/components/modules/layouts/Layout';
import Table from '@/components/nextui/Tables/Table';
import useManageRoles from './controllers/useManageRoles';
import Button from '@/components/nextui/Button/Button';

const ManageRoles = () => {
  const { columns, dataSource, onManageAddRoles } = useManageRoles();

  return (
    <Layout>
      <div className="flex flex-1 justify-between">
        <h2 className="text-3xl">Manage Roles</h2>
        <Button color="primary" variant="flat" className="min-w-[120px]" onPress={onManageAddRoles}>
          + Add Role
        </Button>
      </div>
      <Table columns={columns} dataSource={dataSource} pagination />
    </Layout>
  );
};

export default ManageRoles;
