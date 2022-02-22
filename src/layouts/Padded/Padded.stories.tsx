import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { PaddedLayout } from '../..';

export const Standard = () => (
  <div style={{ backgroundColor: 'white' }}>
    <PaddedLayout>some content....</PaddedLayout>
  </div>
);

export const Small = () => (
  <div style={{ backgroundColor: 'white' }}>
    <PaddedLayout.Small>some content....</PaddedLayout.Small>
  </div>
);

export default {
  title: 'Layouts/Padded',
  component: PaddedLayout,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;
