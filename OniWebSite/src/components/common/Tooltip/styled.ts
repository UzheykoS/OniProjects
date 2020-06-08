import styled from 'styled-components';
import colors from '@constants/colors';
import { Tooltip } from '@material-ui/core';

export const TooltipStyled = styled(Tooltip).attrs({
  classes: {
    popper: 'popper',
  },
})`
  &.popper {
    background-color: ${colors.primary.white};
    color: ${colors.primary.grey};
    /* box-shadow: theme.shadows[1]; */
    font-size: 12px;
  }
`;
