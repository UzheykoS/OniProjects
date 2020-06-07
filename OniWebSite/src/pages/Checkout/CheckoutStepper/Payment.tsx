import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { MainWrapper } from './styled';
import { Button } from '@common/Button';
import { DeliveryType } from './Delivery';
import { Flex } from '@styles/styled';
import { TotalMobile } from '../styled';
import { Typography } from '@material-ui/core';

export enum PaymentType {
  Cash = 'Наличные',
  Card = 'Карта',
}

interface IProps {
  delivery: DeliveryType;
  totalPrice: number;
  isValid: boolean;
  handleContinue: (payment: PaymentType) => void;
}

export function Payment({
  delivery,
  totalPrice,
  isValid,
  handleContinue,
}: IProps) {
  const [value, setValue] = React.useState(PaymentType.Card);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value as PaymentType);
  };

  const handleNextClick = () => {
    handleContinue(value);
  };

  return (
    <MainWrapper>
      <FormControl component='fieldset'>
        <FormLabel component='legend'>Выберите способ оплаты</FormLabel>
        <RadioGroup name='delivery' value={value} onChange={handleChange}>
          <FormControlLabel
            value={PaymentType.Card}
            control={<Radio />}
            label={'Предоплата на карту'}
          />
          <FormControlLabel
            value={PaymentType.Cash}
            control={<Radio />}
            label={
              delivery === DeliveryType.SelfService
                ? 'При получении: наличными или терминалом'
                : 'Наличными при получении'
            }
          />
        </RadioGroup>
      </FormControl>
      <Flex justifyBetween>
        <Flex style={{ alignItems: 'center' }}>
          <TotalMobile>Итого:</TotalMobile>
          <Typography
            variant='h2'
            style={{ fontSize: 21 }}
          >{`${totalPrice} грн`}</Typography>
        </Flex>
        <Button rounded disabled={!isValid} onClick={handleNextClick}>
          ПОДТВЕРДИТЬ
        </Button>
      </Flex>
    </MainWrapper>
  );
}
