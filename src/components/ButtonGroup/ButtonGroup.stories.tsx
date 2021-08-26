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

export const TwoPrimary = () => (
  <ButtonGroup>
    <Button>No</Button>
    <Button>Yes</Button>
  </ButtonGroup>
);

export const SquareButtons = () => (
  <ButtonGroup>
    <SquareButton>One</SquareButton>
    <SquareButton>Two</SquareButton>
    <SquareButton>Three</SquareButton>
  </ButtonGroup>
);

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
} as Meta;
