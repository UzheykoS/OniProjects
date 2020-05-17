import React from 'react';
import { IProduct } from '@constants/products';
import { IProductSingleWrapper, ProductSingleWrapper, Title, Description } from '@components/products/styled';
import { ProductImageWrapper } from '@components/products/ProductImageWrapper';

interface IProps extends IProductSingleWrapper {
  product: IProduct;
  onClick: (item: IProduct) => void;
}
export function TopSalesItem({ product, onClick }: IProps) {
  return (
    <ProductSingleWrapper
      height={15}
      onClick={() => onClick(product)}
    >
      <ProductImageWrapper src={product.imageUrl} />
      <Title>{product.id}</Title>
      <Description>{product.fullDescription}</Description>
    </ProductSingleWrapper>
  );
}
