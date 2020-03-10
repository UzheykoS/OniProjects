import React from 'react';
import styled from '@styled-components';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { up } from 'styled-breakpoints';

interface IStyledSnackbar {
  error?: boolean;
}

export const StyledSnackbar = styled(({ error, ...rest }) => (
  <Snackbar {...rest} />
)).attrs({
  classes: {
    anchorOriginTopCenter: 'topSnackbar',
    anchorOriginBottomLeft: 'bottomLeftSnackBar',
  },
})<IStyledSnackbar>`
  & > div {
    justify-content: center;
    padding: 0 24px;
    ${({ error }) =>
      error &&
      `
        background: linear-gradient(180deg, ##FF4444 0%, ##CA001C 100%)
      `}
  }

  &.topSnackbar {
    margin-top: 2rem;
    & button {
      padding: 1rem;
    }
    ${up('md')} {
      & > div {
        min-width: 480px;
      }
    }
  }
  &.bottomLeftSnackBar {
    bottom: 0px;
    left: calc(22.5% - 22.5rem);
    & > div {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      min-width: auto;
    }
    & button {
      padding: 1rem;
    }
  }
`;
interface IStyledSnackbarContent {
  error?: boolean;
}
export const StyledSnackbarContent = styled(({ error, ...rest }) => (
  <SnackbarContent {...rest} />
)).attrs({
  classes: {
    action: 'action',
    message: 'message',
  },
})<IStyledSnackbarContent>`
  .message {
    flex: 1;
    text-align: center;

    ${({ error }) =>
      error &&
      `
      display: flex;
      justify-content: center;
      align-items: center;
      
      & > p {
        width: 100%;
      }
    `}
  }
  & > .action {
    padding-left: 1.75rem;
    margin-right: -2rem;
  }
`;
