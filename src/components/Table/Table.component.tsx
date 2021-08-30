import React from 'react';
import styled from 'styled-components';

import TableContext, { TableVariant } from './_Table.context';
import TableRow from './_TableRow.component';

export type TableCellVariant = 'tight';

export interface TableProps {
  children: React.ReactNode;
  variant?: TableVariant;
}

export interface TableCellProps {
  variant?: TableCellVariant;
}

const StyledTable = styled.table`
  width: 100%;
`;

const TableCell = styled.td<TableCellProps>`
  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
  font-weight: ${(props) => props.theme.fonts.default.weight};

  color: ${(props) => props.theme.colours.defaultFont};

  padding: ${(props) => (props.variant === 'tight' ? '0' : '0 16px')};
  height: 36px;
`;

const Table = ({ children, variant = 'regular' }: TableProps) => {
  return (
    <TableContext.Provider value={{ variant }}>
      <StyledTable>{children}</StyledTable>
    </TableContext.Provider>
  );
};

Table.Row = TableRow;
Table.Cell = TableCell;

export default Table;
