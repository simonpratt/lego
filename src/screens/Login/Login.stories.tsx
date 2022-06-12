import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { LoginScreen } from '../..';

// eslint-disable-next-line
const noop = () => {};

export const Standard = () => <LoginScreen handleLogin={noop} onRegisterClicked={noop} />;

export const WithError = () => (
  <LoginScreen handleLogin={noop} onRegisterClicked={noop} error='Incorrect username or password' />
);

export default {
  title: 'Screens/Login',
  component: LoginScreen,
} as Meta;
