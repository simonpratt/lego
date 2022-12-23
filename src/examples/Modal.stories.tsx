import { Meta } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { Button, FancyCheckbox, Form, Input, Modal } from '../';
import ControlGroup from '../components/ControlGroup/ControlGroup.component';

/* eslint-disable @typescript-eslint/no-empty-function */

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
    <Modal onClose={() => {}}>
      <Modal.Header header='Add Dragon' />
      <Modal.Body>
        <Form value={value} onChange={setValue}>
          <ControlGroup variation='comfortable'>
            <Input name='name' label='Name' />
            <FancyCheckbox name='dragon' label='Type' options={options} />
            <Button>Submit</Button>
          </ControlGroup>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default {
  title: 'Examples/Modals',
  component: FancyCheckbox,
} as Meta;
