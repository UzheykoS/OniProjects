import React from 'react';
import { BasketItemWrapper, BasketItemWrapperCell } from './styled';
import { IBasketItem } from '@hooks/useBasket';
import { Typography, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import { useSupportWebp } from '@common/ImageWithFallback/useSupportWebp';
import QuantityEditor from '@common/QuantityEditor';

interface IBasketItemProps {
  item: IBasketItem;
  onRemoveItemClick: (item: IBasketItem) => void;
  handleIncreaseQuantity: (item: IBasketItem) => void;
  handleDecreaseQuantity: (item: IBasketItem) => void;
}

export function BasketItem({
  item,
  onRemoveItemClick,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}: IBasketItemProps) {
  const { product, quantity } = item;
  const { supports } = useSupportWebp();
  return (
    <BasketItemWrapper>
      <BasketItemWrapperCell width={30}>
        <img
          src={
            supports ? `${product.imageUrl}.webp` : `${product.imageUrl}.jpg`
          }
        />
      </BasketItemWrapperCell>
      <BasketItemWrapperCell width={25}>
        <Typography variant='body1'>
          <b>{product.type}</b> {product.id}
        </Typography>
      </BasketItemWrapperCell>
      <BasketItemWrapperCell width={25}>
        <QuantityEditor
          quantity={quantity}
          handleIncreaseQuantity={() => handleIncreaseQuantity(item)}
          handleDecreaseQuantity={() => handleDecreaseQuantity(item)}
        />
      </BasketItemWrapperCell>
      <BasketItemWrapperCell width={20}>
        <Typography variant='body1'>
          {`${Number(product.price) * quantity} грн.`}
        </Typography>
        <IconButton onClick={() => onRemoveItemClick(item)}>
          <DeleteIcon />
        </IconButton>
      </BasketItemWrapperCell>
    </BasketItemWrapper>
  );
}
