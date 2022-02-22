import React from 'react';
import styled from 'styled-components';
import responsive from '../../responsive/responsive';

export interface WidthLimitLayoutProps {
  children: React.ReactNode;
  max?: 'mobile' | 'tablet' | 'desktop';
}

const WidthLimitOuter = styled.div`
  width: 100%;

  background-color: ${(props) => props.theme.colours.background};
  padding: 16px;

  display: flex;
  justify-content: center;
`;

interface WidthLimitInnerProps {
  max: 'mobile' | 'tablet' | 'desktop';
}

const WidthLimitInner = styled.div<WidthLimitInnerProps>`
  width: ${(props) => responsive.getWidthFor(props.max)};

  ${(props) =>
    responsive.useStylesFor(props.max).andSmaller(`
    width: 100%;
  `)};
`;

const WidthLimitLayout = ({ children, max = 'tablet' }: WidthLimitLayoutProps) => {
  return (
    <WidthLimitOuter>
      <WidthLimitInner max={max}>{children}</WidthLimitInner>
    </WidthLimitOuter>
  );
};

export default WidthLimitLayout;
