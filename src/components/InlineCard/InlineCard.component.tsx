import React from 'react';
import styled from 'styled-components';
import InlineCardContent from './_InlineCardContent.component';
import InlineCardMedia from './_InlineCardMedia.component';

const CardOuter = styled.div`
  height: 64px;
  width: 100%;
  display: flex;

  background-color: ${(props) => props.theme.colours.cardBackground};
  box-shadow: ${(props) => props.theme.shadows.small};
`;

export interface InlineCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const InlineCard = ({ children }: InlineCardProps) => {
  return <CardOuter>{children}</CardOuter>;
};

InlineCard.Media = InlineCardMedia;
InlineCard.Content = InlineCardContent;

export default InlineCard;
