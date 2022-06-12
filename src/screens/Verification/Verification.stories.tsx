import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { VerificationScreen } from '../..';

// eslint-disable-next-line
const noop = () => {};

export const Standard = () => <VerificationScreen handleVerification={noop} />;

export default {
  title: 'Screens/Verification',
  component: VerificationScreen,
} as Meta;
