import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { ColumnLayout } from '../..';

export const Standard = () => (
  <div style={{ backgroundColor: 'white' }}>
    <ColumnLayout>some content....</ColumnLayout>
  </div>
);

export default {
  title: 'Layouts/Column',
  component: ColumnLayout,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;
