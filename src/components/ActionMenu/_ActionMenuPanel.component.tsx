import React from 'react';
import styled from 'styled-components';

const ActionMenuPanelOuter = styled.div`
  background-color: ${(props) => props.theme.colours.tertiary.main};
  min-width: 160px;
`;

export interface ActionMenuPanelProps {
  children: React.ReactNode;
}

const ActionMenuPanel = ({ children }: ActionMenuPanelProps) => (
  <ActionMenuPanelOuter data-cy='action-menu-popover'>{children}</ActionMenuPanelOuter>
);

export default ActionMenuPanel;
