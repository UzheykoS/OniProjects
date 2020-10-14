import React from 'react';
import { MainWrapper } from './styled';
import { Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router';
import { Flex } from '@styles/styled';

export function Success() {
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
          padding: '0 10px 10px 10px',
          fontWeight: 400,
          fontSize: 21,
          fontFamily: 'Roboto',
          color: '#1E2F42',
          textAlign: 'center',
        }}
      >
        Спасибо за ваш заказ!
      </Typography>
      <Flex justifyCenter>
        <Button variant='contained' color={'primary'} onClick={handleNextClick}>
          на главную
        </Button>
      </Flex>
    </MainWrapper>
  );
}
