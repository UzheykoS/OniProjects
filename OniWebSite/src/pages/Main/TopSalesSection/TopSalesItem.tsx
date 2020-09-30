import React, { useState } from 'react';
import { IProduct, ProductType } from '@constants/products';
import {
  IProductSingleWrapper,
  ProductSingleWrapper,
  Title,
  Description,
  AddIconMobileWrapper,
  AddIconWrapper,
} from '@components/products/styled';
import { ProductImageWrapper } from '@components/products/ProductImageWrapper';
import AddIcon from '@material-ui/icons/Add';
import colors from '@constants/colors';

interface IProps extends IProductSingleWrapper {
  product: IProduct;
  height?: number;
  isMobile?: boolean;
  onClick: (item: IProduct) => void;
}
export function TopSalesItem({
  height = 19,
  product,
  isMobile,
  onClick,
}: IProps) {
  const [mouseOver, setMouseOver] = useState(false);

  const onMouseOver = () => {
    !isMobile && setMouseOver(true);
  };

  const onMouseOut = () => {
    !isMobile && setMouseOver(false);
  };

  function getImageHeight() {
    switch (product.type) {
      case ProductType.Choux:
        return 160;
      case ProductType.Cheesecake:
        return 140;
      default:
        return;
    }
  }

  return (
    <ProductSingleWrapper
      height={height}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={() => onClick(product)}
    >
      {isMobile ? (
        <AddIconMobileWrapper onClick={() => onClick(product)}>
          <AddIcon
            style={{ fontSize: 36, color: colors.primary.white, opacity: 0.7 }}
          />
        </AddIconMobileWrapper>
      ) : (
        <AddIconWrapper visible={mouseOver}>
          <AddIcon style={{ fontSize: 40, color: colors.primary.white }} />
        </AddIconWrapper>
      )}
      <ProductImageWrapper src={product.imageUrl} height={getImageHeight()} />
      <Title>{product.id}</Title>
      <Description>{product.fullDescription}</Description>
    </ProductSingleWrapper>
  );
}
