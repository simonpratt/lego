import React from 'react';
import styled from 'styled-components';
import responsive from '../../responsive/responsive';
import Alert, { AlertContainer, AlertProps } from '../Alert/Alert.component';

// eslint-disable-next-line
interface NotificationProps extends AlertProps {}

const NotificationContainer = styled.div`
  ${AlertContainer} {
    ${responsive.useStylesFor('tablet').andLarger(`
       max-width: 320px;
       width: 320px;
  `)}
  }
`;

const Notification = (props: NotificationProps) => (
  <NotificationContainer data-testid='notification'>
    <Alert {...props} />
  </NotificationContainer>
);

export default Notification;
