import { DefaultTheme } from 'styled-components';

const darkTheme: DefaultTheme = {
  name: 'dark',
  colours: {
    background: '#424448',
    overlayBackground: '#a4caf9',

    primary: {
      main: '#61a4f5',
      hover: '#83b7f7',
      contrastText: '#191919',
    },
    secondary: {
      main: '#424448',
      hover: '#4b4e54',
      contrastText: '#e2e2e2',
    },

    defaultFont: '#e2e2e2',
    secondaryFont: '#adabab',
    secondaryFontHover: '##989898',

    defaultBorder: '#989898',

    controlBackground: '#5e6167',
    controlBorder: '#565656',
    controlBorderFocus: '#4289de',
    controlBorderHover: '#4a4949',
    controlPlaceholder: '#949494',

    uploadBackground: '#5e6167',
    uploadIcon: '#e2e2e2',

    cardBackground: '#494b50',

    statusInfo: {
      main: '#83bfff',
      contrast: '#191919',
    },
    statusSuccess: {
      main: '#8ddaa9',
      contrast: '#191919',
    },
    statusWarn: {
      main: '#f1a374',
      contrast: '#191919',
    },
    statusDanger: {
      main: '#e87a7a',
      contrast: '#191919',
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
