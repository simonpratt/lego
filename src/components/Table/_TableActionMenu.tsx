import React from 'react';
import ActionMenu from '../ActionMenu/ActionMenu.component';
import { IActionMenuItem } from '../ActionMenu/_ActionMenu.types';

export interface TableActionMenuProps {
  'items': IActionMenuItem[];
  'data-testid'?: string;
}

const TableActionMenu = ({ items, 'data-testid': dataTestId }: TableActionMenuProps) => {
  return (
    <ActionMenu variant='tertiary' data-testid={dataTestId}>
      {items.map((item) => (
        <ActionMenu.Item key={item.label} onClick={item.onClick}>
          {item.label}
        </ActionMenu.Item>
      ))}
    </ActionMenu>
  );
};

export default TableActionMenu;
