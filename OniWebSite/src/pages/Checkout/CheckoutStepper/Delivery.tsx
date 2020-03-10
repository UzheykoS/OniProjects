import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { MainWrapper, BottomWrapper } from './styled';
import { Button } from '@common/Button';

export enum DeliveryType {
  SelfService = 'Самовывоз',
  Delivery = 'Доставка',
}

interface IProps {
  handleContinue: (delivery: DeliveryType) => void;
}

export function Delivery({ handleContinue }: IProps) {
  const [value, setValue] = React.useState(DeliveryType.SelfService);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value as DeliveryType);
  };

  const handleNextClick = () => {
    handleContinue(value);
  };

  return (
    <MainWrapper>
      <FormControl component='fieldset'>
        <FormLabel component='legend'>Выберите способ доставки</FormLabel>
        <RadioGroup name='delivery' value={value} onChange={handleChange}>
          <FormControlLabel
            value={DeliveryType.SelfService}
            control={<Radio />}
            label={'Самовывоз: Киев, бульвар Вацлава Гавела, 9А'}
          />
          <FormControlLabel
            value={DeliveryType.Delivery}
            control={<Radio />}
            label={'Доставка курьером'}
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
