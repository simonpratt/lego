import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { Heading } from '../..';

export const Standard = () => <Heading>A Standard Heading</Heading>;

export const SubHeading = () => <Heading.SubHeading>A Standard Sub Heading</Heading.SubHeading>;

export const FormHeading = () => <Heading.FormHeading>A form Heading</Heading.FormHeading>;

export const DividerHeading = () => <Heading.DividerHeading>A divider Heading</Heading.DividerHeading>;

export default {
  title: 'Components/Heading',
  component: Heading,
} as Meta;
