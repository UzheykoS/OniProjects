import styled from 'styled-components';
import { IconButton, IconButtonProps } from '@material-ui/core';

export const IconButtonStyled = styled(IconButton)<IconButtonProps>`
  &:focus {
    outline: none;
  }
`;
