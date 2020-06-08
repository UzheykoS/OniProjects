import { makeStyles } from '@material-ui/core';
import colors from '@constants/colors';

export const useStyles = makeStyles({
  text: {
    opacity: 0.9,
    color: colors.secondary.dark,
    fontSize: '21px',
    lineHeight: '20px',
    textAlign: 'center',
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
  },
});
