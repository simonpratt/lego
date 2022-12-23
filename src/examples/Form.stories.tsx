import { Meta } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { ControlGroup, FocusLayout, Form, Heading, Input, ImageUpload } from '../';

/* eslint-disable @typescript-eslint/no-empty-function */

export const Standard = () => {
  const [value, setValue] = useState({ dragon: '' });

  return (
    <FocusLayout>
      <Form value={value} onChange={setValue}>
        <ControlGroup variation='comfortable'>
          <ImageUpload name='image' />
          <Input name='name' placeholder='Something tasty..' />
          <Heading.FormHeading>Components</Heading.FormHeading>
          <Input name='one' placeholder='Ingredient #1' />
          <Input name='two' placeholder='Ingredient #2' />
          <Input name='three' placeholder='Ingredient #3' />
        </ControlGroup>
      </Form>
    </FocusLayout>
  );
};

export default {
  title: 'Examples/Forms',
  component: Form,
} as Meta;
