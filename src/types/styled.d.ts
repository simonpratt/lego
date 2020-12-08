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

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colours: {
      background: string;
      overlayBackground: string;

      primary: IPalette;
      secondary: IPalette;

      defaultFont: string;

      controlBorder: string;
      controlBorderFocus: string;
      controlBorderHover: string;
      controlFont: string;
      controlPlaceholder: string;

      statusInfo: IStatus;
      statusSuccess: IStatus;
      statusWarn: IStatus;
      statusDanger: IStatus;
    };
    fonts: {
      default: string;
    };
  }
}
