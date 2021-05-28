import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { SquareButton } from '../..';

export const Standard = () => (
  <>
    <SquareButton>test</SquareButton>
  </>
);

export default {
  title: 'Components/SquareButton',
  component: SquareButton,
} as Meta;
