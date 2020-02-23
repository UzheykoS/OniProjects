import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Button } from '@common/Button';
import { ImageWrapper } from './styled';

export interface IProps {
  closeModal: () => void;
  previewImageUrl: string;
}

export default function FullScreenImageDialog({
  previewImageUrl,
  closeModal,
}: IProps) {
  return (
    <Dialog
      fullWidth
      maxWidth={'md'}
      open={!!previewImageUrl}
      onClose={closeModal}
    >
      <DialogContent style={{ textAlign: 'center' }}>
        <ImageWrapper src={previewImageUrl} />
      </DialogContent>
      <DialogActions>
        <Button rounded onClick={closeModal} color='primary'>
          Закрыть
        </Button>
      </DialogActions>
    </Dialog>
  );
}
