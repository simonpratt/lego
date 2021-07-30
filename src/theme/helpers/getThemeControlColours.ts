import { DefaultTheme } from 'styled-components';

export default (theme: DefaultTheme) => {
  return {
    font: theme.colours.defaultFont,
    background: theme.colours.controlBackground,
    border: theme.colours.controlBorder,
    borderFocus: theme.colours.controlBorderFocus,
    borderHover: theme.colours.controlBorderHover,
    placeholder: theme.colours.controlPlaceholder,
  };
};
