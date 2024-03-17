import { Meta } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { ControlGroup, Select, Form } from '../..';

const options = [
  {
    value: '57',
    label: 'Hungry Caterpillar',
  },
  {
    value: '32',
    label: 'Fainting Lama',
  },
  {
    value: '53',
    label: 'Hungry Bear',
  },
  {
    value: '24',
    label: 'Panicking Squirrel',
  },
  {
    value: '12',
    label: 'High Hedgehog',
  },
  {
    value: '76',
    label: 'Lazy Tiger',
  },
  {
    value: '34',
    label: 'Wild Antelope',
  },
];

const longSelectOptions = Array.from({ length: 100 }, (_, i) => ({
  value: i.toString(),
  label: `Option ${i}`,
}));

export const Standard = () => {
  const [value, setValue] = useState({ one: '', two: '' });

  return (
    <Form value={value} onChange={setValue}>
      <ControlGroup variation='comfortable'>
        <Select
          name='one'
          label='A standard select'
          placeholder='A standard select'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua.\nUt enim ad minim veniam, quis nostrud exercitation'
          options={options}
        />
        <Select
          name='two'
          label='Another select'
          placeholder='Another select'
          description='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore'
          options={options}
        />
        <Select
          name='three'
          label='Long select'
          placeholder='Long select'
          description='A long select that has lots of options'
          options={longSelectOptions}
        />
      </ControlGroup>
    </Form>
  );
};

export default {
  title: 'Forms/Select',
  component: Select,
} as Meta;
