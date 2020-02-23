import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { MainWrapper, BottomWrapper } from './styled';
import { Button } from '@common/Button';

export enum DeliveryType {
  SelfService = 'Самовывоз: Киев, бульвар Вацлава Гавела, 9А',
  Delivery = 'Доставка курьером',
}

interface IProps {
  handleContinue: () => void;
}

export function Delivery({ handleContinue }: IProps) {
  const [value, setValue] = React.useState(DeliveryType.SelfService);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value as DeliveryType);
  };

  return (
    <MainWrapper>
      <FormControl component='fieldset'>
        <FormLabel component='legend'>Выберите способ доставки</FormLabel>
        <RadioGroup name='delivery' value={value} onChange={handleChange}>
          <FormControlLabel
            value={DeliveryType.SelfService}
            control={<Radio />}
            label={DeliveryType.SelfService}
          />
          <FormControlLabel
            value={DeliveryType.Delivery}
            control={<Radio />}
            label={DeliveryType.Delivery}
          />
        </RadioGroup>
      </FormControl>
      <BottomWrapper>
        <Button rounded onClick={handleContinue}>
          ДАЛЬШЕ
        </Button>
      </BottomWrapper>
    </MainWrapper>
  );
}
