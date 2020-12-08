import { DefaultTheme } from 'styled-components';
import { ColourVariant } from '../theme.types';

export default (variant: ColourVariant, theme: DefaultTheme) => {
  switch (variant) {
    case 'secondary':
      return {
        background: theme.colours.secondary.main,
        font: theme.colours.secondary.contrastText,
      };
    case 'primary':
    default:
      return {
        background: theme.colours.primary.main,
        font: theme.colours.primary.contrastText,
      };
  }
};
