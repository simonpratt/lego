import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
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
