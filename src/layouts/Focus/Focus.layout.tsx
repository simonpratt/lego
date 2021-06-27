import React from 'react';
import styled from 'styled-components';
import responsive from '../../responsive/responsive';

export interface FocusLayoutProps {
  children: React.ReactNode;
}

const FocusOuter = styled.div`
  width: 100%;

  background-color: ${(props) => props.theme.colours.background};
  padding: 32px 16px;

  display: flex;
  justify-content: center;

  ${responsive.useStylesFor('mobile').andSmaller(`
    padding-top: 64px;
  `)};
`;

const FocusInner = styled.div`
  width: ${responsive.getWidthFor('mobile')};

  ${responsive.useStylesFor('mobile').andSmaller(`
    width: 100%;
  `)};
`;

const FocusLayout = ({ children }: FocusLayoutProps) => {
  return (
    <FocusOuter>
      <FocusInner>{children}</FocusInner>
    </FocusOuter>
  );
};

export default FocusLayout;
