import { createTheme, lighten } from '@mui/material/styles';
import { teal, orange } from '@mui/material/colors';

const light = createTheme({
  palette: {
    primary: teal,
    secondary: orange,
  },
});
const dark = createTheme({
  ...light,
  palette: {
    ...light.palette.primary,
    primary: {
      main: lighten(light.palette.primary.main, 0.4),
    },
    secondary: {
      ...light.palette.secondary,
      main: lighten(light.palette.secondary.main, 0.4),
    },
    mode: 'dark',
  },
});

export default {
  light,
  dark,
};
