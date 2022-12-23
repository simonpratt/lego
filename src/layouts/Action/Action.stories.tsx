import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { ActionLayout, Button } from '../..';

export const Standard = () => (
  <ActionLayout>
    <ActionLayout.Text>Lets find something to eat...</ActionLayout.Text>
    <ActionLayout.Content>
      <Button variant='secondary'>Get Started</Button>
    </ActionLayout.Content>
  </ActionLayout>
);

export const LeftAligned = () => (
  <ActionLayout>
    <ActionLayout.Text>Lets find something to eat...</ActionLayout.Text>
    <ActionLayout.Content left>
      <Button variant='secondary'>Get Started</Button>
    </ActionLayout.Content>
  </ActionLayout>
);

export default {
  title: 'Layouts/Action',
  component: ActionLayout,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;
