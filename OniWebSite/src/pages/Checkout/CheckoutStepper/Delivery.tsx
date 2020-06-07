import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { MainWrapper } from './styled';
import { Button } from '@common/Button';
import { Flex } from '@styles/styled';
import { TotalMobile } from '../styled';
import { Typography } from '@material-ui/core';

export enum DeliveryType {
  SelfService = 'Самовывоз',
  Delivery = 'Доставка',
}

interface IProps {
  totalPrice: number;
  delivery: DeliveryType;
  addDelivery: () => void;
  removeDelivery: () => void;
  handleDeliveryChange: (delivery: DeliveryType) => void;
  handleContinue: () => void;
}

export function Delivery({
  delivery,
  handleContinue,
  handleDeliveryChange,
  addDelivery,
  removeDelivery,
  totalPrice,
}: IProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = (event.target as HTMLInputElement).value as DeliveryType;
    handleDeliveryChange(newValue);
    if (newValue === DeliveryType.Delivery) {
      addDelivery();
    } else {
      removeDelivery();
    }
  };

  return (
    <MainWrapper>
      <FormControl component='fieldset'>
        <FormLabel component='legend'>Выберите способ доставки</FormLabel>
        <RadioGroup name='delivery' value={delivery} onChange={handleChange}>
          <FormControlLabel
            value={DeliveryType.SelfService}
            control={<Radio />}
            label={'Самовывоз: Киев, бульвар Вацлава Гавела, 9А'}
          />
          <FormControlLabel
            value={DeliveryType.Delivery}
            control={<Radio />}
            label={'Доставка курьером по Киеву (+80 грн)'}
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
        <Button rounded onClick={handleContinue}>
          ДАЛЬШЕ
        </Button>
      </Flex>
    </MainWrapper>
  );
}
