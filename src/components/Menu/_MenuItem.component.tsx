import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const MenuItemOuter = styled.div`
  display: flex;
`;

interface MenuItemDivProps {
  active?: boolean;
}

const MenuItemDiv = styled.div<MenuItemDivProps>`
  margin: 2px;
  padding: 8px 8px 8px 16px;
  flex-grow: 1;

  font-family: ${(props) => props.theme.fonts.default.family};
  font-weight: ${(props) => props.theme.fonts.default.weight};
  font-size: ${(props) => props.theme.fonts.default.size};
  color: ${(props) => props.theme.colours.secondaryFont};

  cursor: pointer;
  border-radius: 0 2px 2px 0;

  &:hover {
    background-color: ${(props) => props.theme.colours.background};
  }

  ${(props) =>
    props.active &&
    `
    color: ${props.theme.colours.defaultFont};
  `}
`;

const MenuIconContainer = styled.div`
  display: inline-block;
  margin-right: 16px;
  width: 24px;
  text-align: center;
`;

const MenuActiveBar = styled.div`
  height: 38px;
  width: 4px;
  background-color: ${(props) => props.theme.colours.defaultFont};
`;

const MenuActivePlaceholder = styled.div`
  height: 100%;
  width: 4px;
`;

export interface MenuItemProps {
  children: React.ReactNode;
  icon?: IconProp;
  active?: boolean;
  onClick?: () => void;
}

const MenuItem = ({ children, icon, active, onClick }: MenuItemProps) => (
  <MenuItemOuter onClick={onClick}>
    {active ? <MenuActiveBar /> : <MenuActivePlaceholder />}
    <MenuItemDiv active={active}>
      {icon && (
        <MenuIconContainer>
          <FontAwesomeIcon icon={icon} />
        </MenuIconContainer>
      )}
      {children}
    </MenuItemDiv>
  </MenuItemOuter>
);

export default MenuItem;
