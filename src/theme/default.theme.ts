import colours from '../colours/colours';
import { ITheme } from './theme.types';

const theme: ITheme = {
  name: 'default',
  colours: {
    primary: colours.grey70,
    secondary: colours.yellow,
    textOnPrimary: colours.grey10,
    textOnSecondary: colours.grey90,

    controlBorder: colours.grey20,
    controlBorderFocus: colours.grey50,
    controlBorderHover: colours.grey30,
    controlFont: colours.grey90,
    controlPlaceholder: colours.grey30,
  },
  fonts: {
    default: `'Roboto', sans-serif`,
  },
};

export default theme;
