import React from 'react';
import styled from 'styled-components';
import { Meta } from '@storybook/react/types-6-0';
import { InlineCard, InlineCardGroup } from '../..';

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Standard = () => (
  <InlineCardGroup>
    <InlineCard>
      <InlineCard.Content>Some content</InlineCard.Content>
    </InlineCard>
    <InlineCard>
      <InlineCard.Media>
        <Image src='https://www.jotform.com/blog/wp-content/uploads/2012/07/mario-luigi-yoschi-figures-163036.jpeg' />
      </InlineCard.Media>

      <InlineCard.Content>Some more content</InlineCard.Content>
    </InlineCard>
  </InlineCardGroup>
);

export default {
  title: 'Components/InlineCard',
  component: InlineCard,
} as Meta;
