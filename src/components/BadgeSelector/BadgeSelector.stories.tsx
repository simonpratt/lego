import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { BadgeSelector } from '../..';
import { BadgeSelectorOption } from './BadgeSelector.component';

/* eslint-disable @typescript-eslint/no-empty-function */
const options: BadgeSelectorOption[] = [
  {
    value: 'pending',
    name: 'Pending',
    variant: 'info',
  },
  {
    value: 'accepted',
    name: 'Accepted',
    variant: 'success',
  },
  {
    value: 'expired',
    name: 'Expired',
    variant: 'warn',
  },
  {
    value: 'rejected',
    name: 'Rejected',
    variant: 'danger',
  },
];

export const Standard = () => {
  const [value, setValue] = useState<string[]>(['pending']);

  return <BadgeSelector options={options} value={value} onChange={setValue} />;
};

export default {
  title: 'Components/BadgeSelector',
  component: BadgeSelector,
} as Meta;
