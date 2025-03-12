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
  const { errors, handleCancelModify, handleSubmitForm, Controller, control } = useModifyRole();

  return (
    <Layout>
      <form className={styles['modify-content']} onSubmit={handleSubmitForm}>
        <Controller
          control={control}
          name="name"
          render={({ field }) => {
            return (
              <Input {...field} errorMessage={errors.name?.message} isInvalid={!!errors.name?.message} label="Role" />
            );
          }}
        />

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
