import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import colors from '@constants/colors';
import { IProduct } from '@constants/products';
import { ProductImageWrapper } from '../ProductImageWrapper';
import {
  ProductSingleWrapper,
  IProductSingleWrapper,
  AddIconWrapper,
  Title,
  Description,
  AddIconMobileWrapper,
} from '../styled';
import { useMediaQuery } from '@material-ui/core';
import { BREAKPOINT } from '@constants';

interface IProps extends IProductSingleWrapper {
  product: IProduct;
  onClick: (item: IProduct) => void;
}
export function MacaronSingle({ product, height, onClick }: IProps) {
  const [mouseOver, setMouseOver] = useState(false);
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);

  const onMouseOver = () => {
    !isMobile && setMouseOver(true);
  };

  const onMouseOut = () => {
    !isMobile && setMouseOver(false);
  };

  const onMobileClick = () => {
    setMouseOver(!mouseOver);
  };

  return (
    <ProductSingleWrapper
      height={height}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={isMobile ? onMobileClick : () => onClick(product)}
    >
      {isMobile ? (
        <AddIconMobileWrapper
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
            onClick(product);
          }}
        >
          <AddIcon
            style={{ fontSize: 36, color: colors.primary.white, opacity: 0.7 }}
          />
        </AddIconMobileWrapper>
      ) : (
        <AddIconWrapper visible={mouseOver}>
          <AddIcon style={{ fontSize: 40, color: colors.primary.white }} />
        </AddIconWrapper>
      )}
      <ProductImageWrapper
        src={mouseOver ? product.imageCutUrl : product.imageUrl}
      />
      <Title>{product.id}</Title>
      <Description>{product.fullDescription}</Description>
    </ProductSingleWrapper>
  );
}
