import { Meta } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { Button, ControlGroup, Form, Input } from '../..';

/* eslint-disable @typescript-eslint/no-empty-function */

export const Standard = () => {
  const [value, setValue] = useState({ name: 'Frightened Kangaroo', colour: 'Red' });

  return (
    <>
      <Form value={value} onChange={setValue}>
        <ControlGroup variation='submission'>
          <Input name='name' placeholder='name' />
          <Input name='colour' placeholder='colour' />
          <ControlGroup.Spacer />
          <Button>Next</Button>
        </ControlGroup>
      </Form>
      <br />
      <br />
      <br />
      <div>{JSON.stringify(value)}</div>
    </>
  );
};

export default {
  title: 'Components/Form',
  component: Form,
} as Meta;
