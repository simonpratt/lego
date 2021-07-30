import React from 'react';
import styled from 'styled-components';
import responsive from '../../responsive/responsive';
import MenuContentContext from './_MenuContent.context';

export type PanelSize = 'sm' | 'md';

export const getMaxSize = (size: PanelSize) => {
  switch (size) {
    case 'sm':
      return 'tablet';
    case 'md':
    default:
      return 'desktop';
  }
};

interface MenuContentOuterProps {
  panelSize: PanelSize;
}

const MenuContentOuter = styled.div<MenuContentOuterProps>`
  display: flex;

  background-color: ${(props) => props.theme.colours.cardBackground};
  margin-left: 250px;

  min-height: 100vh;
  padding: 8px;

  ${(props) =>
    responsive.useStylesFor(getMaxSize(props.panelSize)).andSmaller(`
    flex-direction: column;
  `)}
`;

export interface MenuContentProps {
  children: React.ReactNode;
  panelSize?: PanelSize;
}

const MenuContent = ({ panelSize, children }: MenuContentProps) => {
  return (
    <MenuContentContext.Provider value={{ panelSize: panelSize || 'md' }}>
      <MenuContentOuter panelSize={panelSize || 'md'}>{children}</MenuContentOuter>
    </MenuContentContext.Provider>
  );
};

export default MenuContent;
