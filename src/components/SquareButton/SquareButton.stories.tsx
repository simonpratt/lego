import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { SquareButton } from '../..';
import ButtonGroup from '../ButtonGroup/ButtonGroup.component';

export const Standard = () => (
  <ButtonGroup>
    <SquareButton variant='secondary'>Cancel</SquareButton>
    <SquareButton>Create</SquareButton>
  </ButtonGroup>
);

export default {
  title: 'Components/SquareButton',
  component: SquareButton,
} as Meta;
