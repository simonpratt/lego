import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { Text } from '../..';

export const Standard = () => <Text>test 1</Text>;

export const Secondary = () => (
  <>
    <Text>This is not a drill</Text> <Text variant='secondary'>(no really!)</Text>
  </>
);

export const NoWrap = () => (
  <div style={{ maxWidth: '300px' }}>
    <Text noWrap>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    </Text>
  </div>
);

export default {
  title: 'Components/Text',
  component: Text,
} as Meta;
