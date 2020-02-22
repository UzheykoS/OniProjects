import React, { FC } from 'react';
import { useStyles } from './style';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fade,
  IconButton,
} from '@material-ui/core/';
import { Button } from '@common/Button';
import CloseIcon from '@material-ui/icons/Close';

interface ModalWrapperProps {
  title: string;
  open: boolean;
  onClose: () => void;
  submitting?: boolean;
  disabled?: boolean;
  onSubmit: () => void;
  saveButtonLabel?: string;
  cancelButtonLabel?: string;
  showCancelButton?: boolean;
  icon?: React.ReactElement;
}

export interface ModalFormProps {
  closeModal: () => void;
  open: boolean;
}

const ModalWrapper: FC<ModalWrapperProps> = ({
  title,
  children,
  open,
  onClose,
  submitting = false,
  disabled = false,
  onSubmit,
  saveButtonLabel = 'Продолжить',
  cancelButtonLabel = 'Отменить',
  showCancelButton = true,
  icon,
}) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      TransitionComponent={Fade}
      onClose={onClose}
      classes={{
        paper: classes.modal,
      }}
      tabIndex={-1}
    >
      <DialogTitle disableTypography classes={{ root: classes.title }}>
        {title}
        <IconButton className={classes.closeIconWrapper} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      {icon}
      <DialogContent>{children}</DialogContent>
      <DialogActions className={classes.dialogActionsWrapper}>
        <Button
          onClick={onSubmit}
          color='primary'
          disabled={disabled}
          tabIndex={0}
          rounded
          className={classes.saveBtn}
        >
          {saveButtonLabel}
        </Button>
        {showCancelButton && (
          <Button
            disabled={submitting}
            onClick={onClose}
            color='secondary'
            tabIndex={0}
            rounded
          >
            {cancelButtonLabel}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ModalWrapper;
