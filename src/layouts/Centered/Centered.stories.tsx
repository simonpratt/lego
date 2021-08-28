import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { CenteredLayout } from '../..';

export const Standard = () => (
  <div style={{ backgroundColor: 'white' }}>
    <CenteredLayout>some content....</CenteredLayout>
  </div>
);

export default {
  title: 'Layouts/Centered',
  component: CenteredLayout,
} as Meta;
