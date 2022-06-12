import React from 'react';
import Button from '../Button/Button.component';

export interface TableActionProps {
  'text': string;
  'onClick': () => void;
  'data-cy'?: string;
}

const TableAction = ({ text, onClick, 'data-cy': dataCy }: TableActionProps) => {
  return (
    <Button variant='tertiary' onClick={onClick} data-cy={dataCy || 'button-table-action'}>
      {text}
    </Button>
  );
};

export default TableAction;
