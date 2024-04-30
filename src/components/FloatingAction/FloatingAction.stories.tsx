import { Meta } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { ActionMenu, Button, ControlGroup, ControlLine, FloatingAction, Form, Input } from '../..';

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
    <div>
      <Form value={value} onChange={setValue}>
        <ControlGroup>
          <Input label='First Name' />
          <Input label='Last Name' />
          <Input label='Email' />
          <Input label='Phone Number' />
          <Input label='Address Line 1' />
          <Input label='Address Line 2' />
          <Input label='City' />
          <Input label='Postcode' />
          <Input label='Country' />
        </ControlGroup>
      </Form>
      <FloatingAction>
        <ControlLine>
          <Button>Save</Button>
          <ActionMenu variant='tertiary'>
            <ActionMenu.Item onClick={() => {}}>Delete</ActionMenu.Item>
          </ActionMenu>
        </ControlLine>
      </FloatingAction>
    </div>
  );
};

export default {
  title: 'Forms/FloatingAction',
  component: FloatingAction,
} as Meta;
