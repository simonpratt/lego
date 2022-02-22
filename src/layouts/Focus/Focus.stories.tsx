import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Button, ControlGroup, FocusLayout, Heading, Input, Spacer, Text } from '../..';

/* eslint-disable @typescript-eslint/no-empty-function */

export const Standard = () => (
  <FocusLayout>
    <Heading>Lets get setup..</Heading>
    <Spacer size='4x' />
    <ControlGroup variation='submission'>
      <Text>Enter your name here. This will be used to identify you when connecting with friends.</Text>
      <ControlGroup.Spacer />
      <Input name='name' placeholder='name' />
      <ControlGroup.Spacer />
      <Button>Next</Button>
    </ControlGroup>
  </FocusLayout>
);

export default {
  title: 'Layouts/Focus',
  component: FocusLayout,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;
