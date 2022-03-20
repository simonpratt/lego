import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ActionMenu } from '../..';

/* eslint-disable @typescript-eslint/no-empty-function */

export const Standard = () => <ActionMenu />;

export const Variants = () => (
  <>
    <ActionMenu variant='primary' />
    <br />
    <br />
    <ActionMenu variant='secondary' />
    <br />
    <br />
    <ActionMenu variant='tertiary' />
  </>
);

export default {
  title: 'Components/ActionMenu',
  component: ActionMenu,
} as Meta;
