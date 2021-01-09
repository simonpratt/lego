import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { LiveInput, ControlGroup } from '../..';

export const Standard = () => (
  <ControlGroup>
    <LiveInput name='one' placeholder='Some text..' />
    <LiveInput name='two' placeholder='Some text..' />
  </ControlGroup>
);

export const WithoutLabels = () => (
  <ControlGroup>
    <LiveInput name='one' placeholder='A standard input' />
    <LiveInput name='two' placeholder='Another input' />
  </ControlGroup>
);

export default {
  title: 'Components/LiveInput',
  component: LiveInput,
} as Meta;
