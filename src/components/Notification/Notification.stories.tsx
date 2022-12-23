import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { Notification } from '../..';

/* eslint-disable no-alert */

export const Standard = () => (
  <>
    <Notification variant='info' message='This is a base notification' />
    <br />
    <Notification
      variant='info'
      message='This is a base notification with quite a bit of content. It may wrap around to the next line...'
    />
  </>
);

export const Variants = () => (
  <>
    <Notification variant='info' message='This is an info notification' />
    <br />
    <Notification variant='success' message='This is a success notification' />
    <br />
    <Notification variant='warn' message='This is a warn notification' />
    <br />
    <Notification variant='danger' message='This is a danger notification' />
  </>
);

export const WithCount = () => (
  <>
    <Notification variant='info' count={5} message='This is a notification with a count' />
    <br />
    <Notification variant='success' count={5} message='This is a notification with a count' />
    <br />
    <Notification variant='warn' count={5} message='This is a notification with a count' />
    <br />
    <Notification variant='danger' count={5} message='This is a notification with a count' />
  </>
);

export const WithAction = () => (
  <Notification
    variant='info'
    message='This is a notification with an action'
    action='Undo'
    onAction={() => alert('Undoing...')}
  />
);

export default {
  title: 'Components/Notification',
  component: Notification,
} as Meta;
