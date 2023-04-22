import React from 'react';
import ActionMenu from '../ActionMenu/ActionMenu.component';
import { IActionMenuItem } from '../ActionMenu/_ActionMenu.types';

export interface TableActionMenuProps {
  'items': IActionMenuItem[];
  'data-cy'?: string;
}

const TableActionMenu = ({ items, 'data-cy': dataCy }: TableActionMenuProps) => {
  return (
    <ActionMenu variant='tertiary' data-cy={dataCy}>
      {items.map((item) => (
        <ActionMenu.Item key={item.label} onClick={item.onClick}>
          {item.label}
        </ActionMenu.Item>
      ))}
    </ActionMenu>
  );
};

export default TableActionMenu;
