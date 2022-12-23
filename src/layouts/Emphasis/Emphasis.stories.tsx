import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { EmphasisLayout, Spacer, Input, Heading, Text } from '../..';

export const Standard = () => (
  <EmphasisLayout>
    <Heading>Lets get setup..</Heading>
    <Spacer size='4x' />
    <Text>Enter your name here. This will be used to identify you when connecting with friends.</Text>
    <Spacer size='2x' />
    <Input name='name' placeholder='name'></Input>
  </EmphasisLayout>
);

export default {
  title: 'Layouts/Emphasis',
  component: EmphasisLayout,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;
