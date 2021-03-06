import React from 'react';
import styled from 'styled-components';
import MenuContent from './_MenuContent.component';
import MenuHeading from './_MenuHeading.component';
import MenuItem from './_MenuItem.component';
import MenuPage from './_MenuPage.component';
import MenuPanel from './_MenuPanel.component';

const MenuOuter = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  height: 100vh;
  width: 250px;
  background-color: ${(props) => props.theme.colours.cardBackground};
  padding: 8px 0;
`;

export interface MenuProps {
  children: React.ReactNode;
}

const Menu = ({ children }: MenuProps) => {
  return <MenuOuter>{children}</MenuOuter>;
};

Menu.Page = MenuPage;
Menu.Heading = MenuHeading;
Menu.Item = MenuItem;
Menu.Content = MenuContent;
Menu.Panel = MenuPanel;

export default Menu;
