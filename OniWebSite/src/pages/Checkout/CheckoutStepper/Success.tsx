import React from 'react';
import { MainWrapper } from './styled';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router';
import { Flex } from '@styles/styled';
import { Button } from '@common/Button';
import { PaymentType } from './Payment';

export function Success({ payment }: { payment: PaymentType }) {
  const history = useHistory();

  const handleNextClick = () => {
    history.push('/');
  };

  return (
    <MainWrapper style={{ alignItems: 'center' }}>
      <Typography
        variant={'body1'}
        style={{
          fontWeight: 400,
          fontSize: 16,
          fontFamily: 'Roboto',
          color: '#B8A36A',
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: 4,
          marginTop: 50,
        }}
      >
        Заказ принят
      </Typography>
      <img
        style={{ height: 92, width: 92, margin: '20px 0' }}
        src='/images/icons/checkout-success.png'
      />
      <Typography
        variant={'body1'}
        style={{
          textAlign: 'center',
        }}
      >
        {payment === PaymentType.Card
          ? 'Мы уточним наличие выбранных десертов и вышлем реквизиты для оплаты'
          : 'Мы уточним наличие выбранных десертов и свяжемся с вами, чтобы подтвердить заказ'}
      </Typography>
      <Flex justifyCenter>
        <Button rounded style={{ marginTop: '2rem' }} onClick={handleNextClick}>
          на главную
        </Button>
      </Flex>
    </MainWrapper>
  );
}
