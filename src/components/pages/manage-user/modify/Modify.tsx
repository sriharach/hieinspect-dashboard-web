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
  const { handleCancelModify, handleSubmitForm, roles, errors, Controller, control, isLoading } = useModifyUser();

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
                selectedKeys={[field.value ?? 'all']}
                // defaultSelectedKeys={[field.value ?? 'all']}
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
        <Controller
          control={control}
          name="user_name"
          rules={{ required: { value: true, message: 'Request!' } }}
          render={({ field }) => {
            return (
              <Input
                {...field}
                errorMessage={errors.user_name?.message}
                isInvalid={!!errors.user_name?.message}
                label="Username / Email"
              />
            );
          }}
        />
        <Controller
          control={control}
          name="first_name"
          render={({ field }) => {
            return <Input {...field} type="text" label="Name" />;
          }}
        />
        <div className={styles['modify-content-button']}>
          <Button fullWidth color="primary" type="submit" isLoading={isLoading}>
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
