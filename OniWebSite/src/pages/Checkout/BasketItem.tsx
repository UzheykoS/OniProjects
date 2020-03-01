import React from 'react';
import { BasketItemWrapper, BasketItemWrapperCell } from './styled';
import { IBasketItem } from '@hooks/useBasket';
import { Typography, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

interface IBasketItemProps {
  item: IBasketItem;
  onRemoveItemClick: (item: IBasketItem) => void;
}

export function BasketItem({ item, onRemoveItemClick }: IBasketItemProps) {
  const { product, quantity } = item;
  return (
    <BasketItemWrapper>
      <BasketItemWrapperCell>
        <img src={product.imageUrl} />
      </BasketItemWrapperCell>
      <BasketItemWrapperCell>
        <Typography variant='body1'>{product.id}</Typography>
      </BasketItemWrapperCell>
      <BasketItemWrapperCell>
        <Typography variant='body1'>{quantity}</Typography>
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
