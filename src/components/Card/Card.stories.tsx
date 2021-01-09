import React from 'react';
import styled from 'styled-components';
import { Meta } from '@storybook/react/types-6-0';
import { Card, CardGroup, LiveInput } from '../..';

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Standard = () => (
  <CardGroup>
    <Card size='sm'>
      <Card.Content>Some content</Card.Content>
      <Card.Spacer />
      <Card.Content>Some more content...</Card.Content>
    </Card>
    <Card size='sm'>
      <Card.Media>
        <Image src='https://www.jotform.com/blog/wp-content/uploads/2012/07/mario-luigi-yoschi-figures-163036.jpeg' />
      </Card.Media>

      <Card.Content>
        <LiveInput name='test' placeholder='Name of characters' />
      </Card.Content>
    </Card>
  </CardGroup>
);

export const Sizes = () => (
  <CardGroup>
    <Card size='sm'>
      <Card.Media>
        <Image src='https://www.jotform.com/blog/wp-content/uploads/2012/07/mario-luigi-yoschi-figures-163036.jpeg' />
      </Card.Media>
      <Card.Content>A small card!</Card.Content>
    </Card>
    <Card size='md'>
      <Card.Media>
        <Image src='https://www.jotform.com/blog/wp-content/uploads/2012/07/mario-luigi-yoschi-figures-163036.jpeg' />
      </Card.Media>
      <Card.Content>A medium card..</Card.Content>
    </Card>
    <Card size='lg'>
      <Card.Media>
        <Image src='https://www.jotform.com/blog/wp-content/uploads/2012/07/mario-luigi-yoschi-figures-163036.jpeg' />
      </Card.Media>
      <Card.Content>A large card.</Card.Content>
    </Card>
  </CardGroup>
);

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;
