import React, { useState } from 'react';
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
import OneClickBuyModal from '@components/modals/OneClickBuyModal';
import { submitOneClickOrder } from '@src/api/oni-web';
import { useSnackbar, SnackbarType } from '@hooks/useSnackbar';
import colors from '@constants/colors';

interface IBasketProps {
  items: IBasketItem[];
  totalPrice: number;
  clearBasket: () => void;
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
  clearBasket,
}: IBasketProps) {
  const history = useHistory();
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);
  const [oneClickDialogOpen, setOneClickDialogOpen] = useState(false);
  const { showSnackbar } = useSnackbar();

  const handleBackClick = () => {
    history.goBack();
  };

  const handleContinueShoppingClick = () => {
    history.push('/products');
  };

  const handleCheckoutClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    confirmCheckout();
  };

  const handleOneClickBuySubmit = async (phone: string) => {
    const itemsMessage = items.reduce((acc, item) => {
      acc += `${item.product.id} - ${item.quantity} \n`;
      return acc;
    }, '');

    try {
      await submitOneClickOrder({
        phone,
        comments: 'Заказ в 1 клик',
        itemsMessage,
      });
      clearBasket();
      setOneClickDialogOpen(false);
      showSnackbar('Заказ сохранён!');
    } catch (e) {
      console.log(e);
      showSnackbar(
        'Ошибка при сохранении заказа ☹️\nПопробуйте ещё раз',
        SnackbarType.Error
      );
    }
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
            <TextLink
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                letterSpacing: '2px',
                color: '#1E2F42',
                marginRight: 10,
                opacity: !items.length ? 0.4 : 1,
                alignSelf: 'center',
              }}
              onClick={() => !!items.length && setOneClickDialogOpen(true)}
            >
              купить в 1 клик
            </TextLink>
            <Button
              rounded
              disabled={!items.length}
              onClick={handleCheckoutClick}
            >
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
          <Flex>
            <TextLink
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                letterSpacing: '3px',
                color: '#1E2F42',
                marginRight: 40,
                opacity: !items.length ? 0.4 : 1,
                alignSelf: 'center',
              }}
              disabled={!items.length}
              onClick={() => !!items.length && setOneClickDialogOpen(true)}
            >
              купить в один клик
            </TextLink>
            <Button
              rounded
              style={{ border: `1px solid ${colors.secondary.pink}` }}
              disabled={!items.length}
              onClick={handleCheckoutClick}
            >
              ОФОРМИТЬ
            </Button>
          </Flex>
        </Flex>
      )}
      <OneClickBuyModal
        confirmSubmit={handleOneClickBuySubmit}
        closeModal={() => setOneClickDialogOpen(false)}
        open={oneClickDialogOpen}
      />
    </BasketWrapper>
  );
}
