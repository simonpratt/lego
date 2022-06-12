import React from 'react';
import styled from 'styled-components';

import { IActionMenuItem } from './_ActionMenu.types';
import ActionMenuItem from './_ActionMenuItem.component';

const ActionMenuPanelOuter = styled.div`
  background-color: ${(props) => props.theme.colours.tertiary.main};
  min-width: 160px;
`;

export interface ActionMenuPanelProps {
  items: IActionMenuItem[];
}

const ActionMenuPanel = ({ items }: ActionMenuPanelProps) => (
  <ActionMenuPanelOuter data-cy='action-menu-popover'>
    {items.map((item) => (
      <ActionMenuItem key={item.label} label={item.label} onClick={item.onClick} />
    ))}
  </ActionMenuPanelOuter>
);

export default ActionMenuPanel;
