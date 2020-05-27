import React from 'react';
import {
  BasketWrapper,
  CheckoutHeaderWrapper,
  BasketTable,
  BasketHeader,
  BasketHeaderCell,
  TextLink,
  TotalMobile,
  BackArrowWrapper,
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
  totalPrice: number;
  confirmCheckout: () => void;
  removeFromBasket: (item: IBasketItem) => void;
  handleIncreaseQuantity: (item: IBasketItem) => void;
  handleDecreaseQuantity: (item: IBasketItem) => void;
}

export function Basket({
  items,
  totalPrice,
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

  return (
    <BasketWrapper>
      <CheckoutHeaderWrapper>
        <BackArrowWrapper>
          <IconButton onClick={handleBackClick} size='small'>
            <ChevronLeftIcon style={{ margin: isMobile ? 0 : 4 }} />
          </IconButton>
        </BackArrowWrapper>
        {isMobile ? (
          <TextLink onClick={handleBackClick}>Назад</TextLink>
        ) : (
          <Typography style={{ fontSize: 46 }} variant='h2'>
            Корзина
          </Typography>
        )}
      </CheckoutHeaderWrapper>
      {isMobile && <Typography variant='h2'>Корзина</Typography>}
      <Typography style={{ fontSize: 13 }} variant='body2'>
        Минимальная стоимость заказа для доставки курьером составляет 200 грн.
      </Typography>
      <BasketTable>
        {!isMobile && (
          <BasketHeader>
            <BasketHeaderCell width={30}>
              <Typography style={{ fontSize: 13 }} variant={'body2'}>
                Фото
              </Typography>
            </BasketHeaderCell>
            <BasketHeaderCell width={25}>
              <Typography style={{ fontSize: 13 }} variant={'body2'}>
                Название
              </Typography>
            </BasketHeaderCell>
            <BasketHeaderCell width={25}>
              <Typography style={{ fontSize: 13 }} variant={'body2'}>
                Количество
              </Typography>
            </BasketHeaderCell>
            <BasketHeaderCell width={20}>
              <Typography style={{ fontSize: 13 }} variant={'body2'}>
                Цена
              </Typography>
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
          <Flex justifyBetween alignBaseline style={{ marginBottom: 25 }}>
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
          <Flex justifyCenter>
            <Button rounded onClick={handleCheckoutClick}>
              ОФОРМИТЬ
            </Button>
          </Flex>
        </Flex>
      ) : (
        <Flex justifyBetween>
          <Flex direction={'column'} alignBaseline>
            <Flex style={{ alignItems: 'baseline' }}>
              <TotalMobile style={{ marginBottom: 15 }}>Итого:</TotalMobile>
              <Typography
                variant='h2'
                style={{ fontSize: 21 }}
              >{`${totalPrice} грн`}</Typography>
            </Flex>
            <TextLink onClick={handleContinueShoppingClick}>
              Продолжить покупки
            </TextLink>
          </Flex>
          <Button rounded onClick={handleCheckoutClick}>
            ОФОРМИТЬ
          </Button>
        </Flex>
      )}
    </BasketWrapper>
  );
}
