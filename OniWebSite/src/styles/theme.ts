import { createMuiTheme } from '@material-ui/core/styles';
import colors from '@constants/colors';

const theme = createMuiTheme({
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
      fontWeight: 400,
      fontSize: 46,
      color: colors.primary.black,
      whiteSpace: 'pre-line',
    },
    h2: {
      fontFamily: 'Yeseva One',
      fontWeight: 500,
      whiteSpace: 'pre-line',
      fontSize: '4rem',
      '@media (max-width:1224px)': {
        fontSize: '26px',
        lineHeight: '38px',
      },
    },
    h3: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      letterSpacing: '5px',
      color: colors.secondary.gold,
      fontSize: '1rem',
      '@media (max-width:1224px)': {
        fontSize: '13px',
      },
    },
    body1: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: 'pre-line',
      '@media (max-width:1224px)': {
        fontSize: 12,
        lineHeight: '19px',
      },
    },
    body2: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: 11,
      opacity: 0.6,
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

export default theme;
