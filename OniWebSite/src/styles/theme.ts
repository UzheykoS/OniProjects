import { createMuiTheme } from '@material-ui/core/styles';
import colors from '@constants/colors';

export default createMuiTheme({
  overrides: {
    MuiButton: {
      contained: {
        boxShadow: 'none',
      },
      containedSecondary: {
        backgroundColor: colors.primary.white,
        '&:hover': {
          backgroundColor: colors.secondary.gold,
        },
      },
    },
  },
  palette: {
    primary: {
      main: colors.primary.gold,
      contrastText: colors.primary.white,
    },
    secondary: {
      main: colors.primary.gold,
      contrastText: colors.primary.black,
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Yeseva One', sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 500,
    button: {
      height: '52px',
      width: '203px',
      borderRadius: 25,
    },
    h1: {
      fontFamily: 'Yeseva One',
      fontWeight: 500,
      fontSize: 68,
    },
    h2: {
      fontFamily: 'Yeseva One',
      fontWeight: 500,
      fontSize: 64,
    },
    h3: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: 16,
      color: colors.secondary.gold,
    },
    body1: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: 16,
    },
    body2: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: 11,
      opacity: 0.6,
    },
    caption: {
      fontFamily: 'Yeseva One',
      fontWeight: 400,
      fontSize: 16,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
