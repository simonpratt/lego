import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Button, Menu, Notifications, Text } from '../..';
import { INotification } from './Notifications.component';
import FocusLayout from '../../layouts/Focus/Focus.layout';

/* eslint-disable no-alert */

export const Standard = () => {
  const notifications: INotification[] = [
    {
      id: '123',
      message: 'User saved!',
      variant: 'success',
    },
    {
      id: '456',
      message: 'Error validating form',
      variant: 'danger',
    },
  ];

  return (
    <>
      <Notifications notifications={notifications} />
      <Menu>
        <Menu.Heading>Something Tasty</Menu.Heading>
      </Menu>
      <Menu.Page>
        <FocusLayout>
          <Text>Content...</Text>
        </FocusLayout>
      </Menu.Page>
    </>
  );
};

export const Interactive = () => {
  const [notifications, setNotifications] = useState<INotification[]>([]);

  const successNotification: INotification = {
    id: '123',
    message: 'User saved!',
    variant: 'success',
    count: 1,
  };

  const errorNotification: INotification = {
    id: '456',
    message: 'Error validating form',
    variant: 'danger',
    count: 1,
  };

  const addNotification = (notification: INotification) => {
    const exists = notifications.find((n) => n.id === notification.id);

    if (exists) {
      const newNotifications = notifications.map((n) =>
        n.id === notification.id
          ? {
              ...n,
              count: (n.count || 1) + 1,
            }
          : n,
      );

      setNotifications(newNotifications);
      return;
    }

    setNotifications([...notifications, notification]);
  };

  return (
    <>
      <Notifications notifications={notifications} />
      <Menu>
        <Menu.Heading>Something Tasty</Menu.Heading>
      </Menu>
      <Menu.Page>
        <FocusLayout>
          <Button onClick={() => addNotification(successNotification)}>Save user</Button>
          <br />
          <br />
          <Button onClick={() => addNotification(errorNotification)}>Validate Form</Button>
          <br />
          <br />
          <Button variant='secondary' onClick={() => setNotifications(notifications.slice(1))}>
            Clear
          </Button>
        </FocusLayout>
      </Menu.Page>
    </>
  );
};

export default {
  title: 'Components/Notifications',
  component: Notifications,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;
