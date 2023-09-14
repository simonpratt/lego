import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { Button, ControlLine, Input } from '../..';

export const Standard = () => (
  <>
    <ControlLine>
      <Input placeholder='First name' />
      <Button>Go</Button>
    </ControlLine>
    <br />
    <br />
    <ControlLine variant='spaced'>
      <Input placeholder='First name' />
      <Input placeholder='Last name' />
    </ControlLine>
    <br />
    <br />
    <ControlLine variant='spaced'>
      <Input placeholder='First name' />
      <Input placeholder='Middle name' />
      <Input placeholder='Last name' />
    </ControlLine>
  </>
);

export default {
  title: 'Components/ControlLine',
  component: ControlLine,
} as Meta;
