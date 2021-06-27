import React from 'react';
import styled from 'styled-components';

const MenuPageOuter = styled.div`
  background-color: ${(props) => props.theme.colours.menuBackground};
  margin-left: 250px;

  min-height: 100vh;
  padding: 8px;
`;

const MenuPageInner = styled.div`
  background-color: ${(props) => props.theme.colours.background};
  box-shadow: ${(props) => props.theme.shadows.medium};
  border-radius: 2px;
  min-height: calc(100vh - 16px);
`;

export interface MenuPageProps {
  children: React.ReactNode;
}

const MenuPage = ({ children }: MenuPageProps) => (
  <MenuPageOuter>
    <MenuPageInner>{children}</MenuPageInner>
  </MenuPageOuter>
);

export default MenuPage;
