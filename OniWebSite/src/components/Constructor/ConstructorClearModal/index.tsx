import React, { FC } from 'react';
import ModalWrapper, { ModalFormProps } from '@components/ModalWrapper';
import { Typography } from '@material-ui/core';
import { useStyles } from './style';
import DialogMacaronIcon from '@icons/dialog-macaron-icon.svg';

interface IConstructorClearModalProps extends ModalFormProps {
  confirmClear: () => void;
}
const ConstructorClearModal: FC<IConstructorClearModalProps> = ({
  confirmClear,
  closeModal,
  open,
}) => {
  const classes = useStyles();

  return (
    <ModalWrapper
      title='Выбор вкусов'
      open={open}
      onClose={closeModal}
      onSubmit={confirmClear}
      saveButtonLabel='Очистить'
      cancelButtonLabel='Продолжить'
      icon={
        <div className={classes.icon}>
          <DialogMacaronIcon />
        </div>
      }
    >
      <Typography className={classes.text} variant={'body2'}>
        Вы собираетесь удалить все ранее добавленные товары, вы уверены?
      </Typography>
    </ModalWrapper>
  );
};

export default ConstructorClearModal;
