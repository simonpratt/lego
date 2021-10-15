// styled.d.ts
import 'styled-components';

interface IPalette {
  main: string;
  hover: string;
  contrastText: string;
}

interface IStatus {
  main: string;
  contrast: string;
}

interface IFont {
  family: string;
  size: string;
  weight: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
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
}
