import React from 'react';
import styled from 'styled-components';

import responsive from '../../responsive/responsive';

export type PanelSize = 'sm' | 'md';

interface MenuPanelDivProps {
  panelSize: PanelSize;
  scrollable?: boolean;
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

  ${responsive.useStylesFor('tablet').andSmaller(`
    max-width: unset;
    min-width: unset;
    min-height: unset;
    width: 100%;
    margin-right: 0;
    margin-bottom: 8px;
  `)}

${(props) =>
    responsive.useStylesFor('desktop').andLarger(
      props.scrollable
        ? `
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
        `
        : ``,
    )}
`;

export interface MenuPanelProps {
  children: React.ReactNode;
  scrollable?: boolean;
  panelSize: PanelSize;
}

const MenuPanel = ({ children, scrollable, panelSize = 'sm' }: MenuPanelProps) => {
  return (
    <MenuPanelDiv panelSize={panelSize} scrollable={scrollable} data-cy='menu-panel'>
      {children}
    </MenuPanelDiv>
  );
};

export default MenuPanel;
