import React from 'react';
import { BasketItemWrapper, BasketItemWrapperCell } from './styled';
import { IBasketItem } from '@hooks/useBasket';
import { Typography, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
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
      <BasketItemWrapperCell>
        <img
          src={
            supports ? `${product.imageUrl}.webp` : `${product.imageUrl}.jpg`
          }
        />
      </BasketItemWrapperCell>
      <BasketItemWrapperCell>
        <Typography variant='body1'>{product.id}</Typography>
      </BasketItemWrapperCell>
      <BasketItemWrapperCell>
        <QuantityEditor
          quantity={quantity}
          handleIncreaseQuantity={() => handleIncreaseQuantity(item)}
          handleDecreaseQuantity={() => handleDecreaseQuantity(item)}
        />
      </BasketItemWrapperCell>
      <BasketItemWrapperCell>
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
