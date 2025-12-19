import { Meta } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { Toggle, Checklist, Spacer, Text } from '../..';

export const Basic = () => {
  const [value, setValue] = useState(false);

  return <Toggle value={value} onChange={setValue} />;
};

export const WithLabel = () => {
  const [value, setValue] = useState(false);

  return <Toggle label='Enable notifications' value={value} onChange={setValue} />;
};

export const ShoppingListExample = () => {
  const [isCombined, setIsCombined] = useState(false);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const splitItems = [
    { id: '1', label: 'Manual Items', isHeader: true },
    { id: 'manual-1', label: '1 bottle olive oil' },
    { id: 'manual-2', label: '500g pasta' },
    { id: '2', label: 'From Meals', isHeader: true },
    { id: 'meal-1', label: '250g chicken breast (Meal 1)' },
    { id: 'meal-2', label: '250g chicken breast (Meal 2)' },
    { id: 'meal-3', label: '2 cans diced tomatoes (Meal 1)' },
    { id: 'meal-4', label: '3 cans diced tomatoes (Meal 2)' },
  ];

  const combinedItems = [
    { id: 'combined-1', label: '500g chicken breast' },
    { id: 'combined-2', label: '5 cans diced tomato' },
    { id: 'combined-3', label: '1 bottle olive oil' },
    { id: 'combined-4', label: '500g pasta' },
  ];

  const items = isCombined ? combinedItems : splitItems;

  return (
    <div>
      <Toggle label='Combine items' value={isCombined} onChange={setIsCombined} />
      <Spacer size='2x' />

      {isCombined ? (
        <Text>All items merged into one flat list with quantities combined</Text>
      ) : (
        <Text>Items organized by source (manual items, then meals)</Text>
      )}
      <Spacer size='2x' />

      <Checklist items={items} value={checkedItems} onChange={setCheckedItems} large noSplitGap />
    </div>
  );
};

export default {
  title: 'Components/Toggle',
  component: Toggle,
} as Meta;
