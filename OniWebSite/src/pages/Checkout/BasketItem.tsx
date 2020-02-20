import React from 'react';
import { BasketItemWrapper, BasketItemWrapperCell } from './styled';
import { IBasketItem } from '@hooks/useBasket';
import { Typography, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

interface IBasketItemProps {
  item: IBasketItem;
}

export function BasketItem({ item }: IBasketItemProps) {
  return (
    <BasketItemWrapper>
      <BasketItemWrapperCell>
        <img src={item.imageUrl} />
      </BasketItemWrapperCell>
      <BasketItemWrapperCell>
        <Typography variant='body1'>{item.name}</Typography>
      </BasketItemWrapperCell>
      <BasketItemWrapperCell>
        <Typography variant='body1'>{item.quantity}</Typography>
      </BasketItemWrapperCell>
      <BasketItemWrapperCell>
        <Typography variant='body1'>
          {`${Number(item.type) * item.quantity} грн.`}
        </Typography>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </BasketItemWrapperCell>
    </BasketItemWrapper>
  );
}
