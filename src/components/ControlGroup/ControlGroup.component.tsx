import React from 'react';
import styled from 'styled-components';

export interface ControlGroupProps {
  children: React.ReactChildren;
  stacked: boolean;
}

const ControlGroupContainer = styled.div<Pick<ControlGroupProps, 'stacked'>>`
  & > * {
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ControlGroup = ({ children, stacked }: ControlGroupProps) => {
  return <ControlGroupContainer stacked={stacked}>{children}</ControlGroupContainer>;
};

export default ControlGroup;
