import { DefaultTheme } from 'styled-components';
import { ColourVariant } from '../theme.types';

export default (variant: ColourVariant, theme: DefaultTheme) => {
  switch (variant) {
    case 'tertiary':
      return {
        main: theme.colours.tertiary.main,
        hover: theme.colours.tertiary.hover,
        contrastText: theme.colours.tertiary.contrastText,
      };
    case 'secondary':
      return {
        main: theme.colours.secondary.main,
        hover: theme.colours.secondary.hover,
        contrastText: theme.colours.secondary.contrastText,
      };
    case 'primary':
    default:
      return {
        main: theme.colours.primary.main,
        hover: theme.colours.primary.hover,
        contrastText: theme.colours.primary.contrastText,
      };
  }
};
