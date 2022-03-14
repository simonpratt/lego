import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Checklist } from '../..';

export const Standard = () => (
  <Checklist>
    <Checklist.Item value='one'>one</Checklist.Item>
    <Checklist.Item value='two'>two</Checklist.Item>
    <Checklist.Item value='three'>three</Checklist.Item>
  </Checklist>
);

export default {
  title: 'Components/Checklist',
  component: Checklist,
} as Meta;
