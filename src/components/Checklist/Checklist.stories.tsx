import { Meta } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
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

export const NoGap = () => {
  const [value, setValue] = useState<string[]>(['2', '4']);
  return <Checklist items={items} value={value} onChange={setValue} noSplitGap />;
};

export const Large = () => {
  const [value, setValue] = useState<string[]>(['2', '4']);
  return <Checklist items={items} value={value} onChange={setValue} noSplitGap large />;
};

const itemsWithColours = [
  { id: '1', label: 'Milk', colour: '#3b82f6' }, // blue - dairy
  { id: '2', label: 'Cheese', colour: '#3b82f6' }, // blue - dairy
  { id: '3', label: 'Apples', colour: '#22c55e' }, // green - produce
  { id: '4', label: 'Bananas', colour: '#22c55e' }, // green - produce
  { id: '5', label: 'Chicken', colour: '#ef4444' }, // red - meat
  { id: '6', label: 'Bread' }, // no colour
];

export const WithColours = () => {
  const [value, setValue] = useState<string[]>([]);
  return <Checklist items={itemsWithColours} value={value} onChange={setValue} />;
};

export const WithColoursHighlighted = () => {
  const [value, setValue] = useState<string[]>([]);
  // Simulate highlight - only dairy items have colour set (as if milk was just checked)
  const highlightedItems = itemsWithColours.map((item) => ({
    ...item,
    colour: item.colour === '#3b82f6' ? item.colour : undefined,
  }));
  return <Checklist items={highlightedItems} value={value} onChange={setValue} />;
};

export default {
  title: 'Components/Checklist',
  component: Checklist,
} as Meta;
