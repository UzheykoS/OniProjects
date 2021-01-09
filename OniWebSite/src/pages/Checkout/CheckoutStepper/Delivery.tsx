import React, { useEffect, useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { MainWrapper } from './styled';
import { Button } from '@common/Button';
import { Flex } from '@styles/styled';
import { TotalMobile } from '../styled';
import { FormHelperText, Typography, useMediaQuery } from '@material-ui/core';
import { BREAKPOINT } from '@constants';
import { DELIVERY_PRICE, ProductType } from '@constants/products';
import { IBasketItem } from '@hooks/useBasket';

export enum DeliveryType {
  SelfService = 'Самовывоз',
  Delivery = 'Доставка курьером по Киеву (80 грн)',
  Urgent = 'Срочная доставка курьерским такси (по тарифу перевозчика)',
  NP = 'Доставка Новой почтой (по тарифу перевозчика)',
}

interface IProps {
  totalPrice: number;
  delivery: DeliveryType;
  items: IBasketItem[];
  handleDeliveryChange: (delivery: DeliveryType) => void;
  handleContinue: () => void;
}

export function Delivery({
  delivery,
  items,
  handleContinue,
  handleDeliveryChange,
  totalPrice,
}: IProps) {
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (totalPrice < 200) {
      setErrorMessage(
        delivery === DeliveryType.SelfService
          ? ''
          : 'Минимальная сумма заказа для доставки составляет 200 грн'
      );
    } else {
      const containsForbiddenItems = items.reduce(
        (accumulator, currentValue) => {
          if (
            [
              ProductType.Choux,
              ProductType.Cake,
              ProductType.Cheesecake,
            ].indexOf(currentValue.product.type) > -1
          ) {
            accumulator = true;
          }
          return accumulator;
        },
        false
      );
      setErrorMessage(
        containsForbiddenItems && delivery === DeliveryType.NP
          ? 'В корзине есть десерты, которые мы не отправляем Новой почтой'
          : ''
      );
    }
  }, [delivery]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = (event.target as HTMLInputElement).value as DeliveryType;
    handleDeliveryChange(newValue);
  };

  return (
    <MainWrapper>
      <Typography variant={'h3'} style={{ marginBottom: '10px' }}>
        СПОСОБ ДОСТАВКИ
      </Typography>
      <FormControl component='fieldset' error={!!errorMessage}>
        <RadioGroup name='delivery' value={delivery} onChange={handleChange}>
          <FormControlLabel
            value={DeliveryType.SelfService}
            control={<Radio />}
            label={
              <Flex direction='column' style={{ margin: '3px 0' }}>
                {DeliveryType.SelfService}
                <Typography style={{ fontSize: 11 }} variant='body2'>
                  Киев, бульвар Вацлава Гавела, 9А
                </Typography>
              </Flex>
            }
          />
          <FormControlLabel
            value={DeliveryType.Delivery}
            control={<Radio />}
            label={
              <Flex direction='column' style={{ margin: '3px 0' }}>
                {DeliveryType.Delivery}
                <Typography style={{ fontSize: 11 }} variant='body2'>
                  Возможна на следующий день
                </Typography>
              </Flex>
            }
          />
          <FormControlLabel
            value={DeliveryType.Urgent}
            control={<Radio />}
            label={
              <Flex direction='column' style={{ margin: '3px 0' }}>
                {DeliveryType.Urgent}
                <Typography style={{ fontSize: 11 }} variant='body2'>
                  Возможна в течение часа при условии наличия выбранных десертов
                </Typography>
              </Flex>
            }
          />
          <FormControlLabel
            value={DeliveryType.NP}
            control={<Radio />}
            label={
              <Flex direction='column' style={{ margin: '3px 0' }}>
                {DeliveryType.NP}
                <Typography style={{ fontSize: 11 }} variant='body2'>
                  Не отправляем шу, чизкейки и торты
                </Typography>
              </Flex>
            }
          />
        </RadioGroup>
        {!!errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
      </FormControl>
      <Flex justifyBetween>
        <Flex style={{ alignItems: 'center' }}>
          <TotalMobile>Итого:</TotalMobile>
          <Typography variant='h2' style={{ fontSize: 21 }}>{`${
            delivery === DeliveryType.Delivery
              ? totalPrice + DELIVERY_PRICE
              : totalPrice
          } грн`}</Typography>
        </Flex>
        <Button
          rounded
          small={isMobile}
          disabled={!!errorMessage}
          onClick={handleContinue}
        >
          ДАЛЬШЕ
        </Button>
      </Flex>
    </MainWrapper>
  );
}
