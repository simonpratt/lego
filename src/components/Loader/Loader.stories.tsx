import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { Loader } from '../..';

export const Standard = () => {
  return <Loader />;
};

export const ForPage = () => {
  return <Loader variant='page-loader' />;
};

export default {
  title: 'Components/Loader',
  component: Loader,
} as Meta;
