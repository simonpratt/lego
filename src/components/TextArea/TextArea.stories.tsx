import { Meta } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { Button, ButtonGroup, TextArea, ControlGroup, Spacer } from '../..';

export const Standard = () => (
  <ControlGroup>
    <TextArea name='one' label='A standard text area' />
    <TextArea name='two' label='Another text area' />
  </ControlGroup>
);

export const WithoutLabels = () => (
  <ControlGroup>
    <TextArea name='one' placeholder='A standard text area' />
    <TextArea name='two' placeholder='Another text area' />
  </ControlGroup>
);

export const WithError = () => {
  const [error, setError] = useState<string | undefined>('Text Area has an error!');

  const clear = () => {
    setError(undefined);
  };

  const validate = () => {
    setError('Text Area has an error!');
  };

  return (
    <>
      <ControlGroup>
        <TextArea name='one' error={error} placeholder='A standard text area' />
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
  title: 'Forms/TextArea',
  component: TextArea,
} as Meta;
