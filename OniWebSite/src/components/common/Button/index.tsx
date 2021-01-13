import React from 'react';
import ButtonComponent, { ButtonProps } from '@material-ui/core/Button';
import styled from 'styled-components';
import colors from '@constants/colors';

export interface IButtonProps extends ButtonProps {
  rounded?: boolean;
  small?: boolean;
}

export const Button = styled(
  ({
    rounded,
    small,
    variant = 'contained',
    color = 'primary',
    ...rest
  }: any) => (
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
    containedSecondary: 'containedSecondary',
    root: 'root',
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
  &.containedSecondary {
    outline: none;
    border: 1px solid ${colors.primary.gold};
  }
  ${({ small }) =>
    small
      ? `
      &.root {
        height: 50px;
        width: 150px;
      }
  `
      : `
      &.root {
        height: 50px;
        width: 180px;
      }
      `}
`;
