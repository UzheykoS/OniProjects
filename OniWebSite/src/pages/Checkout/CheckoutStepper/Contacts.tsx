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

interface IProps {
  handleContinue: () => void;
}

export function Contacts({ handleContinue }: IProps) {
  const [name, setName] = React.useState('Cat in the Hat');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
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
            value={name}
            onChange={handleChange}
            variant='outlined'
            required
          />
          <TextFieldStyled
            label='Телефон'
            value={name}
            onChange={handleChange}
            variant='outlined'
            required
          />
          <TextFieldStyled
            label='Комментарий'
            value={name}
            onChange={handleChange}
            variant='outlined'
            multiline
            rowsMax='4'
          />
        </FormColumnWrapper>
        <FormColumnWrapper>
          <Typography variant={'h3'}>АДРЕС ДОСТАВКИ</Typography>
          <FormRowWrapper>
            <TextFieldStyled
              label='Дата'
              value={name}
              onChange={handleChange}
              variant='outlined'
              fullWidth
            />
            <TextFieldStyled
              label='Время доставки'
              value={name}
              onChange={handleChange}
              variant='outlined'
              fullWidth
            />
          </FormRowWrapper>
          <TextFieldStyled
            label='Адрес'
            value={name}
            onChange={handleChange}
            variant='outlined'
          />
          <Typography variant={'body2'} style={{ marginLeft: 5 }}>
            Если вы выбрали «Самовывоз», адрес указывать не обязательно.
          </Typography>
        </FormColumnWrapper>
      </FormWrapper>
      <BottomWrapper>
        <Button rounded onClick={handleContinue}>
          ДАЛЬШЕ
        </Button>
      </BottomWrapper>
    </MainWrapper>
  );
}
