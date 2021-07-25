// styled.d.ts
import 'styled-components';

interface IPalette {
  main: string;
  contrastText: string;
}

interface IStatus {
  main: string;
  highlightText: string;
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

      defaultFont: string;
      secondaryFont: string;
      tertiaryFont: string;

      tertiaryFontHover: string;

      defaultBorder: string;

      controlBackground: string;
      controlBorder: string;
      controlBorderFocus: string;
      controlBorderHover: string;
      controlFont: string;
      controlPlaceholder: string;

      uploadBackground: string;
      uploadIcon: string;

      cardBackground: string;

      menuBackground: string;
      menuFont: string;
      menuHoverBackground: string;
      menuActive: string;

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
    };
  }
}
