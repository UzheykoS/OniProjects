import React, { FC } from 'react';
import { useStyles, DialogActionsStyled } from './style';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Fade,
  IconButton,
} from '@material-ui/core/';
import { Button } from '@common/Button';
import CloseIcon from '@material-ui/icons/Close';
import { TextLink } from '@common/styled';

interface ModalWrapperProps {
  title: string;
  open: boolean;
  onClose: () => void;
  onCancel?: () => void;
  submitting?: boolean;
  disabled?: boolean;
  onSubmit?: () => void;
  saveButtonLabel?: string;
  cancelButtonLabel?: string;
  showCancelButton?: boolean;
  icon?: React.ReactElement;
  fullWidth?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showButtons?: boolean;
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
  onCancel,
  submitting = false,
  disabled = false,
  onSubmit,
  saveButtonLabel = 'Продолжить',
  cancelButtonLabel = 'Отменить',
  showCancelButton = true,
  icon,
  fullWidth,
  maxWidth,
  showButtons = true,
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
      fullWidth={fullWidth}
      tabIndex={-1}
      maxWidth={maxWidth}
    >
      <DialogTitle disableTypography classes={{ root: classes.title }}>
        {title}
        <IconButton className={classes.closeIconWrapper} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      {icon}
      <DialogContent>{children}</DialogContent>
      {showButtons && (
        <DialogActionsStyled>
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
            <TextLink
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                letterSpacing: '3px',
                color: '#1E2F42',
                marginRight: 40,
                opacity: 1,
                alignSelf: 'center',
              }}
              tabIndex={0}
              disabled={submitting}
              onClick={onCancel ? onCancel : onClose}
            >
              {cancelButtonLabel}
            </TextLink>
          )}
        </DialogActionsStyled>
      )}
    </Dialog>
  );
};

export default ModalWrapper;
