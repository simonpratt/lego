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
    margin-left: 0;
  `)}
`;

const TopFiller = styled.div`
  height: 64px;
  background-color: ${(props) => props.theme.colours.cardBackground};

  ${responsive.useStylesFor('desktop').andLarger(`
    display: none;
  `)}
`;

export interface MenuContentProps {
  children: React.ReactNode;
}

const MenuContent = ({ children }: MenuContentProps) => {
  return (
    <MenuContentOuter>
      <TopFiller></TopFiller>
      {children}
    </MenuContentOuter>
  );
};

export default MenuContent;
