import React from 'react';
import {
  BasketWrapper,
  BasketButtonWrapper,
  ContinueShopping,
  CheckoutHeaderWrapper,
} from './styled';
import { Typography, IconButton } from '@material-ui/core';
import { BasketItem } from './BasketItem';
import { Button } from '@common/Button';
import { useHistory } from 'react-router';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { IBasketItem } from '@hooks/useBasket';

interface IBasketProps {
  items: IBasketItem[];
  confirmCheckout: () => void;
}

export function Basket({ items, confirmCheckout }: IBasketProps) {
  const history = useHistory();
  const handleBackClick = () => {
    history.goBack();
  };

  const handleContinueShoppingClick = () => {};
  const handleCheckoutClick = () => {
    confirmCheckout();
  };
  let totalPrice = 0;

  return (
    <BasketWrapper>
      <CheckoutHeaderWrapper>
        <IconButton onClick={handleBackClick}>
          <ChevronLeftIcon />
        </IconButton>
        <Typography variant='h2'>Корзина</Typography>
      </CheckoutHeaderWrapper>
      <Typography variant='body1'>
        Минимальная стоимость заказа для доставки курьером составляет 200 грн.
      </Typography>
      {items.map((item, index) => {
        return <BasketItem item={item} key={index} />;
      })}
      <BasketButtonWrapper>
        <ContinueShopping variant='body2' onClick={handleContinueShoppingClick}>
          ПРОДОЛЖИТЬ ПОКУПКИ
        </ContinueShopping>
        <div>
          <Typography variant='body1'>Итого:</Typography>
          <Typography variant='h3'>{`${totalPrice} грн.`}</Typography>
          <Button rounded onClick={handleCheckoutClick}>
            ОФОРМИТЬ
          </Button>
        </div>
      </BasketButtonWrapper>
    </BasketWrapper>
  );
}
