import React from 'react';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useStore } from '@hooks';
import { observer } from 'mobx-react-lite';
import ErrorIcon from '@material-ui/icons/ErrorOutline';

import { StyledSnackbar, StyledSnackbarContent } from './styled';

function Snackbar() {
  const { snackbar } = useStore();

  const anchorOrigin = {
    horizontal: snackbar.showOnLeft ? 'left' : 'center',
    vertical: snackbar.showOnBottom ? 'bottom' : 'top',
  };

  function handleClose() {
    snackbar.hideSnackBar();
  }

  return (
    <StyledSnackbar
      id='snackbar'
      error={snackbar.isError}
      open={snackbar.isOpen}
      onClose={handleClose}
      autoHideDuration={snackbar.keepOpen ? undefined : 3000}
      anchorOrigin={anchorOrigin}
    >
      <StyledSnackbarContent
        error={snackbar.isError}
        message={
          <>
            {snackbar.isError && <ErrorIcon />}
            <Typography color={'inherit'}>{snackbar.message}</Typography>
          </>
        }
        action={[
          <IconButton
            key='close'
            aria-label='Close'
            color='inherit'
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </StyledSnackbar>
  );
}

export default observer(Snackbar);
