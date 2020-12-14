import React from 'react';
import styled from 'styled-components';
import responsive from '../../responsive/responsive';

export interface EmphasisLayoutProps {
  children: React.ReactNode;
}

const EmphasisOuter = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colours.overlayBackground};
`;

const EmphasisInner = styled.div`
  background-color: ${(props) => props.theme.colours.background};

  width: 600px;
  padding: 48px;

  ${responsive.useStylesFor('mobile').andSmaller(`
    width: 100%;
    height: 100%;
    padding: 16px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 128px;
  `)};
`;

const EmphasisLayout = ({ children }: EmphasisLayoutProps) => {
  return (
    <EmphasisOuter>
      <EmphasisInner>{children}</EmphasisInner>
    </EmphasisOuter>
  );
};

export default EmphasisLayout;
