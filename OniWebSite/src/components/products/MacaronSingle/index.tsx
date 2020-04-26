import React, { useState } from 'react';
import { Title, Description, AddIconWrapper } from './styled';
import AddIcon from '@material-ui/icons/Add';
import colors from '@constants/colors';
import { IProduct } from '@constants/products';
import { ProductImageWrapper } from '../ProductImageWrapper';
import { ProductSingleWrapper, IProductSingleWrapper } from '../styled';

interface IProps extends IProductSingleWrapper {
  product: IProduct;
  onClick: (item: IProduct) => void;
}
export function MacaronSingle({ product, height, onClick }: IProps) {
  const [mouseOver, setMouseOver] = useState(false);

  const onMouseOver = () => {
    setMouseOver(true);
  };

  const onMouseOut = () => {
    setMouseOver(false);
  };

  return (
    <ProductSingleWrapper
      height={height}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={() => onClick(product)}
    >
      <AddIconWrapper visible={mouseOver}>
        <AddIcon style={{ fontSize: 40, color: colors.primary.white }} />
      </AddIconWrapper>
      <ProductImageWrapper
        src={mouseOver ? product.imageCutUrl : product.imageUrl}
      />
      <Title>{product.id}</Title>
      <Description>{product.fullDescription}</Description>
    </ProductSingleWrapper>
  );
}
