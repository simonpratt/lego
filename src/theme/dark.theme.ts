import { DefaultTheme } from 'styled-components';

const darkTheme: DefaultTheme = {
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
    secondaryFont: 'red',
    tertiaryFont: 'red',

    tertiaryFontHover: 'red',

    defaultBorder: 'red',

    controlBackground: 'red',
    controlBorder: 'red',
    controlBorderFocus: 'red',
    controlBorderHover: 'red',
    controlFont: 'red',
    controlPlaceholder: 'red',

    uploadBackground: 'red',
    uploadIcon: 'red',

    cardBackground: 'red',

    menuBackground: 'red',
    menuFont: 'red',
    menuHoverBackground: 'red',
    menuActive: 'red',

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
      weight: '400',
    },
    heading: {
      family: `'Roboto', sans-serif`,
      size: '36px',
      weight: '500',
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
  },
};

export default darkTheme;
