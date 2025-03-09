// libs
import React, { Key, useState } from 'react';
import { Table as TableHero, TableHeader, TableColumn, TableBody } from '@heroui/table';
import { Pagination } from '@heroui/pagination';

// types
import { TablesProps } from './type';
import { Input, TableCell, TableRow } from '@heroui/react';

import styles from './table.module.scss';
import Button from '../Button/Button';
import { HeroSearchIcon } from '@/components/assets/icons/hero';

const Table = <TData extends object>({
  pagination,
  columns,
  dataSource,
  maxTableHeight,
  paginationPage = 1,
  paginationTotal = 0,
  serach,
  ...props
}: TablesProps<TData>) => {
  const [onSearch, setOnsearch] = useState('')
  return (
    <div id="table" aria-description="" className="w-full flex flex-col gap-3">
      {serach && (
        <div className="inline-flex max-w-[360px] gap-3">
          <Input size="sm" variant="bordered" label="Search..." onChange={(e) => setOnsearch(e.target.value)} />
          <Button
            className="min-w-[50px]"
            color="primary"
            aria-label="button search"
            onPress={() => props.onPressSearchButton?.(onSearch)}
          >
            <HeroSearchIcon width={18} />
          </Button>
        </div>
      )}

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
        <TableBody emptyContent={'No rows to display.'} items={dataSource}>
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
          <Pagination
            isCompact
            showControls
            initialPage={1}
            page={paginationPage}
            total={paginationTotal}
            onChange={props.onChangePage}
          />
        </div>
      )}
    </div>
  );
};

export default Table;
