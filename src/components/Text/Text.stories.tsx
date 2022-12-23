import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { Text } from '../..';

export const Standard = () => <Text>test 1</Text>;

export const Secondary = () => (
  <>
    <Text>This is not a drill</Text> <Text variant='secondary'>(no really!)</Text>
  </>
);

export default {
  title: 'Components/Text',
  component: Text,
} as Meta;
