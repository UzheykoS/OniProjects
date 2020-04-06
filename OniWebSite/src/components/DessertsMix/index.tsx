import React from 'react';
import { Typography } from '@material-ui/core';
import { Button } from '@common/Button';
import { MixSection } from './styled';
import { IProduct } from '@constants/products';
import { ImageWithFallback } from '@common/ImageWithFallback';

interface IProps {
  product: IProduct;
  onClick: (product: IProduct) => void;
}
export function DessertsMix({ product, onClick }: IProps) {
  return (
    <MixSection>
      <ImageWithFallback src={product.imageUrl} />
      <div className='title'>
        <Typography variant='h1' style={{ padding: '0 10px 5px 0' }}>
          {`Ассорти ${product.price} грн`}
        </Typography>
        <Typography variant='body1' style={{ fontWeight: 400 }}>
          {product.id}
        </Typography>
      </div>
      <Button rounded onClick={() => onClick(product)}>
        ДОБАВИТЬ
      </Button>
    </MixSection>
  );
}
