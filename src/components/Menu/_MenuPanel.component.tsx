import React, { useContext } from 'react';
import styled from 'styled-components';

import responsive from '../../responsive/responsive';
import { getMaxSize, PanelSize } from './_MenuContent.component';
import MenuContentContext from './_MenuContent.context';

interface MenuPanelDivProps {
  panelSize: PanelSize;
  independentScroll: boolean;
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
          // max-width: 550px;
          // min-width: 240px;
          width: 380px;
        `;
      case 'md':
      default:
        return `
          // max-width: 700px;
          // min-width: 450px;
          width: 560px;
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

export interface MenuPanelProps {
  children: React.ReactNode;
}

const MenuPanel = ({ children }: MenuPanelProps) => {
  const { panelSize, independentScroll } = useContext(MenuContentContext);

  return (
    <MenuPanelDiv panelSize={panelSize} independentScroll={independentScroll}>
      {children}
    </MenuPanelDiv>
  );
};

export default MenuPanel;
