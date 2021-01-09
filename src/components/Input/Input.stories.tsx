import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Input, ControlGroup } from '../..';

export const Standard = () => (
  <ControlGroup>
    <Input name='one' label='A standard input' />
    <Input name='two' label='Another input' />
  </ControlGroup>
);

export const WithoutLabels = () => (
  <ControlGroup>
    <Input name='one' placeholder='A standard input' />
    <Input name='two' placeholder='Another input' />
  </ControlGroup>
);

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;
