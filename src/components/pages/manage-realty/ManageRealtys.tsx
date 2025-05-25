'use client';

import Layout from '@/components/modules/layouts/Layout';
import Button from '@/components/nextui/Button/Button';
import Table from '@/components/nextui/Tables/Table';
import React from 'react';
import useManageRealtys from './controllers/useManageRealtys';

const ManageRealty = () => {
  const {
    columns,
    dataSource,
    isLoading,
    paginationTotal,
    onChangePage,
    onPressSearchButton,
    onManageAddRealtys,
  } = useManageRealtys();
  return (
    <Layout>
      <div className="flex flex-1 justify-between">
        <h2 className="text-3xl">Manage Realtys</h2>
        <Button
          color="primary"
          variant="flat"
          className="min-w-[120px]"
          onPress={onManageAddRealtys}
        >
          + Add Realty
        </Button>
      </div>
      <Table
        serach
        pagination
        paginationTotal={paginationTotal}
        columns={columns}
        dataSource={dataSource}
        isLoading={isLoading}
        onChangePage={onChangePage}
        onPressSearchButton={onPressSearchButton}
      />
    </Layout>
  );
};

export default ManageRealty;
