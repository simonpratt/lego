export type ScreenSize = 'mobile' | 'tablet' | 'desktop' | 'wide';

const responsiveScreens = {
  mobile: {
    min: 0,
    max: 480,
  },
  tablet: {
    min: 481,
    max: 768,
  },
  desktop: {
    min: 769,
    max: 1200,
  },
  wide: {
    min: 1201,
    max: 3840,
  },
};

export interface IStyleBoundFunctions {
  andSmaller: (styled: string | TemplateStringsArray, ...templateArgs: any) => string;
  andLarger: (styled: string | TemplateStringsArray, ...templateArgs: any) => string;
  only: (styled: string | TemplateStringsArray, ...templateArgs: any) => string;
}

function useStylesFor(screenSize: ScreenSize): IStyleBoundFunctions {
  if (!screenSize) {
    return {
      andSmaller: () => '',
      andLarger: () => '',
      only: () => '',
    };
  }

  const screenDefinition = responsiveScreens[screenSize];

  if (!screenDefinition) {
    return {
      andSmaller: () => '',
      andLarger: () => '',
      only: () => '',
    };
  }

  return {
    andSmaller: (styles: any) => `
      @media only screen and (max-width: ${screenDefinition.max}px) {
        ${styles}
      }
    `,
    andLarger: (styles: any) => `
      @media only screen and (min-width: ${screenDefinition.min}px) {
        ${styles}
      }
    `,
    only: (styles: any) => `
      @media only screen and (min-width: ${screenDefinition.min}px) and (max-width: ${screenDefinition.max}px) {
        ${styles}
      }
    `,
  };
}

function getWidthFor(screenSize: ScreenSize): string {
  if (!screenSize) {
    return '';
  }

  const screenDefinition = responsiveScreens[screenSize];

  if (!screenDefinition) {
    return '';
  }

  return `${screenDefinition.max}px`;
}

export default { useStylesFor, getWidthFor };
