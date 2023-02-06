import * as React from 'react';
import { DarkThemeProvider } from '../src';
import { GlobalStyle } from './globalStyle';

export const decorators = [
  (Story) => (
    <>
      <DarkThemeProvider>
        <Story />
      </DarkThemeProvider>
    </>
  ),
];
