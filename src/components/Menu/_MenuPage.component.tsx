import React from 'react';
import styled from 'styled-components';

import responsive from '../../responsive/responsive';

interface MenuPageInnerProps {
  scrollable?: boolean;
}

const MenuPageInner = styled.div<MenuPageInnerProps>`
  background-color: ${(props) => props.theme.colours.background};
  border-radius: 2px;
  min-height: calc(100vh - 16px);
  flex-grow: 1;

  ${responsive.useStylesFor('tablet').andSmaller(`
    min-height: unset;
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

export interface MenuPageProps {
  children: React.ReactNode;
  scrollable?: boolean;
}

const MenuPage = ({ children, scrollable }: MenuPageProps) => {
  return <MenuPageInner scrollable={scrollable}>{children}</MenuPageInner>;
};

export default MenuPage;
