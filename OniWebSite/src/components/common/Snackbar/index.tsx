import React from 'react';
import { Alert as MuiAlert, AlertTitle, AlertProps } from '@material-ui/lab';
import { Snackbar as MUISnackbar } from '@material-ui/core';
import { SnackbarType } from '@hooks/useSnackbar';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant='standard' {...props} />;
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
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClose={handleClose}
    >
      {!!message ? (
        <Alert
          onClose={handleClose}
          severity={type || 'success'}
          style={{ whiteSpace: 'pre-line' }}
        >
          <AlertTitle>{title}</AlertTitle>
          {message}
        </Alert>
      ) : (
        <div /> // prevents empty alert on close transition
      )}
    </MUISnackbar>
  );
};
