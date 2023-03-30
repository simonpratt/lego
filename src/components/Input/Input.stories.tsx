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

export const WithDescriptions = () => (
  <ControlGroup variation='comfortable'>
    <Input
      name='botToken'
      label='Bot Token'
      placeholder='xx-24312-aa'
      description='Visit www.example.com to create your bot and generate a token'
    />
    <Input
      name='chatId'
      label='Chat Id'
      placeholder='4431245'
      description='Enter the chatId for the desired used. \n You can request recent conversations from the API to find this ID.'
    />
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

export const DisabledInput = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <>
      <ControlGroup variation='comfortable'>
        <Input name='name' placeholder='A standard input' label='Name' value='A bright orange balloon' />
        <Input
          name='url'
          placeholder='A standard input'
          label='Url'
          value='www.balloons.com.au'
          disabled={isDisabled}
        />
        <Input name='price' placeholder='A standard input' label='Price' value='$654.22' disabled={isDisabled} />
      </ControlGroup>
      <Spacer size='2x' />
      <ButtonGroup>
        <Button onClick={() => setIsDisabled(!isDisabled)}>Toggle disabled</Button>
      </ButtonGroup>
    </>
  );
};

export default {
  title: 'Forms/Input',
  component: Input,
} as Meta;
