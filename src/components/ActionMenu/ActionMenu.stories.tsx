import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
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

export const Standard = () => (
  <ActionMenu variant='tertiary'>
    {items.map((item, index) => (
      <ActionMenu.Item key={index} onClick={item.onClick}>
        {item.label}
      </ActionMenu.Item>
    ))}
  </ActionMenu>
);

export const Complex = () => (
  <ActionMenu variant='tertiary'>
    {items.map((item, index) => (
      <ActionMenu.Item key={index} onClick={item.onClick}>
        {item.label}
      </ActionMenu.Item>
    ))}
  </ActionMenu>
);

export const Variants = () => (
  <>
    <ActionMenu variant='primary'>
      {items.map((item, index) => (
        <ActionMenu.Item key={index} onClick={item.onClick}>
          {item.label}
        </ActionMenu.Item>
      ))}
    </ActionMenu>
    <br />
    <br />
    <ActionMenu variant='secondary'>
      {items.map((item, index) => (
        <ActionMenu.Item key={index} onClick={item.onClick}>
          {item.label}
        </ActionMenu.Item>
      ))}
    </ActionMenu>
    <br />
    <br />
    <ActionMenu variant='tertiary'>
      {items.map((item, index) => (
        <ActionMenu.Item key={index} onClick={item.onClick}>
          {item.label}
        </ActionMenu.Item>
      ))}
    </ActionMenu>
  </>
);

export default {
  title: 'Components/ActionMenu',
  component: ActionMenu,
} as Meta;
