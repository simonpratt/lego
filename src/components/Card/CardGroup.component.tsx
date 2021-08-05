import React from 'react';
import styled from 'styled-components';

export interface CardGroupProps {
  children: React.ReactNode;
}

const GroupSmall = styled.div`
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

const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const CardGroup = ({ children }: CardGroupProps) => <Group>{children}</Group>;

CardGroup.Small = GroupSmall;

export default CardGroup;
