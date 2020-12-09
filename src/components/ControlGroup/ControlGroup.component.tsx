import React from 'react';
import styled from 'styled-components';

export interface ControlGroupProps {
  children: React.ReactNode;
}

const ControlGroupContainer = styled.div`
  & > * {
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ControlGroup = ({ children }: ControlGroupProps) => {
  return <ControlGroupContainer>{children}</ControlGroupContainer>;
};

export default ControlGroup;
