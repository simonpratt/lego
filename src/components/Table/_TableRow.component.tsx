import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import TableContext, { TableVariant } from './_Table.context';

interface StyledRowProps {
  variant: TableVariant;
}

const StyledRow = styled.tr<StyledRowProps>`
  box-shadow: 0px 1px 0px 0px
    ${(props) => (props.variant === 'regular' ? props.theme.colours.defaultBorder : props.theme.colours.faintBorder)};

  &:last-child {
    box-shadow: none;
  }
`;

export interface TableRowProps {
  'children': React.ReactNode;
  'data-cy'?: string;
}

const TableRow = ({ children, 'data-cy': dataCy }: TableRowProps) => {
  const { variant } = useContext(TableContext);

  return (
    <StyledRow variant={variant} data-cy={dataCy}>
      {children}
    </StyledRow>
  );
};

export default TableRow;
