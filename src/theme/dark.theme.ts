import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  name: 'dark',
  colours: {
    background: 'red',
    overlayBackground: 'red',

    primary: {
      main: 'red',
      contrastText: 'red',
    },
    secondary: {
      main: 'red',
      contrastText: 'red',
    },

    defaultFont: 'red',

    controlBackground: 'red',
    controlBorder: 'red',
    controlBorderFocus: 'red',
    controlBorderHover: 'red',
    controlFont: 'red',
    controlPlaceholder: 'red',

    statusInfo: {
      main: 'red',
      highlightText: 'red',
    },
    statusSuccess: {
      main: 'red',
      highlightText: 'red',
    },
    statusWarn: {
      main: 'red',
      highlightText: 'red',
    },
    statusDanger: {
      main: 'red',
      highlightText: 'red',
    },
  },
  fonts: {
    default: {
      family: `'Roboto', sans-serif`,
      size: '16px',
    },
    heading: {
      family: `'Roboto', sans-serif`,
      size: '36px',
    },
  },
};

export default theme;
