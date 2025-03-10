import { TableProps } from '@heroui/react';

export interface ColumnType<T extends object = object> {
  key?: keyof T;
  title?: T[keyof T];
  render?: (data: T) => React.ReactNode;
}

export interface TablesProps<TData extends object> extends TableProps {
  dataSource: TData[];
  columns: ColumnsType<TData>;
  serach?: boolean;
  pagination?: boolean;
  paginationTotal?: number;
  paginationPage?: number;
  isLoading?: boolean
  onChangePage?: (page: number) => void
  onPressSearchButton?: (search: string) => void
}

export type ColumnsType<T extends object = object> = ColumnType<T>[];
