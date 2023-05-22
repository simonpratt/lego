import React from 'react';
import styled from 'styled-components';
import ButtonContext from '../Button/Button.context';
import TableContext, { TableVariant } from './_Table.context';
import TableAction, { TableActionProps } from './_TableAction';
import TableActionContainer from './_TableActionContainer';
import TableActionMenu from './_TableActionMenu';
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

const TableHiddenActionSpan = styled.span`
  visibility: none;
  opacity: 0;
`;

const TableCell = styled.td<TableCellProps>`
  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
  font-weight: ${(props) => props.theme.fonts.default.weight};

  color: ${(props) => props.theme.colours.defaultFont};

  padding: ${(props) => (props.variant === 'tight' ? '0' : '0 16px')};
  height: 36px;

  &:hover {
    ${TableHiddenActionSpan} {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const TableHiddenAction = (props: TableActionProps) => (
  <TableHiddenActionSpan>
    <TableAction {...props} />
  </TableHiddenActionSpan>
);

const Table = ({ children, variant = 'regular' }: TableProps) => {
  return (
    <TableContext.Provider value={{ variant }}>
      <ButtonContext.Provider value={{ height: '24px' }}>
        <StyledTable>
          <tbody>{children}</tbody>
        </StyledTable>
      </ButtonContext.Provider>
    </TableContext.Provider>
  );
};

Table.Row = TableRow;
Table.Cell = TableCell;
Table.ActionContainer = TableActionContainer;
Table.Action = TableAction;
Table.ActionMenu = TableActionMenu;
Table.HiddenAction = TableHiddenAction;

export default Table;
