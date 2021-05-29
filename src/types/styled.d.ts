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
  }
}
