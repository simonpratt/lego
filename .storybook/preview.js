import * as React from "react";
import { addDecorator } from '@storybook/react';
import { withThemesProvider } from "storybook-addon-styled-component-theme";

import defaultTheme from '../src/theme/default.theme'
import darkTheme from '../src/theme/dark.theme'
import { GlobalStyle } from './globalStyle';

const themes = [defaultTheme, darkTheme]

addDecorator(withThemesProvider(themes));
addDecorator(style => <><GlobalStyle />{style()}</>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}