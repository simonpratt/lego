import { DefaultTheme } from 'styled-components';

export default (theme: DefaultTheme) => {
  return {
    background: theme.colours.controlBackground,
    border: theme.colours.controlBorder,
    borderFocus: theme.colours.controlBorderFocus,
    borderHover: theme.colours.controlBorderHover,
    font: theme.colours.controlFont,
    placeholder: theme.colours.controlPlaceholder,
  };
};
