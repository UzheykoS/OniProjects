import React from 'react';
import { Title, Description } from './styled';
import { IProduct } from '@constants/products';
import { ProductImageWrapper } from '../ProductImageWrapper';
import { IProductSingleWrapper, ProductSingleWrapper } from '../styled';
import { Button } from '@common/Button';

interface IProps extends IProductSingleWrapper {
  product: IProduct;
  showButton: boolean;
  onClick: (item: IProduct) => void;
}

export function CheesecakeSingle({
  product,
  height,
  onClick,
  showButton,
}: IProps) {
  return (
    <ProductSingleWrapper height={height || 26}>
      <ProductImageWrapper height={200} src={product.imageUrl} />
      <Title>{`${product.id}`}</Title>
      <Description>{product.fullDescription}</Description>
      {showButton && (
        <>
          <Title style={{ marginBottom: 10 }}>{`${product.price} грн`}</Title>
          <Button rounded onClick={() => onClick(product)}>
            ДОБАВИТЬ
          </Button>
        </>
      )}
    </ProductSingleWrapper>
  );
}
