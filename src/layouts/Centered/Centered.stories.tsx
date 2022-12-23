import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { CenteredLayout } from '../..';

export const Standard = () => (
  <div style={{ backgroundColor: 'white' }}>
    <CenteredLayout>some content....</CenteredLayout>
  </div>
);

export default {
  title: 'Layouts/Centered',
  component: CenteredLayout,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;
