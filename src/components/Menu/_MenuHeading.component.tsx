import React from 'react';
import styled from 'styled-components';

const MenuHeadingDiv = styled.div`
  padding-right: 32px;
  margin-bottom: 16px;

  width: 100%;
  text-align: center;
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

export interface MenuHeadingProps {
  children: React.ReactNode;
}

const MenuHeading = ({ children }: MenuHeadingProps) => (
  <MenuHeadingDiv>
    <MenuHeadingInner>{children}</MenuHeadingInner>
  </MenuHeadingDiv>
);

export default MenuHeading;
