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
  const { errors, control, Controller, handleCancelModify, handleSubmitForm } = useModifyHouseCategories();
  return (
    <Layout>
      <form className={styles['modify-content']} onSubmit={handleSubmitForm}>
        <Controller
          control={control}
          name="name"
          rules={{ required: { value: true, message: 'Request!' } }}
          render={({ field }) => {
            return (
              <Input
                {...field}
                errorMessage={errors.name?.message}
                isInvalid={!!errors.name?.message}
                label="Category"
              />
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
