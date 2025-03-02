'use client'
import Layout from '@/components/modules/layouts/Layout';
import Button from '@/components/nextui/Button/Button';
import Table from '@/components/nextui/Tables/Table';
import React from 'react';

const ManageHouse = () => {
  return (
    <Layout>
      <div className="flex flex-1 justify-between">
        <h2 className="text-3xl">Manage House</h2>
        <Button color="primary" variant="flat" className="min-w-[120px]">
          + Add user
        </Button>
      </div>
      <Table
        pagination
        columns={[]}
        dataSource={[]}
      />
    </Layout>
  );
};

export default ManageHouse;
