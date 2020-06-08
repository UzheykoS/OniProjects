import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import { ImageWrapper } from './styled';
import ModalWrapper from '@components/ModalWrapper';

export interface IProps {
  closeModal: () => void;
  previewImageUrl: string;
  title: string;
}

export default function FullScreenImageDialog({
  previewImageUrl,
  title,
  closeModal,
}: IProps) {
  return (
    <ModalWrapper
      title={title}
      open={!!previewImageUrl}
      onClose={closeModal}
      fullWidth
      maxWidth={'md'}
      showButtons={false}
    >
      <DialogContent style={{ textAlign: 'center' }}>
        <ImageWrapper src={previewImageUrl} />
      </DialogContent>
    </ModalWrapper>
  );
}
