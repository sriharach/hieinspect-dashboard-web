import React from 'react';
import { Spinner } from '@heroui/spinner';
import styles from './loading.module.scss';

const Loading = () => {
  return (
    <div className={styles['loading-page']}>
      <div className={styles['loading-page-content']}>
        <Spinner size='lg' classNames={{ label: 'text-foreground mt-4' }} variant="dots" />
      </div>
    </div>
  );
};

export default Loading;
