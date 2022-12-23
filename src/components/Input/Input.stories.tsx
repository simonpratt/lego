import { Meta } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { Button, ButtonGroup, Input, ControlGroup, Spacer } from '../..';

export const Standard = () => (
  <ControlGroup>
    <Input name='one' label='A standard input' />
    <Input name='two' label='Another input' />
  </ControlGroup>
);

export const WithoutLabels = () => (
  <ControlGroup>
    <Input name='one' placeholder='A standard input' />
    <Input name='two' placeholder='Another input' />
  </ControlGroup>
);

export const WithError = () => {
  const [error, setError] = useState<string | undefined>('Input has an error!');

  const clear = () => {
    setError(undefined);
  };

  const validate = () => {
    setError('Input has an error!');
  };

  return (
    <>
      <ControlGroup>
        <Input name='one' error={error} placeholder='A standard input' />
      </ControlGroup>
      <Spacer size='2x' />
      <ButtonGroup>
        <Button onClick={clear}>Clear</Button>
        <Button onClick={validate}>Set Errors</Button>
      </ButtonGroup>
    </>
  );
};

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;
