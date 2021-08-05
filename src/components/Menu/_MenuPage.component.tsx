import React, { useContext } from 'react';
import styled from 'styled-components';

import responsive from '../../responsive/responsive';
import { getMaxSize, PanelSize } from './_MenuContent.component';
import MenuContentContext from './_MenuContent.context';

interface MenuPageInnerProps {
  panelSize: PanelSize;
}

const MenuPageInner = styled.div<MenuPageInnerProps>`
  background-color: ${(props) => props.theme.colours.background};
  border-radius: 2px;
  min-height: calc(100vh - 16px);
  flex-grow: 1;

  ${(props) =>
    responsive.useStylesFor(getMaxSize(props.panelSize)).andSmaller(`
    min-height: unset;
  `)}
`;

export interface MenuPageProps {
  children: React.ReactNode;
}
const MenuPage = ({ children }: MenuPageProps) => {
  const { panelSize } = useContext(MenuContentContext);

  return <MenuPageInner panelSize={panelSize}>{children}</MenuPageInner>;
};

export default MenuPage;
