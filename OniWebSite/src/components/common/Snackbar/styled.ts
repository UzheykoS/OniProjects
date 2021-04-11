import styled from 'styled-components';
import { Alert as MuiAlert } from '@material-ui/lab';
import { SnackbarContent } from '@material-ui/core';

export const MuiAlertStyled = styled(MuiAlert).attrs({
  classes: {
    icon: 'icon',
  },
})<any>`
  .icon {
    align-self: center;
  }
`;

export const StyledSnackbarContent = styled(SnackbarContent).attrs({
  classes: {
    root: 'root',
  },
})`
  &.root {
    justify-content: center;
  }
`;
