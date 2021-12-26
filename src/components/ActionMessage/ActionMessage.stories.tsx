import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ActionMessage, Menu } from '../..';

/* eslint-disable no-console */

export const Standard = () => (
  <>
    <ActionMessage
      header='Create an asset'
      info="It looks like you don't have any assets, create one to get started"
      action='Create'
      onAction={() => {
        console.log('testing');
      }}
    />
  </>
);

export const InPanel = () => (
  <>
    <Menu>
      <Menu.Heading>Action Message</Menu.Heading>
    </Menu>
    <Menu.Content>
      <Menu.Panel panelSize='sm'>
        <ActionMessage
          header='Create an asset'
          info="It looks like you don't have any assets, create one to get started"
          action='Create'
          onAction={() => {
            console.log('testing');
          }}
        />
      </Menu.Panel>
      <Menu.Page>some content...</Menu.Page>
    </Menu.Content>
  </>
);

export default {
  title: 'Components/ActionMessage',
  component: ActionMessage,
} as Meta;
