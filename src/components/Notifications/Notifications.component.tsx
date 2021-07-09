// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React from 'react';
import styled from 'styled-components';
import { animated, useTransition } from 'react-spring';

import { Notification, Spacer } from '../..';
import responsive from '../../responsive/responsive';

const NotificationContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 270px;

  z-index: 2;

  ${responsive.useStylesFor('mobile').andSmaller(`
    bottom: 80px;
    left: 20px;

    width: calc(100% - 40px);
  `)}
`;

export type NotificationVariant = 'info' | 'success' | 'warn' | 'danger';

export interface INotification {
  id: string;
  variant: NotificationVariant;
  message: string;
  count?: number;
  action?: string;
  onAction?: () => void;
}

interface NotificationsProps {
  notifications: INotification[];
}

const Notifications = ({ notifications }: NotificationsProps) => {
  const transitions = useTransition(notifications, (item) => item.id, {
    from: { transform: 'translateX(-300px)', opacity: 0 },
    enter: { transform: 'translateX(0px)', opacity: 1 },
    leave: { transform: 'translateX(300px)', opacity: 0 },
    config: {
      tension: 280,
      mass: 0.2,
      friction: 10,
    },
  });

  return (
    <NotificationContainer>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Spacer size='1x' />
          <Notification
            variant={item.variant}
            message={item.message}
            action={item.action}
            onAction={item.onAction}
            count={item.count}
          ></Notification>
        </animated.div>
      ))}
    </NotificationContainer>
  );
};

export default Notifications;
