import type { Parameters } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './themes';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: theme.light,
      dark: theme.dark,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
