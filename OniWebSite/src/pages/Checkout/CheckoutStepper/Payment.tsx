import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { MainWrapper } from './styled';
import { Button } from '@common/Button';
import { DeliveryType } from './Delivery';
import { Flex } from '@styles/styled';
import { Typography, useMediaQuery } from '@material-ui/core';
import { BREAKPOINT } from '@constants';
import { TextLink } from '@common/styled';

export enum PaymentType {
  Cash = 'Наличные',
  Card = 'Карта',
}

interface IProps {
  delivery: DeliveryType;
  totalPrice: number;
  isValid: boolean;
  handleContinue: (payment: PaymentType) => void;
  handleBackClick?: () => void;
}

export function Payment({
  delivery,
  isValid,
  handleContinue,
  handleBackClick,
}: IProps) {
  const [value, setValue] = useState(PaymentType.Card);
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value as PaymentType);
  };

  const handleNextClick = () => {
    handleContinue(value);
  };

  const getDeliveryLabel = () => {
    switch (delivery) {
      case DeliveryType.SelfService:
        return 'При получении: наличными или терминалом';
      case DeliveryType.Delivery:
        return 'Наличными при получении';
      case DeliveryType.Urgent:
      case DeliveryType.NP:
      default:
        return '';
    }
  };

  return (
    <MainWrapper>
      <Typography variant={'h3'} style={{ marginBottom: '10px' }}>
        СПОСОБ ОПЛАТЫ
      </Typography>
      <FormControl component='fieldset'>
        <RadioGroup name='delivery' value={value} onChange={handleChange}>
          <FormControlLabel
            value={PaymentType.Card}
            control={<Radio />}
            label={
              <Flex direction='column' style={{ margin: '3px 0' }}>
                Оплата на карту
                <Typography variant='body2'>
                  Мы вышлем реквизиты для оплаты после подтверждения заказа
                </Typography>
              </Flex>
            }
          />
          {[DeliveryType.Delivery, DeliveryType.SelfService].indexOf(delivery) >
            -1 && (
            <FormControlLabel
              value={PaymentType.Cash}
              control={<Radio />}
              label={getDeliveryLabel()}
            />
          )}
        </RadioGroup>
      </FormControl>
      <Flex justifyBetween style={{ marginTop: 20 }}>
        <TextLink
          style={{
            textTransform: 'uppercase',
            fontWeight: 'bold',
            color: '#1E2F42',
            marginRight: 40,
            opacity: 1,
            letterSpacing: '3px',
            alignSelf: 'center',
          }}
          tabIndex={0}
          onClick={handleBackClick}
        >
          вернуться к контактам
        </TextLink>
        <Button
          rounded
          small={isMobile}
          disabled={!isValid}
          onClick={handleNextClick}
        >
          ПОДТВЕРДИТЬ
        </Button>
      </Flex>
    </MainWrapper>
  );
}
