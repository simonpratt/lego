import colours from '../colours/colours';
import { LegoTheme } from './theme.types';

const defaultTheme: LegoTheme = {
  name: 'default',
  colours: {
    background: colours.grey10,
    overlayBackground: colours.grey50,

    primary: {
      main: colours.grey70,
      hover: 'red',
      contrastText: colours.grey10,
    },
    secondary: {
      main: colours.yellow,
      hover: 'red',
      contrastText: colours.grey90,
    },
    tertiary: {
      main: colours.yellow,
      hover: 'red',
      contrastText: colours.grey90,
    },

    defaultFont: colours.grey90,
    secondaryFont: colours.grey35,
    secondaryFontHover: colours.grey40,

    defaultBorder: colours.grey20,
    faintBorder: colours.grey20,

    controlBackground: colours.white,
    controlBorder: colours.grey20,
    controlBorderFocus: colours.grey50,
    controlBorderHover: colours.grey30,
    controlPlaceholder: colours.grey30,

    uploadBackground: colours.grey20,
    uploadIcon: colours.grey10,

    cardBackground: colours.white,

    statusInfo: {
      main: colours.blue,
      contrast: colours.blue,
    },
    statusSuccess: {
      main: colours.green,
      contrast: colours.green,
    },
    statusWarn: {
      main: colours.yellow,
      contrast: colours.yellow,
    },
    statusDanger: {
      main: colours.red,
      contrast: colours.red,
    },
  },
  fonts: {
    default: {
      family: `'Roboto', sans-serif`,
      size: '16px',
      weight: '400',
    },
    heading: {
      family: `'Roboto', sans-serif`,
      size: '36px',
      weight: '400',
    },
    subHeading: {
      family: `'Roboto', sans-serif`,
      size: '24px',
      weight: '400',
    },
  },
  shadows: {
    small: '0px 0px 2px rgba(0, 0, 0, 0.15)',
    medium: '0px 0px 4px rgba(0, 0, 0, 0.15)',
    large: '0px 0px 8px rgba(0, 0, 0, 0.15)',
    xlarge: '0px 0px 16px rgba(0, 0, 0, 0.25)',
  },
};

export default defaultTheme;
