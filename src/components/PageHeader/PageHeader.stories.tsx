import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { PageHeader } from '../../';

export const Standard = () => {
  return <PageHeader heading='Frank the Drummer' />;
};

export default {
  title: 'Components/PageHeader',
  component: PageHeader,
} as Meta;
