import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Card, CardGroup, LiveInput } from '../..';

export const Standard = () => (
  <CardGroup>
    <Card size='sm'>
      <Card.Content>Some content</Card.Content>
      <Card.Spacer />
      <Card.Content>Some more content...</Card.Content>
      <Card.Spacer />
      <Card.SubContent>Some sub content...</Card.SubContent>
    </Card>
    <Card size='sm'>
      <Card.Media>
        <img src='https://www.jotform.com/blog/wp-content/uploads/2012/07/mario-luigi-yoschi-figures-163036.jpeg' />
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
        <img src='https://www.jotform.com/blog/wp-content/uploads/2012/07/mario-luigi-yoschi-figures-163036.jpeg' />
      </Card.Media>
      <Card.Content>A small card!</Card.Content>
    </Card>
    <Card size='md'>
      <Card.Media>
        <img src='https://www.jotform.com/blog/wp-content/uploads/2012/07/mario-luigi-yoschi-figures-163036.jpeg' />
      </Card.Media>
      <Card.Content>A medium card..</Card.Content>
    </Card>
    <Card size='lg'>
      <Card.Media>
        <img src='https://www.jotform.com/blog/wp-content/uploads/2012/07/mario-luigi-yoschi-figures-163036.jpeg' />
      </Card.Media>
      <Card.Content>A large card.</Card.Content>
    </Card>
  </CardGroup>
);

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;
