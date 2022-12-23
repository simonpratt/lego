import { Meta } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { faCheckCircle, faExclamationTriangle, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Badge, FocusLayout, Form, InlineCard, InlineCardGroup } from '../..';
import InlineCardSelection from './InlineCardSelection.component';

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
  <FocusLayout>
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
  </FocusLayout>
);

export const WithSelection = () => {
  const [value, setValue] = useState({ animals: ['lama'] });

  return (
    <FocusLayout>
      <Form value={value} onChange={setValue}>
        <InlineCardSelection name='animals'>
          <InlineCardGroup>
            <InlineCard value='camel'>
              <InlineCard.Media>
                <img src='http://3.bp.blogspot.com/-m2w1bFhTLMs/Uyh0xlVCluI/AAAAAAAACjw/G4IhU8b0RhY/w1200-h630-p-k-nu/368692.jpg' />
              </InlineCard.Media>
              <InlineCard.Content>A cranky camel</InlineCard.Content>
            </InlineCard>
            <InlineCard value='eagle'>
              <InlineCard.Media>
                <img src='https://www.hakaimagazine.com/wp-content/uploads/header-bald-eagle-nests.jpg' />
              </InlineCard.Media>
              <InlineCard.Content>An eager eagle</InlineCard.Content>
            </InlineCard>
            <InlineCard value='lama'>
              <InlineCard.Media>
                <img src='https://external-preview.redd.it/3KAYF01HBUX-QKwcpo89kHPzScRoZPXZN7o02JepX8E.jpg?auto=webp&s=08bbddec975a8af76de43a33001604099fb0168d' />
              </InlineCard.Media>
              <InlineCard.Content>A lazy lama</InlineCard.Content>
            </InlineCard>
            <InlineCard value='iguana'>
              <InlineCard.Content>An invisible iguana</InlineCard.Content>
            </InlineCard>
          </InlineCardGroup>
        </InlineCardSelection>
      </Form>
    </FocusLayout>
  );
};

export default {
  title: 'Components/InlineCard',
  component: InlineCard,
} as Meta;
