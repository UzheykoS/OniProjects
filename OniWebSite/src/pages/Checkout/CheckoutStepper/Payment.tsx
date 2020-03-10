import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { MainWrapper, BottomWrapper } from './styled';
import { Button } from '@common/Button';

export enum PaymentType {
  Cash = 'Наличные',
  Card = 'Карта',
}

interface IProps {
  handleContinue: (payment: PaymentType) => void;
}

export function Payment({ handleContinue }: IProps) {
  const [value, setValue] = React.useState(PaymentType.Cash);

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
            value={PaymentType.Cash}
            control={<Radio />}
            label={'Наличнымы: курьеру при получении'}
          />
          <FormControlLabel
            value={PaymentType.Card}
            control={<Radio />}
            label={'Оплата картой'}
          />
        </RadioGroup>
      </FormControl>
      <BottomWrapper>
        <Button rounded onClick={handleNextClick}>
          ДАЛЬШЕ
        </Button>
      </BottomWrapper>
    </MainWrapper>
  );
}