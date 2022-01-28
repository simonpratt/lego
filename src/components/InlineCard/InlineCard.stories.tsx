import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { faCheckCircle, faExclamationTriangle, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Badge, InlineCard, InlineCardGroup } from '../..';

export const Standard = () => (
  <InlineCardGroup>
    <InlineCard>
      <InlineCard.Content>Some content</InlineCard.Content>
    </InlineCard>
    <InlineCard>
      <InlineCard.Media>
        <img src='https://www.jotform.com/blog/wp-content/uploads/2012/07/mario-luigi-yoschi-figures-163036.jpeg' />
      </InlineCard.Media>

      <InlineCard.Content>Some more content</InlineCard.Content>
    </InlineCard>
    <InlineCard
      onClick={() => {
        console.log('Clicked');
      }}
    >
      <InlineCard.Content>Clickable card</InlineCard.Content>
      <InlineCard.Meta>
        <Badge variant='info'>Clickable</Badge>
      </InlineCard.Meta>
    </InlineCard>
  </InlineCardGroup>
);

export const WithDrag = () => (
  <div style={{ maxWidth: '400px' }}>
    <InlineCardGroup>
      <InlineCard
        onGestureLeft={() => console.log('Gesture left triggered')}
        gestureLeftIcon={faCheckCircle}
        gestureLeftVariant='success'
      >
        <InlineCard.Content>A success gesture</InlineCard.Content>
      </InlineCard>
      <InlineCard
        onGestureLeft={() => console.log('Gesture left triggered')}
        gestureLeftIcon={faInfoCircle}
        gestureLeftVariant='info'
      >
        <InlineCard.Content>A info gesture</InlineCard.Content>
      </InlineCard>
      <InlineCard
        onGestureLeft={() => console.log('Gesture left triggered')}
        gestureLeftIcon={faExclamationTriangle}
        gestureLeftVariant='warn'
      >
        <InlineCard.Content>A warning gesture</InlineCard.Content>
      </InlineCard>
      <InlineCard
        onGestureLeft={() => console.log('Gesture left triggered')}
        gestureLeftIcon={faTimes}
        gestureLeftVariant='danger'
      >
        <InlineCard.Content>A danger gesture</InlineCard.Content>
      </InlineCard>
    </InlineCardGroup>
  </div>
);

export default {
  title: 'Components/InlineCard',
  component: InlineCard,
} as Meta;
