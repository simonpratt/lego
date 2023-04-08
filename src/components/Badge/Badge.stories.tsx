import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
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

export const WithAction = () => (
  <>
    <Badge variant='info' actionIcon={faTimes} onAction={() => console.log('clicked')}>
      Wild Tiger
    </Badge>
  </>
);

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta;
