import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Checklist } from '../..';

const items = [
  {
    id: '1',
    value: 'one',
    label: 'one',
  },
  {
    id: '2',
    value: 'two',
    label: 'two',
  },
  {
    id: '3',
    value: 'three',
    label: 'three',
  },
  {
    id: '4',
    value: 'four',
    label: 'four',
  },
  {
    id: '5',
    value: 'five',
    label: 'five',
  },
  {
    id: '6',
    value: 'six',
    label: 'six',
  },
];

export const Standard = () => {
  const [value, setValue] = useState<string[]>(['2', '4']);
  return <Checklist items={items} value={value} onChange={setValue} />;
};

export default {
  title: 'Components/Checklist',
  component: Checklist,
} as Meta;
