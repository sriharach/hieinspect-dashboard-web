export interface ColumnType<T extends object = object> {
  key?: keyof T;
  title?: T[keyof T];
  render?: (data: T) => React.ReactNode;
}

export interface TablesProps<TData extends object> {
  pagination?: boolean;
  dataSource: TData[];
  columns: ColumnsType<TData>;
}

export type ColumnsType<T extends object = object> = ColumnType<T>[];
