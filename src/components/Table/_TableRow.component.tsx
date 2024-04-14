import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import TableContext, { TableVariant } from './_Table.context';

interface StyledRowProps {
  variant: TableVariant;
  border: boolean;
}

const StyledRow = styled.tr<StyledRowProps>`
  ${(props) =>
    props.border &&
    `
      box-shadow: 0px 1px 0px 0px ${props.variant === 'regular' ? props.theme.colours.defaultBorder : props.theme.colours.faintBorder}
  `}

  &:last-child {
    box-shadow: none;
  }

  &:hover {
    background-color: ${(props) => props.theme.colours.cardBackground};
  }
`;

export interface TableRowProps {
  'children': React.ReactNode;
  'border'?: boolean;
  'data-testid'?: string;
}

const TableRow = ({ children, 'data-testid': dataTestId, border = false }: TableRowProps) => {
  const { variant } = useContext(TableContext);

  return (
    <StyledRow variant={variant} data-testid={dataTestId} border={border}>
      {children}
    </StyledRow>
  );
};

export default TableRow;
