import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { Button, ButtonGroup, PageHeader } from '../../';

export const Standard = () => {
  return <PageHeader heading='Frank the Drummer' />;
};

export const WithActions = () => {
  return (
    <PageHeader
      heading='Frank the Drummer'
      actions={
        <ButtonGroup>
          <Button variant='tertiary'>Add</Button>
        </ButtonGroup>
      }
    />
  );
};

export default {
  title: 'Components/PageHeader',
  component: PageHeader,
} as Meta;
