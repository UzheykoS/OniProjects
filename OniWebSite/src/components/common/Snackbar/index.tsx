import React from 'react';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { Snackbar as MUISnackbar } from '@material-ui/core';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

interface IProps {
  message?: string;
  handleClose?: () => void;
}

export const Snackbar = ({ message, handleClose }: IProps) => {
  return (
    <MUISnackbar
      open={!!message}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity='success'>
        {message}
      </Alert>
    </MUISnackbar>
  );
};
