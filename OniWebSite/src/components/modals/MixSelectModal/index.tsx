import React, { FC, useState } from 'react';
import ModalWrapper, { ModalFormProps } from '@components/ModalWrapper';
import { Typography, useMediaQuery } from '@material-ui/core';
import { IProduct } from '@constants/products';
import { ImageWithFallback } from '@common/ImageWithFallback';
import { Flex } from '@styles/styled';
import colors from '@constants/colors';
import QuantityEditor from '@common/QuantityEditor';
import { BREAKPOINT } from '@constants';

interface IMixSelectModalModalProps extends ModalFormProps {
  mix: IProduct;
  confirmAdd: (quantity: number) => void;
  cancelModal: (mix: IProduct) => void;
}
const MixSelectModal: FC<IMixSelectModalModalProps> = ({
  mix,
  confirmAdd,
  closeModal,
  cancelModal,
  open,
}) => {
  const [quantity, setQuantity] = useState(1);
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);

  return (
    <ModalWrapper
      title='Отличный выбор'
      open={open}
      onClose={closeModal}
      onCancel={() => cancelModal(mix)}
      onSubmit={() => confirmAdd(quantity)}
      saveButtonLabel='Добавить'
      cancelButtonLabel='Собрать самому'
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
        Мы подберём для Вас разные вкусы, но Вы также можете выбрать их сами!
      </Typography>
      <Flex
        justifyAround
        style={{ padding: '30px 0px' }}
        direction={isMobile ? 'column' : 'row'}
      >
        <Flex>
          <ImageWithFallback
            src={mix.imageUrl}
            style={{ width: '210px', height: 'auto', alignItems: 'center' }}
          />
        </Flex>
        <Flex
          direction='column'
          justifyCenter
          style={{ marginTop: isMobile ? 30 : undefined }}
        >
          <Flex>
            <Typography
              variant='body1'
              style={{ fontWeight: 600, marginRight: 20 }}
            >{`${mix.type} (Ассорти)`}</Typography>
            <Typography
              variant='body1'
              style={{ fontWeight: 600 }}
            >{`${mix.id}`}</Typography>
          </Flex>
          <Flex style={{ margin: '10px 0' }}>
            <Typography
              variant='body1'
              style={{
                fontSize: '13px',
                fontWeight: 400,
                opacity: 0.6,
                alignSelf: 'center',
                marginRight: 15,
              }}
            >
              Количество
            </Typography>
            <QuantityEditor
              quantity={quantity}
              handleIncreaseQuantity={() => setQuantity(quantity + 1)}
              handleDecreaseQuantity={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                }
              }}
            />
          </Flex>
          <Flex>
            <Typography
              variant='body1'
              style={{
                fontSize: '13px',
                fontWeight: 400,
                opacity: 0.6,
                alignSelf: 'center',
                marginRight: 15,
              }}
            >
              Цена
            </Typography>
            <Typography variant='body1' style={{ fontFamily: 'Yeseva One' }}>
              {`${Number(mix.price) * quantity} грн.`}
            </Typography>
          </Flex>
        </Flex>
      </Flex>
    </ModalWrapper>
  );
};

export default MixSelectModal;
