import React, { FC, useState } from 'react';
import ModalWrapper, { ModalFormProps } from '@components/ModalWrapper';
import { Typography } from '@material-ui/core';
import { useStyles, SelectedMixWrapper, SelectedMixWrapperCell } from './style';
import DialogMacaronIcon from '@icons/dialog-macaron-icon.svg';
import { IProduct } from '@constants/products';
import { ImageWithFallback } from '@common/ImageWithFallback';

interface IMixSelectModalModalProps extends ModalFormProps {
  mix: IProduct;
  confirmAdd: () => void;
  cancelModal: () => void;
}
const MixSelectModal: FC<IMixSelectModalModalProps> = ({
  mix,
  confirmAdd,
  closeModal,
  cancelModal,
  open,
}) => {
  const classes = useStyles();
  const [quantity] = useState(1);

  return (
    <ModalWrapper
      title='Выбор вкусов'
      open={open}
      onClose={closeModal}
      onCancel={cancelModal}
      onSubmit={confirmAdd}
      saveButtonLabel='Добавить'
      cancelButtonLabel='Собрать самому'
      icon={
        <div className={classes.icon}>
          <DialogMacaronIcon />
        </div>
      }
    >
      <Typography className={classes.text} variant={'h3'}>
        Отличный выбор
      </Typography>
      <Typography className={classes.text} variant={'body2'}>
        Мы подберём для Вас разные вкусы, но Вы также можете выбрать их сами!
      </Typography>
      <SelectedMixWrapper>
        <SelectedMixWrapperCell>
          <ImageWithFallback src={mix.imageUrl} />
        </SelectedMixWrapperCell>
        <SelectedMixWrapperCell>
          <Typography variant='body1'>{mix.id}</Typography>
          <Typography variant='body1'>{quantity}</Typography>
          <Typography variant='body1'>
            {`${Number(mix.price) * quantity} грн.`}
          </Typography>
        </SelectedMixWrapperCell>
      </SelectedMixWrapper>
    </ModalWrapper>
  );
};

export default MixSelectModal;
