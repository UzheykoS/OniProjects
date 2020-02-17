import React from 'react';
import { Typography } from '@material-ui/core';
import { Button } from '@common/Button';
import { MixSection } from './styled';

interface IProps {
  imageUrl: string;
  quantity: string;
  price: number;
}
export function DessertsMix({ imageUrl, quantity, price }: IProps) {
  return (
    <MixSection>
      <img src={imageUrl} />
      <div className='title'>
        <Typography variant='caption' style={{ padding: '0 10px 5px 0' }}>
          Ассорти
        </Typography>
        <Typography variant='body1' style={{ fontWeight: 400 }}>
          {quantity}
        </Typography>
      </div>
      <div className='price'>
        <div className='half'>
          <Typography
            variant='caption'
            style={{
              display: 'flex',
              justifyContent: 'center',
              height: '100%',
              alignItems: 'center',
            }}
          >
            {`${price} грн`}
          </Typography>
        </div>
        <div className='half'>
          <Button style={{ width: '100%', height: '100%' }}>ДОБАВИТЬ</Button>
        </div>
      </div>
    </MixSection>
  );
}
