import React, { FC } from 'react';
import ModalWrapper, { ModalFormProps } from '@components/ModalWrapper';
import { Typography } from '@material-ui/core';
import colors from '@constants/colors';

interface ISurpriseMeModalModalProps extends ModalFormProps {
  confirmClick: () => void;
}
const SurpriseMeModal: FC<ISurpriseMeModalModalProps> = ({
  confirmClick,
  closeModal,
  open,
}) => {
  return (
    <ModalWrapper
      title=''
      open={open}
      onClose={closeModal}
      onCancel={closeModal}
      onSubmit={confirmClick}
      saveButtonLabel='Да'
      cancelButtonLabel='Нет'
    >
      <Typography
        style={{
          color: colors.secondary.dark,
          opacity: 0.9,
          fontSize: 18,
          lineHeight: '20px',
          textAlign: 'center',
        }}
        variant={'body2'}
      >
        Мы удалим выбранные вкусы и соберём набор на свой вкус. Согласны?
      </Typography>
    </ModalWrapper>
  );
};

export default SurpriseMeModal;
