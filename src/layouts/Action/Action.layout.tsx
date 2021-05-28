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

export interface ActionLayoutContentProps {
  children: React.ReactNode;
  left?: boolean;
}

const ActionLayoutContainer = styled.div`
  padding: 32px 16px;

  ${responsive.useStylesFor('tablet').andLarger`
    display: flex;
    justify-content: center;
  `}
`;

const ActionLayoutInner = styled.div`
  ${responsive.useStylesFor('tablet').andLarger`
    width: 100%;
    max-width: 600px;
  `}
`;

const ActionLayoutTextContainer = styled.div`
  ${responsive.useStylesFor('tablet').andLarger`
    margin-right: 128px;
  `}
`;

const ActionLayoutContentOuter = styled.div<ActionLayoutContentProps>`
  margin-top: 32px;

  ${(props) =>
    props.left
      ? ''
      : `
    display: flex;
    align-items: center;
    flex-direction: column;
  `}
`;

const ActionLayoutText = (props: ActionLayoutTextProps) => (
  <ActionLayoutTextContainer>
    <Text>{props.children}</Text>
  </ActionLayoutTextContainer>
);

const ActionLayoutContent = (props: ActionLayoutContentProps) => {
  const { left, children } = props;

  return <ActionLayoutContentOuter left={left}>{children}</ActionLayoutContentOuter>;
};

const ActionLayout = (props: ActionLayoutProps) => (
  <ActionLayoutContainer>
    <ActionLayoutInner>{props.children}</ActionLayoutInner>
  </ActionLayoutContainer>
);

ActionLayout.Text = ActionLayoutText;
ActionLayout.Content = ActionLayoutContent;

export default ActionLayout;
