import React, { useContext } from 'react';
import styled from 'styled-components';

import responsive from '../../responsive/responsive';
import { getMaxSize, PanelSize } from './_MenuContent.component';
import MenuContentContext from './_MenuContent.context';

interface MenuPageInnerProps {
  panelSize: PanelSize;
  independentScroll: boolean;
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

  ${(props) =>
    props.independentScroll &&
    `
    max-height: calc(100vh - 16px);
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${props.theme.colours.secondaryFont};
      outline: 1px solid slategrey;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
  `}
`;

export interface MenuPageProps {
  children: React.ReactNode;
}
const MenuPage = ({ children }: MenuPageProps) => {
  const { panelSize, independentScroll } = useContext(MenuContentContext);

  return (
    <MenuPageInner panelSize={panelSize} independentScroll={independentScroll}>
      {children}
    </MenuPageInner>
  );
};

export default MenuPage;
