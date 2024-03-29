import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { ControlGroup, Input, Button } from '../..';

/* eslint-disable @typescript-eslint/no-empty-function */

export const Focus = () => (
  <>
    <ControlGroup>
      <Input placeholder='username' name='username' />
      <Input placeholder='password' name='password' />
      <ControlGroup.Spacer />
      <Button>Submit</Button>
    </ControlGroup>
  </>
);

export const Submission = () => (
  <>
    <ControlGroup variation='submission'>
      <Input placeholder='username' name='username' />
      <Input placeholder='password' name='password' />
      <ControlGroup.Spacer />
      <Button>Submit</Button>
    </ControlGroup>
  </>
);

export const Spaced = () => (
  <>
    <ControlGroup variation='comfortable'>
      <Input label='username' placeholder='username' name='username' />
      <Input label='password' placeholder='password' name='password' />
      <Button>Submit</Button>
    </ControlGroup>
  </>
);

export default {
  title: 'Components/ControlGroup',
  component: ControlGroup,
} as Meta;
