import styled from 'styled-components';
import { Alert as MuiAlert } from '@material-ui/lab';

export const MuiAlertStyled = styled(MuiAlert).attrs({
  classes: {
    icon: 'icon',
  },
})<any>`
  .icon {
    align-self: center;
  }
`;
