import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Alert } from '../..';

/* eslint-disable no-alert */

export const Standard = () => (
  <>
    <Alert variant='info' message='This is a base alert' />
    <br />
    <Alert
      variant='info'
      message='This is a base alert with quite a bit of content. It may wrap around to the next line...'
    />
  </>
);

export const Variants = () => (
  <>
    <Alert variant='info' message='This is an info alert' />
    <br />
    <Alert variant='success' message='This is a success alert' />
    <br />
    <Alert variant='warn' message='This is a warn alert' />
    <br />
    <Alert variant='danger' message='This is a danger alert' />
  </>
);

export const WithCount = () => <Alert variant='info' count={5} message='This is a alert with a count' />;

export const WithAction = () => (
  <Alert variant='info' message='This is a alert with an action' action='Undo' onAction={() => alert('Undoing...')} />
);

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta;
