import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import responsive from '../../responsive/responsive';

const MenuHeadingDiv = styled.div`
  padding-right: 32px;
  margin-bottom: 16px;

  width: 100%;
  text-align: center;
  max-width: 450px;
`;

const MenuHeadingInner = styled.div`
  background-color: ${(props) => props.theme.colours.primary.main};
  box-shadow: ${(props) => props.theme.shadows.medium};
  border-radius: 0 2px 2px 0;
  height: 40px;

  display: flex;
  align-items: center;
  padding-left: 8px;

  font-family: ${(props) => props.theme.fonts.heading.family};
  font-weight: ${(props) => props.theme.fonts.heading.weight};
  color: ${(props) => props.theme.colours.primary.contrastText};
  font-size: 20px;
`;

const MenuToggle = styled.div`
  margin-right: 16px;
  cursor: pointer;
  color: ${(props) => props.theme.colours.primary.contrastText};
  fill: ${(props) => props.theme.colours.primary.contrastText};

  ${responsive.useStylesFor('desktop').andLarger(`
    display: none;
    `)}
`;

export interface MenuHeadingProps {
  children: React.ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
  isOpen?: boolean;
}

const MenuHeading = ({ children, onOpen, onClose, isOpen }: MenuHeadingProps) => (
  <MenuHeadingDiv>
    <MenuHeadingInner>
      {isOpen ? (
        <MenuToggle onClick={onClose}>
          <FontAwesomeIcon icon={faBars} />
        </MenuToggle>
      ) : (
        <MenuToggle onClick={onOpen}>
          <FontAwesomeIcon icon={faBars} />
        </MenuToggle>
      )}
      {children}
    </MenuHeadingInner>
  </MenuHeadingDiv>
);

export default MenuHeading;
