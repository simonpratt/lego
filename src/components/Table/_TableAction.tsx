import React from 'react';
import Button from '../Button/Button.component';

export interface TableActionProps {
  text: string;
  onClick: () => void;
}

const TableAction = ({ text, onClick }: TableActionProps) => {
  return (
    <Button variant='tertiary' onClick={onClick}>
      {text}
    </Button>
  );
};

export default TableAction;
