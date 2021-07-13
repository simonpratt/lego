import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { PaddedLayout } from '../..';

export const Standard = () => (
  <div style={{ backgroundColor: 'white' }}>
    <PaddedLayout>some content....</PaddedLayout>
  </div>
);

export default {
  title: 'Layouts/Padded',
  component: PaddedLayout,
} as Meta;
