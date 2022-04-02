import React from 'react';
import styled from 'styled-components';

interface ButtonGroupDivProps {
  alignment: 'left' | 'right';
}

const ButtonGroupDiv = styled.div<ButtonGroupDivProps>`
  display: flex;
  justify-content: ${(props) => (props.alignment === 'left' ? 'flex-start' : 'flex-end')};

  & > * {
    margin-right: 8px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export interface ButtonGroupProps {
  alignment?: 'left' | 'right';
  children: React.ReactNode;
}

const ButtonGroup = ({ children, alignment = 'left' }: ButtonGroupProps) => {
  return <ButtonGroupDiv alignment={alignment}>{children}</ButtonGroupDiv>;
};

export default ButtonGroup;
