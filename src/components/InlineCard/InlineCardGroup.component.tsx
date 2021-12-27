import React from 'react';
import styled from 'styled-components';

export interface InlineCardGroupProps {
  children: React.ReactNode;
  wrap?: boolean;
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

const WrappedInlineGroup = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > * {
    margin-bottom: 4px;
    margin-top: 4px;
    margin-right: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const InlineCardGroup = ({ children, wrap }: InlineCardGroupProps) => {
  if (wrap) {
    return <WrappedInlineGroup>{children}</WrappedInlineGroup>;
  }

  return <InlineGroup>{children}</InlineGroup>;
};

export default InlineCardGroup;
