import { createContext } from 'react';

export type TableVariant = 'regular' | 'soft';

export interface TableContextProps {
  variant: TableVariant;
}

const TableContext = createContext<TableContextProps>({
  variant: 'regular',
});

export default TableContext;
