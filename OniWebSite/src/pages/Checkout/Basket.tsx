import React from 'react';
import {
  BasketWrapper,
  BasketButtonWrapper,
  ContinueShopping,
  CheckoutHeaderWrapper,
  BasketTable,
  BasketHeader,
  BasketHeaderCell,
  ProceedSection,
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
  removeFromBasket: (item: IBasketItem) => void;
}

export function Basket({
  items,
  confirmCheckout,
  removeFromBasket,
}: IBasketProps) {
  const history = useHistory();
  const handleBackClick = () => {
    history.goBack();
  };

  const handleContinueShoppingClick = () => {
    history.push('/products');
  };

  const handleCheckoutClick = () => {
    confirmCheckout();
  };
  let totalPrice = items.reduce((accumulator, currentValue) => {
    accumulator += Number(currentValue.product.price) * currentValue.quantity;
    return accumulator;
  }, 0);

  return (
    <BasketWrapper>
      <CheckoutHeaderWrapper>
        <IconButton
          onClick={handleBackClick}
          style={{ position: 'absolute', left: '-100px', top: '15px' }}
        >
          <ChevronLeftIcon />
        </IconButton>
        <Typography variant='h2'>Корзина</Typography>
      </CheckoutHeaderWrapper>
      <Typography variant='body1'>
        Минимальная стоимость заказа для доставки курьером составляет 200 грн.
      </Typography>
      <BasketTable>
        <BasketHeader>
          <BasketHeaderCell>
            <Typography variant={'body2'}>Фото</Typography>
          </BasketHeaderCell>
          <BasketHeaderCell>
            <Typography variant={'body2'}>Название</Typography>
          </BasketHeaderCell>
          <BasketHeaderCell>
            <Typography variant={'body2'}>Количество</Typography>
          </BasketHeaderCell>
          <BasketHeaderCell>
            <Typography variant={'body2'}>Цена</Typography>
          </BasketHeaderCell>
        </BasketHeader>
        {items.map((item, index) => {
          return (
            <BasketItem
              item={item}
              key={index}
              onRemoveItemClick={removeFromBasket}
            />
          );
        })}
      </BasketTable>

      <BasketButtonWrapper>
        <ContinueShopping variant='body2' onClick={handleContinueShoppingClick}>
          ПРОДОЛЖИТЬ ПОКУПКИ
        </ContinueShopping>
        <ProceedSection>
          <Typography variant='body1'>Итого:</Typography>
          <Typography variant='h3' style={{ marginLeft: '30px' }}>
            {`${totalPrice} грн.`}
          </Typography>
          <Button
            rounded
            onClick={handleCheckoutClick}
            style={{ marginLeft: '50px' }}
          >
            ОФОРМИТЬ
          </Button>
        </ProceedSection>
      </BasketButtonWrapper>
    </BasketWrapper>
  );
}
