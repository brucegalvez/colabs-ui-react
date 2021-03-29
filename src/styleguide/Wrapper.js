import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../defaultTheme';

export default function Wrapper({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
