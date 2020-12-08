import { DefaultTheme } from 'styled-components';
import { Status } from '../theme.types';

export default (status: Status, theme: DefaultTheme) => {
  switch (status) {
    case 'info':
      return theme.colours.statusInfo;
    case 'success':
      return theme.colours.statusSuccess;
    case 'warn':
      return theme.colours.statusWarn;
    case 'danger':
      return theme.colours.statusDanger;
    default:
      return theme.colours.statusInfo;
  }
};
