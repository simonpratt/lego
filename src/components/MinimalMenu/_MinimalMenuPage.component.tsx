import React from 'react';
import styled from 'styled-components';
import responsive from '../../responsive/responsive';

const MinimalMenuPageContainer = styled.div`
  ${responsive.useStylesFor('tablet').andLarger(`
    padding-left: 64px;
  `)}

  ${responsive.useStylesFor('mobile').andSmaller(`
    padding-bottom: 64px;
  `)}
`;

export interface MinimalMenuPageProps {
  children: React.ReactNode;
}

const MinimalMenuPage = ({ children }: MinimalMenuPageProps) => {
  return <MinimalMenuPageContainer>{children}</MinimalMenuPageContainer>;
};

export default MinimalMenuPage;
