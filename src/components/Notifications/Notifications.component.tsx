// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React from 'react';
import styled from 'styled-components';

import { Notification, Spacer } from '../..';
import responsive from '../../responsive/responsive';
import zIndexConstants from '../../constants/zIndex.constants';
import { AnimatePresence, motion } from 'framer-motion';

const NotificationContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 270px;

  z-index: ${zIndexConstants.notifications};

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
  return (
    <NotificationContainer>
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            key={notification.id}
          >
            <Spacer size='1x' />
            <Notification
              variant={notification.variant}
              message={notification.message}
              action={notification.action}
              onAction={notification.onAction}
              count={notification.count}
            ></Notification>
          </motion.div>
        ))}
      </AnimatePresence>
    </NotificationContainer>
  );
};

export default Notifications;
