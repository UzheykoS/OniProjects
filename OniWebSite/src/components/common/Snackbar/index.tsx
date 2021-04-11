import React from 'react';
import { AlertTitle, AlertProps } from '@material-ui/lab';
import { Slide, Snackbar as MUISnackbar } from '@material-ui/core';
import { SnackbarType } from '@hooks/useSnackbar';
import { MuiAlertStyled, StyledSnackbarContent } from './styled';
import { TransitionProps } from '@material-ui/core/transitions';

function Alert(props: AlertProps) {
  return <MuiAlertStyled elevation={6} variant='standard' {...props} />;
}

function SlideTransition(props: TransitionProps) {
  return <Slide {...props} direction='up' />;
}

interface IProps {
  title?: string;
  message?: string;
  type?: SnackbarType;
  handleClose?: () => void;
}

export const Snackbar = ({ message, type, title, handleClose }: IProps) => {
  return (
    <MUISnackbar
      open={!!message}
      autoHideDuration={type === SnackbarType.Info ? null : 6000}
      anchorOrigin={{
        vertical: type === SnackbarType.Message ? 'bottom' : 'top',
        horizontal: 'center',
      }}
      TransitionComponent={SlideTransition}
      onClose={handleClose}
    >
      {!!message ? (
        type === SnackbarType.Message ? (
          <StyledSnackbarContent message={message} />
        ) : (
          <Alert
            onClose={handleClose}
            severity={type || 'success'}
            style={{ whiteSpace: 'pre-line', fontSize: 16 }}
          >
            <AlertTitle>{title}</AlertTitle>
            {message}
          </Alert>
        )
      ) : (
        <div /> // prevents empty alert on close transition
      )}
    </MUISnackbar>
  );
};
