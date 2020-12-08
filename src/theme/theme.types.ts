export interface ITheme {
  name: string;
  colours: {
    primary: string;
    secondary: string;
    textOnPrimary: string;
    textOnSecondary: string;

    controlBorder: string;
    controlBorderFocus: string;
    controlBorderHover: string;
    controlFont: string;
    controlPlaceholder: string;
  };
  fonts: {
    default: string;
  };
}

export interface IPropsWithTheme {
  theme: ITheme;
}

export type ColourVariant = 'primary' | 'secondary';
