import React from 'react';
import styled from 'styled-components';
import InlineCardContent from './_InlineCardContent.component';
import InlineCardMedia from './_InlineCardMedia.component';

interface CardOuterProps {
  usePointer: boolean;
}

const CardOuter = styled.div<CardOuterProps>`
  height: 64px;
  width: 100%;
  display: flex;

  cursor: ${(props) => (props.usePointer ? 'pointer' : '')};

  background-color: ${(props) => props.theme.colours.cardBackground};
  box-shadow: ${(props) => props.theme.shadows.small};
`;

export interface InlineCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const InlineCard = ({ children, onClick }: InlineCardProps) => {
  return (
    <CardOuter usePointer={!!onClick} onClick={onClick}>
      {children}
    </CardOuter>
  );
};

InlineCard.Media = InlineCardMedia;
InlineCard.Content = InlineCardContent;

export default InlineCard;
