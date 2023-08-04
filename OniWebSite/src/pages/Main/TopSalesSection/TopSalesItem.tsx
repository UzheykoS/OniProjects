import React from 'react';
import { IProduct, ProductType } from '@constants/products';
import {
  IProductSingleWrapper,
  Description,
} from '@components/products/styled';
import { ProductImageWrapper } from '@components/products/ProductImageWrapper';
import { TopSalesItemTitle, TopSalesItemWrapper } from './styled';
import { Flex } from '@styles/styled';

interface IProps extends IProductSingleWrapper {
  product: IProduct;
  title?: string;
  description?: string;
  onClick: (item: IProduct) => void;
}

export function TopSalesItem({ product, onClick, title, description }: IProps) {
  function getImageHeight() {
    switch (product.type) {
      case ProductType.Choux:
        return 180;
      case ProductType.Cheesecake:
        return 160;
      case ProductType.Macaron:
        return 130;
      case ProductType.Zephyr:
        return 180;
      case ProductType.Cake:
        return 200;
      default:
        return;
    }
  }

  return (
    <TopSalesItemWrapper onClick={() => onClick(product)}>
      <Flex
        fullHeight
        justifyCenter
        style={{ width: product.type === ProductType.Cake ? '100%' : 'auto' }}
      >
        <ProductImageWrapper
          src={product.imageUrl}
          height={getImageHeight()}
          maxWidth={
            product.type === ProductType.Cake ||
            product.type === ProductType.Zephyr
              ? '250px'
              : ''
          }
        />
      </Flex>
      <Flex direction='column'>
        <TopSalesItemTitle>{title || product.id}</TopSalesItemTitle>
        <Description>{description || product.fullDescription}</Description>
      </Flex>
    </TopSalesItemWrapper>
  );
}