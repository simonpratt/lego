import React from 'react';
import Button from '../Button/Button.component';

export interface TableActionProps {
  text: string;
}

const TableAction = ({ text }: TableActionProps) => {
  return <Button variant='tertiary'>{text}</Button>;
};

export default TableAction;
