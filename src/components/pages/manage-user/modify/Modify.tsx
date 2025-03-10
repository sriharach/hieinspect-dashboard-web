'use client';

// libs
import React from 'react';
import { Input, Select, SelectItem } from '@heroui/react';

// components
import Layout from '@/components/modules/layouts/Layout';
import Button from '@/components/nextui/Button/Button';

import styles from './modify.module.scss';
import useModifyUser from '../controllers/useModifyUser';

const Modify = () => {
  const {
    handleCancelModify,
    handleSubmitForm,
    roles,
    register,
    errors,
    Controller,
    control,
    isLoading,
  } = useModifyUser();

  return (
    <Layout>
      <form className={styles['modify-content']} onSubmit={handleSubmitForm}>
        <Controller
          rules={{
            required: {
              value: true,
              message: 'Request!',
            },
          }}
          control={control}
          name="role_id"
          render={({ field }) => {
            return (
              <Select
                {...field}
                label="Select a roles"
                errorMessage={errors.role_id?.message}
                isInvalid={!!errors.role_id?.message}
              >
                {roles.map((role) => (
                  <SelectItem color="primary" key={role.id}>
                    {role.name}
                  </SelectItem>
                ))}
              </Select>
            );
          }}
        />
        <Input
          {...register('user_name', {
            required: { value: true, message: 'Request!' },
          })}
          errorMessage={errors.user_name?.message}
          isInvalid={!!errors.user_name?.message}
          label="Username / Email"
        />
        <Input
          {...register('password', {
            required: { value: true, message: 'Request!' },
          })}
          errorMessage={errors.password?.message}
          isInvalid={!!errors.password?.message}
          type="password"
          label="Password"
        />
        <div className={styles['modify-content-button']}>
          <Button fullWidth color="primary" type="submit" isLoading={isLoading}>
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
