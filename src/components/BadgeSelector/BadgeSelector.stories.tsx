import { Meta } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
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

const options2: BadgeSelectorOption[] = [
  {
    value: 'one',
    name: 'one',
    variant: 'info',
  },
  {
    value: 'two',
    name: 'two',
    variant: 'info',
  },
  {
    value: 'three',
    name: 'three',
    variant: 'info',
  },
  {
    value: 'four',
    name: 'four',
    variant: 'info',
  },
  {
    value: 'five',
    name: 'five',
    variant: 'info',
  },
  {
    value: 'six',
    name: 'six',
    variant: 'info',
  },
  {
    value: 'seven',
    name: 'seven',
    variant: 'info',
  },
  {
    value: 'eight',
    name: 'eight',
    variant: 'info',
  },
  {
    value: 'nine',
    name: 'nine',
    variant: 'info',
  },
  {
    value: 'ten',
    name: 'ten',
    variant: 'info',
  },
  {
    value: 'eleven',
    name: 'eleven',
    variant: 'info',
  },
];

export const LotsOfBadges = () => {
  const [value, setValue] = useState<string[]>(['one']);

  return <BadgeSelector options={options2} value={value} onChange={setValue} />;
};

export default {
  title: 'Components/BadgeSelector',
  component: BadgeSelector,
} as Meta;
