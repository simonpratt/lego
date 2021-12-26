import React from 'react';
import styled from 'styled-components';
import responsive from '../../responsive/responsive';

const MenuContentOuter = styled.div`
  display: flex;

  background-color: ${(props) => props.theme.colours.cardBackground};
  margin-left: 250px;

  min-height: 100vh;
  padding: 8px;

  ${responsive.useStylesFor('tablet').andSmaller(`
    flex-direction: column;
  `)}
`;

export interface MenuContentProps {
  children: React.ReactNode;
}

const MenuContent = ({ children }: MenuContentProps) => {
  return <MenuContentOuter>{children}</MenuContentOuter>;
};

export default MenuContent;
