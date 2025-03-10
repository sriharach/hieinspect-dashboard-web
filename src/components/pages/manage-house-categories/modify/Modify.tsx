'use client';

// libs
import { Input } from '@heroui/react';
import React from 'react';
import useModifyHouseCategories from '../controllers/useModifyHouseCategories';

// component
import Layout from '@/components/modules/layouts/Layout';
import Button from '@/components/nextui/Button/Button';
import styles from './modify.module.scss';

const Modify = () => {
  const { errorMessage, setCategory, handleCancelModify, handleSubmitForm } =
    useModifyHouseCategories();
  return (
    <Layout>
      <form className={styles['modify-content']}>
        <Input
          errorMessage={errorMessage}
          isInvalid={!!errorMessage}
          label="Category"
          onChange={(e) => setCategory(e.target.value)}
        />
        <div className={styles['modify-content-button']}>
          <Button fullWidth color="primary" onPress={handleSubmitForm}>
            Submit
          </Button>
          <Button
            fullWidth
            color="primary"
            variant="ghost"
            onPress={handleCancelModify}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Layout>
  );
};

export default Modify;
