import React from 'react';
import ActionMenu from '../ActionMenu/ActionMenu.component';
import { IActionMenuItem } from '../ActionMenu/_ActionMenu.types';

export interface TableActionMenuProps {
  'items': IActionMenuItem[];
  'data-cy'?: string;
}

const TableActionMenu = ({ items, 'data-cy': dataCy }: TableActionMenuProps) => {
  return <ActionMenu variant='tertiary' items={items} data-cy={dataCy}></ActionMenu>;
};

export default TableActionMenu;
