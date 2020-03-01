import React from 'react';
import { Typography } from '@material-ui/core';
import { Button } from '@common/Button';
import { MixSection } from './styled';
import { IProduct } from '@constants/products';

interface IProps {
  product: IProduct;
  onClick: (product: IProduct) => void;
}
export function DessertsMix({ product, onClick }: IProps) {
  return (
    <MixSection>
      <img src={product.imageUrl} />
      <div className='title'>
        <Typography variant='caption' style={{ padding: '0 10px 5px 0' }}>
          Ассорти
        </Typography>
        <Typography variant='body1' style={{ fontWeight: 400 }}>
          {product.id}
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
            {`${product.price} грн`}
          </Typography>
        </div>
        <div className='half'>
          <Button
            style={{ width: '100%', height: '100%' }}
            onClick={() => onClick(product)}
          >
            ДОБАВИТЬ
          </Button>
        </div>
      </div>
    </MixSection>
  );
}
