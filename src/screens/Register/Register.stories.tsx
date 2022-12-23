import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { RegisterScreen } from '../..';

// eslint-disable-next-line
const noop = () => {};

export const Standard = () => <RegisterScreen handleRegister={noop} />;

export const WithError = () => <RegisterScreen handleRegister={noop} error='Invalid username or password' />;

export default {
  title: 'Screens/Register',
  component: RegisterScreen,
} as Meta;
