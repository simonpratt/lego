import { ITheme } from '../theme.types';

export default (theme: ITheme) => {
  return {
    border: theme.colours.controlBorder,
    borderFocus: theme.colours.controlBorderFocus,
    borderHover: theme.colours.controlBorderHover,
    font: theme.colours.controlFont,
    placeholder: theme.colours.controlPlaceholder,
  };
};
