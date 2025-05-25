'use client';

// libs
import React from 'react';
import { Input } from '@heroui/react';

// components
import Layout from '@/components/modules/layouts/Layout';
import Button from '@/components/nextui/Button/Button';

import styles from './modify.module.scss';
import useModityRealty from '../controllers/useModityRealty';

const Modify = () => {
  const { handleCancelModify, isLoading, handleSubmitForm, errors, control, Controller } = useModityRealty();

  return (
    <Layout>
      <form className={styles['modify-content']} onSubmit={handleSubmitForm}>
        <Controller
          control={control}
          name="name"
          rules={{ required: { value: true, message: 'Request!' } }}
          render={({ field }) => {
            return (
              <Input {...field} label="Realty" errorMessage={errors.name?.message} isInvalid={!!errors.name?.message} />
            );
          }}
        />

        <div className={styles['modify-content-button']}>
          <Button fullWidth color="primary" isLoading={isLoading} type='submit'>
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
