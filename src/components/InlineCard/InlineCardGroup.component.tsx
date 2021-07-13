import React from 'react';
import styled from 'styled-components';

export interface InlineCardGroupProps {
  children: React.ReactNode;
}

const InlineGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const InlineCardGroup = ({ children }: InlineCardGroupProps) => <InlineGroup>{children}</InlineGroup>;

export default InlineCardGroup;
