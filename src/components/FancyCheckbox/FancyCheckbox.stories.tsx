import { Meta } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { FancyCheckbox, Form } from '../..';

const options = [
  {
    value: 'fireball',
    label: 'Chinese Fireball',
  },
  {
    value: 'longhorn',
    label: 'Romanian Longhorn',
  },
  {
    value: 'ridgeback',
    label: 'Norwegian Ridgeback',
  },
  {
    value: 'horntail',
    label: 'Hungarian Horntail',
  },
];

export const Standard = () => {
  const [value, setValue] = useState({ dragon: '' });

  return (
    <Form value={value} onChange={setValue}>
      <FancyCheckbox name='dragon' options={options} />
    </Form>
  );
};

export default {
  title: 'Components/FancyCheckbox',
  component: FancyCheckbox,
} as Meta;
