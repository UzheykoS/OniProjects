import React from 'react';
import {
  BasketWrapper,
  ContinueShopping,
  CheckoutHeaderWrapper,
  BasketTable,
  BasketHeader,
  BasketHeaderCell,
  TextLink,
  TotalMobile,
} from './styled';
import { Typography, IconButton, useMediaQuery } from '@material-ui/core';
import { BasketItem } from './BasketItem';
import { Button } from '@common/Button';
import { useHistory } from 'react-router';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { IBasketItem } from '@hooks/useBasket';
import { BREAKPOINT } from '@constants';
import { BasketItemMobile } from './BasketItemMobile';
import { Flex } from '@styles/styled';

interface IBasketProps {
  items: IBasketItem[];
  confirmCheckout: () => void;
  removeFromBasket: (item: IBasketItem) => void;
  handleIncreaseQuantity: (item: IBasketItem) => void;
  handleDecreaseQuantity: (item: IBasketItem) => void;
}

export function Basket({
  items,
  confirmCheckout,
  removeFromBasket,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}: IBasketProps) {
  const history = useHistory();
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);

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
        <IconButton onClick={handleBackClick}>
          <ChevronLeftIcon style={{ margin: isMobile ? 0 : 16 }} />
        </IconButton>
        {isMobile ? (
          <TextLink onClick={handleBackClick}>Назад</TextLink>
        ) : (
          <Typography variant='h2'>Корзина</Typography>
        )}
      </CheckoutHeaderWrapper>
      {isMobile && <Typography variant='h2'>Корзина</Typography>}
      <Typography variant='body1'>
        Минимальная стоимость заказа для доставки курьером составляет 200 грн.
      </Typography>
      <BasketTable>
        {!isMobile && (
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
        )}
        {items.map((item, index) => {
          return isMobile ? (
            <BasketItemMobile
              item={item}
              key={index}
              onRemoveItemClick={removeFromBasket}
              handleIncreaseQuantity={handleIncreaseQuantity}
              handleDecreaseQuantity={handleDecreaseQuantity}
            />
          ) : (
            <BasketItem
              item={item}
              key={index}
              onRemoveItemClick={removeFromBasket}
              handleIncreaseQuantity={handleIncreaseQuantity}
              handleDecreaseQuantity={handleDecreaseQuantity}
            />
          );
        })}
      </BasketTable>

      {isMobile ? (
        <Flex direction={'column'}>
          <Flex
            justifyBetween
            style={{ alignItems: 'baseline', marginBottom: 25 }}
          >
            <Flex style={{ alignItems: 'baseline' }}>
              <TotalMobile>Итого:</TotalMobile>
              <Typography
                variant='h2'
                style={{ fontSize: 21 }}
              >{`${totalPrice} грн`}</Typography>
            </Flex>
            <TextLink onClick={handleContinueShoppingClick}>
              Продолжить покупки
            </TextLink>
          </Flex>
          <Flex>
            <Button
              rounded
              onClick={handleCheckoutClick}
              style={{ marginLeft: '50px' }}
            >
              ОФОРМИТЬ
            </Button>
          </Flex>
        </Flex>
      ) : (
        <Flex justifyBetween>
          <ContinueShopping
            variant='body2'
            onClick={handleContinueShoppingClick}
          >
            ПРОДОЛЖИТЬ ПОКУПКИ
          </ContinueShopping>
          <Flex justifyCenter>
            <div>
              <Typography variant='body1'>Итого:</Typography>
              <Typography variant='h3' style={{ marginLeft: '30px' }}>
                {`${totalPrice} грн`}
              </Typography>
            </div>
            <Button
              rounded
              onClick={handleCheckoutClick}
              style={{ marginLeft: '50px' }}
            >
              ОФОРМИТЬ
            </Button>
          </Flex>
        </Flex>
      )}
    </BasketWrapper>
  );
}
