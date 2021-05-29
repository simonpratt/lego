import React from 'react';
import styled from 'styled-components';

export type TableCellVariant = 'tight';

export interface TableProps {
  children: React.ReactNode;
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

const TableRow = styled.tr`
  box-shadow: 0px 1px 0px 0px ${(props) => props.theme.colours.defaultBorder};

  &:last-child {
    box-shadow: none;
  }
`;

const Table = ({ children }: TableProps) => {
  return <StyledTable>{children}</StyledTable>;
};

Table.Row = TableRow;
Table.Cell = TableCell;

export default Table;
