import React from 'react';
import styled from 'styled-components';

const ButtonGroupDiv = styled.div`
  display: flex;

  & > * {
    margin-right: 8px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export interface ButtonGroupProps {
  children: React.ReactNode;
}

const ButtonGroup = ({ children }: ButtonGroupProps) => {
  return <ButtonGroupDiv>{children}</ButtonGroupDiv>;
};

export default ButtonGroup;
