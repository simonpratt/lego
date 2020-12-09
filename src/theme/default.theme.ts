import { DefaultTheme } from 'styled-components';
import colours from '../colours/colours';

const theme: DefaultTheme = {
  name: 'default',
  colours: {
    background: colours.grey10,
    overlayBackground: colours.grey50,

    primary: {
      main: colours.grey70,
      contrastText: colours.grey10,
    },
    secondary: {
      main: colours.yellow,
      contrastText: colours.grey90,
    },

    defaultFont: colours.grey90,

    controlBackground: colours.white,
    controlBorder: colours.grey20,
    controlBorderFocus: colours.grey50,
    controlBorderHover: colours.grey30,
    controlFont: colours.grey90,
    controlPlaceholder: colours.grey30,

    statusInfo: {
      main: colours.blue,
      highlightText: colours.blue,
    },
    statusSuccess: {
      main: colours.green,
      highlightText: colours.green,
    },
    statusWarn: {
      main: colours.yellow,
      highlightText: colours.yellow,
    },
    statusDanger: {
      main: colours.red,
      highlightText: colours.red,
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
