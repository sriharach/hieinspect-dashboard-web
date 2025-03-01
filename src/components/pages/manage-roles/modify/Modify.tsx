'use client';

// libs
import React from 'react';
import { Input } from '@heroui/react';

// components
import Layout from '@/components/modules/layouts/Layout';
import Button from '@/components/nextui/Button/Button';

import styles from './modify.module.scss';
import { useRouter } from 'next/navigation';

const Modify = () => {
  const router = useRouter();

  const handleCancelModify = () => {
    router.back();
  };

  return (
    <Layout>
      <form className={styles['modify-content']}>
        <Input label="Role" />
        <div className={styles['modify-content-button']}>
          <Button fullWidth color="primary" type="submit">
            Submit
          </Button>
          <Button fullWidth color="primary" variant="ghost" onPress={handleCancelModify}>
            Cancel
          </Button>
        </div>
      </form>
    </Layout>
  );
};

export default Modify;
