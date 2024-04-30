import React from 'react';
import styled from 'styled-components';

interface FloatingActionProps {
  children: React.ReactNode;
  threshold?: number;
}

const FloatingActionContainer = styled.div`
  position: sticky;
  bottom: 0;
  background-color: ${(props) => props.theme.colours.background};
`;

const FloatingAction = ({ children }: FloatingActionProps) => {
  return <FloatingActionContainer>{children}</FloatingActionContainer>;
};

export default FloatingAction;
