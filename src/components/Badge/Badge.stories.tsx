import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { Badge } from '../..';

/* eslint-disable @typescript-eslint/no-empty-function */

export const Standard = () => (
  <>
    <Badge variant='info'>Pending</Badge>
    <br />
    <br />
    <Badge variant='success'>Accepted</Badge>
    <br />
    <br />
    <Badge variant='warn'>Expired</Badge>
    <br />
    <br />
    <Badge variant='danger'>Rejected</Badge>
  </>
);

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta;
