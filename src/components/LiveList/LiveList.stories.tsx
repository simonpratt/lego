import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Button, ButtonGroup, ControlGroup, Form, Heading, ImageUpload, Input, LiveList, Spacer, Text } from '../..';

const exampleLiveListValue = [
  { id: '6f974464-d592-4271-b3ae-2821fffce258', value: '500g chicken' },
  { id: 'a273d33a-2643-4991-b81d-2beff51d42a8', value: '1/2 cup rice' },
  { id: '2ecef56f-f725-4f8a-ac84-bd3117e7d50b', value: '1 tbs olive oil' },
];

const exampleListErrors = {
  '6f974464-d592-4271-b3ae-2821fffce258': 'Ingredient not found',
  'a273d33a-2643-4991-b81d-2beff51d42a8': 'Ingredient not found',
};

export const Standard = () => {
  const [value, setValue] = useState(exampleLiveListValue);
  return (
    <>
      <Heading.FormHeading>Ingredients</Heading.FormHeading>
      <Spacer size='1x' />
      <LiveList value={value} onChange={setValue} />
    </>
  );
};

export const InForm = () => {
  const [value, setValue] = useState({});

  return (
    <Form value={value} onChange={setValue}>
      <ControlGroup variation='comfortable'>
        <ImageUpload name='image' />
        <Input name='name' placeholder='Something tasty..' />
        <Heading.FormHeading>Ingredients</Heading.FormHeading>
        <LiveList name='ingredients' />
      </ControlGroup>
    </Form>
  );
};

export const WithValidation = () => {
  const value = { ingredients: exampleLiveListValue };
  const [errors, setErrors] = useState({ ingredients: exampleListErrors });

  const validate = () => {
    setErrors({ ingredients: exampleListErrors });
  };

  const clear = () => {
    setErrors({ ingredients: undefined as any });
  };

  return (
    <>
      <Form value={value} errors={errors} onChange={() => undefined}>
        <ControlGroup variation='comfortable'>
          <Text variant='secondary'>Max length 20 chars</Text>
          <LiveList name='ingredients' />
        </ControlGroup>
      </Form>
      <Spacer size='2x' />
      <ButtonGroup>
        <Button onClick={clear}>Clear</Button>
        <Button onClick={validate}>Set Errors</Button>
      </ButtonGroup>
    </>
  );
};

export default {
  title: 'Components/LiveList',
  component: LiveList,
} as Meta;
