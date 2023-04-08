import { LegoTheme } from './theme.types';

const darkTheme: LegoTheme = {
  name: 'dark',
  colours: {
    background: '#424448',
    overlayBackground: '#a4caf9',

    primary: {
      main: '#94b8e3', // #61a4f5
      hover: '#83b7f7',
      contrastText: '#191919',
    },
    secondary: {
      main: '#424448',
      hover: '#4b4e54',
      contrastText: '#e2e2e2',
    },
    tertiary: {
      main: '#4b4e54',
      hover: '#575b63',
      contrastText: '#e2e2e2',
    },

    defaultFont: '#e2e2e2',
    secondaryFont: '#adabab',
    secondaryFontHover: '##989898',

    defaultBorder: '#989898',
    faintBorder: '#cccccc1f',

    controlBackground: '#5e6167',
    controlBackgroundDisabled: '#47494d',
    controlBorder: '#565656',
    controlBorderFocus: '#4289de',
    controlBorderHover: '#4a4949',
    controlPlaceholder: '#949494',
    controlDescriptionColour: '#cbcbcb',

    uploadBackground: '#5e6167',
    uploadIcon: '#e2e2e2',

    cardBackground: '#494b50',
    cardBackgroundSecondary: '#525459',

    statusInfo: {
      main: '#83bfff',
      contrast: '#191919',
      dull: '#0070e8',
      hover: '#8fc5ff',
    },
    statusSuccess: {
      main: '#8ddaa9',
      contrast: '#191919',
      dull: '#35a35d',
      hover: '#98deb2',
    },
    statusWarn: {
      main: '#f1a374',
      contrast: '#191919',
      dull: '#c35514',
      hover: '#f2ac82',
    },
    statusDanger: {
      main: '#e87a7a',
      contrast: '#191919',
      dull: '#b51f1f',
      hover: '#ea8787',
    },
  },
  fonts: {
    emphasis: {
      family: `'Roboto', sans-serif`,
      size: '14px',
      weight: '400',
    },
    default: {
      family: `'Roboto', sans-serif`,
      size: '16px',
      weight: '400',
    },
    heading: {
      family: `'Roboto', sans-serif`,
      size: '28px',
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
    large: '0px 0px 8px rgba(0, 0, 0, 0.15)',
    xlarge: '0px 0px 16px rgba(0, 0, 0, 0.25)',
  },
};

export default darkTheme;
