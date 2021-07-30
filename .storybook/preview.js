import * as React from "react";
import { addDecorator } from '@storybook/react';
import { withThemesProvider } from "storybook-addon-styled-component-theme";

import defaultTheme from '../src/theme/default.theme'
import darkTheme from '../src/theme/dark.theme'
import { GlobalStyle } from './globalStyle';

const themes = [darkTheme, defaultTheme]

addDecorator(withThemesProvider(themes));
addDecorator(style => <><GlobalStyle />{style()}</>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'dark',
    values: [{
      name: 'light',
      value: defaultTheme.colours.background
    },{
      name: 'dark',
      value: darkTheme.colours.background
    }]
  }
}