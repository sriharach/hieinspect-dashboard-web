// libs
import React, { Key } from 'react';
import { Table as TableHero, TableHeader, TableColumn, TableBody } from '@heroui/table';
import { Pagination } from '@heroui/pagination';

// types
import { TablesProps } from './type';
import { TableCell, TableRow } from '@heroui/react';

import styles from './table.module.scss';

const Table = <TData extends object>({
  pagination,
  columns,
  dataSource,
  maxTableHeight,
  ...props
}: TablesProps<TData>) => {
  return (
    <>
      <TableHero
        radius="none"
        shadow="none"
        aria-label="static collection table"
        color="primary"
        maxTableHeight={maxTableHeight || 500}
        rowHeight={70}
        isVirtualized
        classNames={{
          th: 'bg-main-color text-white',
          tr: 'hover:bg-default-100',
        }}
        {...props}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key ? (column.key as never) : 'action'}>
              {column.title as React.ReactNode}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={<>123</>} items={dataSource}>
          {(item: { [key: string]: any }) => {
            return (
              <TableRow key={item.id}>
                {columns.map((column) => {
                  return (
                    <TableCell key={`item-${column.key as Key}`}>
                      {(column.render && column.render(item as never)) || item[column.key as never]}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          }}
        </TableBody>
      </TableHero>

      {pagination && (
        <div className={styles['table-paginage']}>
          <Pagination isCompact showControls initialPage={1} total={10} />
        </div>
      )}
    </>
  );
};

export default Table;
