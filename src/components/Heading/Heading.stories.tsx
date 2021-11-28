import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Heading } from '../..';

export const Standard = () => <Heading>A Standard Heading</Heading>;

export const SubHeading = () => <Heading.SubHeading>A Standard Sub Heading</Heading.SubHeading>;

export const FormHeading = () => <Heading.FormHeading>A Standard Sub Heading</Heading.FormHeading>;

export default {
  title: 'Components/Heading',
  component: Heading,
} as Meta;
