import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ActionMenu } from '../..';

/* eslint-disable @typescript-eslint/no-empty-function */

const items = [
  {
    label: 'Angry Lama',
    onClick: () => {
      console.log('Item 1 clicked');
    },
  },
  {
    label: 'Frightened Frog',
    onClick: () => {
      console.log('Item 2 clicked');
    },
  },
  {
    label: 'Hungry Bear',
    onClick: () => {
      console.log('Item 3 clicked');
    },
  },
  {
    label: 'Crazy Koala',
    onClick: () => {
      console.log('Item 4 clicked');
    },
  },
  {
    label: 'Dizzy Snake',
    onClick: () => {
      console.log('Item 5 clicked');
    },
  },
];

export const Standard = () => <ActionMenu items={items} variant='tertiary' />;

export const Variants = () => (
  <>
    <ActionMenu items={items} variant='primary' />
    <br />
    <br />
    <ActionMenu items={items} variant='secondary' />
    <br />
    <br />
    <ActionMenu items={items} variant='tertiary' />
  </>
);

export default {
  title: 'Components/ActionMenu',
  component: ActionMenu,
} as Meta;
