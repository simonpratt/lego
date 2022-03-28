export type ColourVariant = 'primary' | 'secondary' | 'tertiary';
export type Status = 'info' | 'success' | 'warn' | 'danger';

export interface IPalette {
  main: string;
  hover: string;
  contrastText: string;
}

export interface IStatus {
  main: string;
  contrast: string;
}

export interface IFont {
  family: string;
  size: string;
  weight: string;
}

export interface LegoTheme {
  name: string;
  colours: {
    background: string;
    overlayBackground: string;

    primary: IPalette;
    secondary: IPalette;
    tertiary: IPalette;

    defaultFont: string;
    secondaryFont: string;
    secondaryFontHover: string;

    defaultBorder: string;
    faintBorder: string;

    controlBackground: string;
    controlBorder: string;
    controlBorderFocus: string;
    controlBorderHover: string;
    controlPlaceholder: string;

    uploadBackground: string;
    uploadIcon: string;

    cardBackground: string;

    statusInfo: IStatus;
    statusSuccess: IStatus;
    statusWarn: IStatus;
    statusDanger: IStatus;
  };
  fonts: {
    default: IFont;
    heading: IFont;
    subHeading: IFont;
  };
  shadows: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  };
}
