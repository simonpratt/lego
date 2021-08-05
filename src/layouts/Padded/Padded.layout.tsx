import React from 'react';
import styled from 'styled-components';

const SmallPaddedLayout = styled.div`
  padding: 8px;
`;

const PaddedLayoutDiv = styled.div`
  padding: 16px;
`;

interface PaddedLayoutProps {
  children: React.ReactNode;
}

const PaddedLayout = ({ children }: PaddedLayoutProps) => <PaddedLayoutDiv>{children}</PaddedLayoutDiv>;

PaddedLayout.Small = SmallPaddedLayout;

export default PaddedLayout;
