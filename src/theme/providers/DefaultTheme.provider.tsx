import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Themes } from '../..';
import BodyStyle from '../../global/BodyStyle.component';

export interface DefaultThemeProviderProps {
  children: React.ReactNode;
}

const DefaultThemeProvider = ({ children }: DefaultThemeProviderProps) => (
  <ThemeProvider theme={Themes.default}>
    <BodyStyle />
    {children}
  </ThemeProvider>
);

export default DefaultThemeProvider;
