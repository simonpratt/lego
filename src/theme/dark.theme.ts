import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  name: 'dark',
  colours: {
    background: 'lightblue',
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
    default: `'Roboto', sans-serif`,
  },
};

export default theme;
