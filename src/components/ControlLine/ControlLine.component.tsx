import React from 'react';
import styled from 'styled-components';

const ActionContainer = styled.div`
  display: flex;
  width: 100%;

  > :first-child {
    flex-grow: 1;
    padding-right: 3px;
  }
`;

const SpacedContainer = styled.div`
  display: flex;

  > * {
    flex-grow: 1;
    padding-right: 3px;
  }

  > *:last-child {
    padding-right: 0;
  }
`;

export interface ControlLineProps {
  children: React.ReactNode;
  variant?: 'action' | 'spaced';
}

const ControlLine = ({ children, variant = 'action' }: ControlLineProps) => {
  if (variant === 'action') {
    return <ActionContainer>{children}</ActionContainer>;
  }

  if (variant === 'spaced') {
    return <SpacedContainer>{children}</SpacedContainer>;
  }

  return null;
};

export default ControlLine;
