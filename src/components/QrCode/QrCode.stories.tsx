import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { QrCode } from '../..';

export const Standard = () => (
  <>
    <QrCode value='http://www.google.com' />
  </>
);

export default {
  title: 'Components/QrCode',
  component: QrCode,
} as Meta;
