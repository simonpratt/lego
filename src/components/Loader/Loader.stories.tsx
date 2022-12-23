import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { Loader } from '../..';

export const Standard = () => {
  return <Loader />;
};

export default {
  title: 'Components/Loader',
  component: Loader,
} as Meta;
