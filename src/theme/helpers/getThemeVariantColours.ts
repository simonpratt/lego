import { ColourVariant, ITheme } from '../theme.types';

export default (variant: ColourVariant, theme: ITheme) => {
  switch (variant) {
    case 'secondary':
      return {
        background: theme.colours.secondary,
        font: theme.colours.textOnSecondary,
      };
    case 'primary':
    default:
      return {
        background: theme.colours.primary,
        font: theme.colours.textOnPrimary,
      };
  }
};
