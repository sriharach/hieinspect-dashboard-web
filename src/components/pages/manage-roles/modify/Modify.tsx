'use client';

// libs
import React from 'react';
import { Input } from '@heroui/react';

// components
import Layout from '@/components/modules/layouts/Layout';
import Button from '@/components/nextui/Button/Button';

import styles from './modify.module.scss';
import useModifyRole from '../controllers/useModifyRole';

const Modify = () => {
  const { errorMessage, handleCancelModify, handleSubmitForm, setRole } =
    useModifyRole();

  return (
    <Layout>
      <form className={styles['modify-content']}>
        <Input
          errorMessage={errorMessage}
          isInvalid={!!errorMessage}
          label="Role"
          onChange={(e) => setRole(e.target.value)}
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
