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

const itemsWithStatus = [
  { id: '1', label: 'Milk', status: 'info' as const }, // info - dairy
  { id: '2', label: 'Cheese', status: 'info' as const }, // info - dairy
  { id: '3', label: 'Apples', status: 'success' as const }, // success - produce
  { id: '4', label: 'Bananas', status: 'success' as const }, // success - produce
  { id: '5', label: 'Chicken', status: 'danger' as const }, // danger - meat
  { id: '6', label: 'Bread' }, // no status
];

export const WithStatus = () => {
  const [value, setValue] = useState<string[]>([]);
  return <Checklist items={itemsWithStatus} value={value} onChange={setValue} />;
};

export const WithStatusHighlighted = () => {
  const [value, setValue] = useState<string[]>([]);
  const [highlightCategory, setHighlightCategory] = useState<string | null>(null);

  const handleChange = (newValue: string[]) => {
    setValue(newValue);

    // When an item is checked, highlight items in the same category
    const addedIds = newValue.filter((id) => !value.includes(id));
    if (addedIds.length > 0) {
      const checkedItem = itemsWithStatus.find((item) => item.id === addedIds[0]);
      if (checkedItem?.status) {
        setHighlightCategory(checkedItem.status);
        // Clear highlight after 5 seconds
        setTimeout(() => setHighlightCategory(null), 5000);
      }
    }
  };

  // Only show status on items that match the highlighted category
  const displayItems = itemsWithStatus.map((item) => ({
    ...item,
    status: highlightCategory && item.status === highlightCategory ? item.status : undefined,
  }));

  return <Checklist items={displayItems} value={value} onChange={handleChange} />;
};

export default {
  title: 'Components/Checklist',
  component: Checklist,
} as Meta;
