import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import colors from '@constants/colors';
import { DialogActions } from '@material-ui/core';

export const useStyles = makeStyles({
  modal: {
    // width: '100%',
    padding: '25px',
  },
  title: {
    fontFamily: 'Roboto',
    textTransform: 'uppercase',
    color: colors.secondary.gold,
    fontSize: '16px',
    letterSpacing: '5px',
    fontWeight: 400,
    padding: '24px 24px 16px 24px',
    alignSelf: 'center',
  },
  content: {
    overflow: 'hidden',
  },
  saveBtn: {
    order: 1,
  },
  closeIconWrapper: {
    position: 'absolute',
    right: '10px',
    top: '25px',
  },
});

export const DialogActionsStyled = styled(DialogActions).attrs({
  classes: {
    root: 'root',
  },
})`
  &.root {
    justify-content: space-around;
    margin-top: 10px;
  }
`;
