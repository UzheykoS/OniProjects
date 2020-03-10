import React from 'react';
import { Typography } from '@material-ui/core';
import {
  FormWrapper,
  FormColumnWrapper,
  MainWrapper,
  TextFieldStyled,
  FormRowWrapper,
  BottomWrapper,
} from './styled';
import { Button } from '@common/Button';
import { IContactData } from '.';
import PhoneInput from '@common/PhoneInput';
import DatePickerWrapper from '@common/DatePicker';
import TimeInput from '@common/TimeInput';

interface IProps {
  handleContinue: (contactData: IContactData) => void;
}

export function Contacts({ handleContinue }: IProps) {
  const [formData, setFormData] = React.useState<IContactData>({
    date: null,
    time: null,
  });

  const handleChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleDateChange = (date: Date | null) => {
    setFormData({ ...formData, date: date?.toISOString() });
  };

  const handleTimeChange = (time: Date | null) => {
    setFormData({ ...formData, time: time?.toISOString() });
  };

  const handleNextClick = () => {
    if (!formData) {
      return;
    }
    handleContinue(formData);
  };

  return (
    <MainWrapper>
      <Typography variant={'body2'}>
        * Поле обязательное к заполнению
      </Typography>
      <FormWrapper noValidate autoComplete='on'>
        <FormColumnWrapper>
          <Typography variant={'h3'}>КОНТАКТНЫЕ ДАННЫЕ</Typography>
          <TextFieldStyled
            label='Имя'
            value={formData.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange('name', e.target.value)
            }
            variant='outlined'
            required
          />
          <TextFieldStyled
            label='Телефон'
            value={formData.phone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange('phone', e.target.value)
            }
            variant='outlined'
            required
            InputProps={{
              inputComponent: PhoneInput,
            }}
          />
          <TextFieldStyled
            label='Комментарий'
            value={formData.comments}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange('comments', e.target.value)
            }
            variant='outlined'
            multiline
            rowsMax='4'
          />
        </FormColumnWrapper>
        <FormColumnWrapper>
          <Typography variant={'h3'}>АДРЕС ДОСТАВКИ</Typography>
          <FormRowWrapper>
            <DatePickerWrapper
              variant='inline'
              emptyLabel='Дата'
              fullWidth
              value={formData.date}
              style={{ margin: '20px 5px 15px 5px' }}
              handleDateChange={handleDateChange}
            />
            <TimeInput
              emptyLabel='Время доставки'
              selectedDate={formData.time}
              fullWidth
              variant='inline'
              style={{ margin: '20px 5px 15px 5px' }}
              handleDateChange={handleTimeChange}
            />
          </FormRowWrapper>
          <TextFieldStyled
            label='Адрес'
            value={formData.address}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange('address', e.target.value)
            }
            variant='outlined'
          />
          <Typography variant={'body2'} style={{ marginLeft: 5 }}>
            Если вы выбрали «Самовывоз», адрес указывать не обязательно.
          </Typography>
        </FormColumnWrapper>
      </FormWrapper>
      <BottomWrapper>
        <Button rounded onClick={handleNextClick}>
          ДАЛЬШЕ
        </Button>
      </BottomWrapper>
    </MainWrapper>
  );
}
