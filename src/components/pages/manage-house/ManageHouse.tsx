'use client';
import Layout from '@/components/modules/layouts/Layout';
import Button from '@/components/nextui/Button/Button';
import Table from '@/components/nextui/Tables/Table';
import React from 'react';
import useManageHouse from './controllers/useManageHouse';

const ManageHouse = () => {
  const { dataSource, columns, isLoading, onChangePage, onPressSearchButton, onManageAddHouse } = useManageHouse();
  return (
    <Layout>
      <div className="flex flex-1 justify-between">
        <h2 className="text-3xl">Manage House</h2>
        <Button color="primary" variant="flat" className="min-w-[120px]" onPress={onManageAddHouse}>
          + Add House
        </Button>
      </div>
      <Table
        pagination
        serach
        isLoading={isLoading}
        columns={columns}
        dataSource={dataSource}
        onChangePage={onChangePage}
        onPressSearchButton={onPressSearchButton}
      />
    </Layout>
  );
};

export default ManageHouse;
