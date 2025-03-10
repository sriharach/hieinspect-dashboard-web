'use client';

// libs
import React from 'react';
import useManageHouseCategories from './controllers/useManageHouseCategories';

// components
import Layout from '@/components/modules/layouts/Layout';
import Table from '@/components/nextui/Tables/Table';
import Button from '@/components/nextui/Button/Button';

const ManageHouseCategories = () => {
  const {
    isLoading,
    columns,
    dataSource,
    onManageAddCategoreis,
    onChangePage,
    onPressSearchButton,
  } = useManageHouseCategories();

  return (
    <Layout>
      <div className="flex flex-1 justify-between">
        <h2 className="text-3xl">Manage House Categories</h2>
        <Button
          color="primary"
          variant="flat"
          className="min-w-[120px]"
          onPress={onManageAddCategoreis}
        >
          + Add House Category
        </Button>
      </div>
      <Table
        isLoading={isLoading}
        columns={columns}
        dataSource={dataSource}
        onChangePage={onChangePage}
        onPressSearchButton={onPressSearchButton}
      />
    </Layout>
  );
};

export default ManageHouseCategories;
