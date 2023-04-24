import { DefaultTheme } from 'styled-components';
import { ColourVariant } from '../theme.types';

export default (variant: ColourVariant, theme: DefaultTheme) => {
  switch (variant) {
    case 'tertiary':
      return theme.colours.tertiary;
    case 'secondary':
      return theme.colours.secondary;
    case 'primary':
    default:
      return theme.colours.primary;
  }
};
