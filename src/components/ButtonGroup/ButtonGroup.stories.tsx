import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ButtonGroup, Button, SquareButton } from '../..';

/* eslint-disable no-console */

export const Standard = () => (
  <ButtonGroup>
    <Button variant='secondary'>Cancel</Button>
    <Button>Create</Button>
  </ButtonGroup>
);

export const RightAligned = () => (
  <ButtonGroup alignment='right'>
    <Button variant='secondary'>Cancel</Button>
    <Button>Create</Button>
  </ButtonGroup>
);

export const TwoPrimary = () => (
  <ButtonGroup>
    <Button>No</Button>
    <Button>Yes</Button>
  </ButtonGroup>
);

export const SquareButtons = () => (
  <ButtonGroup>
    <SquareButton>The first button in the group</SquareButton>
    <SquareButton>Middle one</SquareButton>
    <SquareButton>Last..</SquareButton>
  </ButtonGroup>
);

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
} as Meta;
