import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { SquareButton } from '../..';

export const Standard = () => (
  <>
    <SquareButton>Primary</SquareButton>
    <br />
    <br />
    <SquareButton variant='secondary'>A Secondary Button</SquareButton>
    <br />
    <br />
    <SquareButton variant='tertiary'>A Tertiary Square Button</SquareButton>
  </>
);

export default {
  title: 'Components/SquareButton',
  component: SquareButton,
} as Meta;
