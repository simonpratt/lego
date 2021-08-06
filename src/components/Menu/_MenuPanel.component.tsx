import React, { useContext } from 'react';
import styled from 'styled-components';

import responsive from '../../responsive/responsive';
import { getMaxSize, PanelSize } from './_MenuContent.component';
import MenuContentContext from './_MenuContent.context';

interface MenuPanelDivProps {
  panelSize: PanelSize;
}

const MenuPanelDiv = styled.div<MenuPanelDivProps>`
  background-color: ${(props) => props.theme.colours.background};
  border-radius: 2px;
  min-height: calc(100vh - 16px);
  margin-right: 8px;

  ${(props) => {
    switch (props.panelSize) {
      case 'sm':
        return `
          max-width: 550px;
          min-width: 240px;
        `;
      case 'md':
      default:
        return `
          max-width: 700px;
          min-width: 450px;
        `;
    }
  }}

  ${(props) =>
    responsive.useStylesFor(getMaxSize(props.panelSize)).andSmaller(`
    max-width: unset;
    min-width: unset;
    min-height: unset;
    width: 100%;
    margin-right: 0;
    margin-bottom: 8px;
  `)}
`;

export interface MenuPanelProps {
  children: React.ReactNode;
}

const MenuPanel = ({ children }: MenuPanelProps) => {
  const { panelSize } = useContext(MenuContentContext);

  return <MenuPanelDiv panelSize={panelSize}>{children}</MenuPanelDiv>;
};

export default MenuPanel;
