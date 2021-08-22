import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export interface ContentHeaderActions {
  children: React.ReactNode;
  actions?: React.ReactNode;
}

const ContentHeader = ({ children, actions }: ContentHeaderActions) => {
  return (
    <HeaderContainer>
      <div>{children}</div>
      {actions && <ActionsContainer>{actions}</ActionsContainer>}
    </HeaderContainer>
  );
};

export default ContentHeader;
