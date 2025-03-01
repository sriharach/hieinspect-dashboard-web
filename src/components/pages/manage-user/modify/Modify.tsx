'use client';

// libs
import React from 'react';
import { Input, Select, SelectItem } from '@heroui/react';

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

  const roles = [
    {
      id: '1',
      name: 'Super Admin',
    },
    {
      id: '2',
      name: 'Member',
    },
  ];

  return (
    <Layout>
      <form className={styles['modify-content']}>
        <Select label="Select a roles">
          {roles.map((role) => (
            <SelectItem color="primary" key={role.id}>
              {role.name}
            </SelectItem>
          ))}
        </Select>
        <Input label="Username / Email" />
        <Input type="password" label="Password" />
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
