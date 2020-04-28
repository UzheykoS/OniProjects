import React from 'react';
import { Typography } from '@material-ui/core';
import { Button } from '@common/Button';
import {
  MixSection,
  IMixSection,
  DessertMixTitle,
  TitleWrapper,
} from './styled';
import { IProduct } from '@constants/products';
import { ImageWithFallback } from '@common/ImageWithFallback';

interface IProps extends IMixSection {
  product: IProduct;
  onClick: (product: IProduct) => void;
}
export function DessertsMix({ product, size, imageHeight, onClick }: IProps) {
  return (
    <MixSection size={size} imageHeight={imageHeight}>
      <ImageWithFallback src={product.imageUrl} />
      <TitleWrapper>
        <Typography variant='body1' style={{ fontWeight: 400 }}>
          {`Ассорти ${product.id}`}
        </Typography>
        <DessertMixTitle>{`${product.price} грн`}</DessertMixTitle>
      </TitleWrapper>
      <Button rounded onClick={() => onClick(product)}>
        ДОБАВИТЬ
      </Button>
    </MixSection>
  );
}
