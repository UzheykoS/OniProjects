import React from 'react';
import ButtonComponent, { ButtonProps } from '@material-ui/core/Button';
import styled from 'styled-components';
import colors from '@constants/colors';

export interface IButtonProps extends ButtonProps {
  rounded?: boolean;
}

export const Button = styled(
  ({ rounded, variant = 'contained', color = 'primary', ...rest }: any) => (
    <ButtonComponent
      variant={variant}
      color={color}
      disableFocusRipple
      disableRipple
      // disableElevation // shadow
      {...rest}
    />
  )
).attrs({
  classes: {
    containedPrimary: 'containedPrimary',
  },
})<IButtonProps>`
  border-radius: 0px;
  ${({ rounded }) =>
    rounded &&
    `
      border-radius: 50px;
    `}
  &.containedPrimary {
    outline: none;
    &:hover {
      background-color: ${colors.primary.white};
      color: ${colors.primary.black};
      border: 1px solid ${colors.primary.gold};
    }
  }
`;
