import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ColumnLayout } from '../..';

export const Standard = () => (
  <div style={{ backgroundColor: 'white' }}>
    <ColumnLayout>some content....</ColumnLayout>
  </div>
);

export default {
  title: 'Layouts/Column',
  component: ColumnLayout,
} as Meta;
