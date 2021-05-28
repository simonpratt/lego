import React from 'react';
import styled from 'styled-components';

import Text from '../../components/Text/Text.component';
import responsive from '../../responsive/responsive';

export interface ActionLayoutProps {
  children: React.ReactNode;
}

export interface ActionLayoutTextProps {
  children: React.ReactNode;
}

const ActionLayoutContainer = styled.div`
  padding: 32px 16px;

  ${responsive.useStylesFor('tablet').andLarger`
    display: flex;
    justify-content: center;
  `}
`;

const ActionLayoutTextContainer = styled.div`
  ${responsive.useStylesFor('tablet').andLarger`
    margin-right: 128px;
  `}
`;

const ActionLayoutContent = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ActionLayoutText = (props: ActionLayoutTextProps) => (
  <ActionLayoutTextContainer>
    <Text>{props.children}</Text>
  </ActionLayoutTextContainer>
);

const ActionLayout = (props: ActionLayoutProps) => (
  <ActionLayoutContainer>
    <div>{props.children}</div>
  </ActionLayoutContainer>
);

ActionLayout.Text = ActionLayoutText;
ActionLayout.Content = ActionLayoutContent;

export default ActionLayout;
