import React, { useState } from 'react';
import {
  CheesecakeSingleWrapper,
  Title,
  Description,
  AddIconWrapper,
} from './styled';
import AddIcon from '@material-ui/icons/Add';
import colors from '@constants/colors';
import { IProduct } from '@constants/products';
import { ProductImageWrapper } from '../ProductImageWrapper';

interface IProps {
  product: IProduct;
  onClick: (item: IProduct) => void;
}

export function CheesecakeSingle({ product, onClick }: IProps) {
  const [mouseOver, setMouseOver] = useState(false);

  const onMouseOver = () => {
    setMouseOver(true);
  };

  const onMouseOut = () => {
    setMouseOver(false);
  };

  return (
    <CheesecakeSingleWrapper
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={() => onClick(product)}
    >
      <AddIconWrapper visible={mouseOver}>
        <AddIcon style={{ fontSize: 40, color: colors.primary.white }} />
      </AddIconWrapper>
      <ProductImageWrapper height={200} src={product.imageUrl} />
      <Title>{product.id}</Title>
      <Description>{product.fullDescription}</Description>
    </CheesecakeSingleWrapper>
  );
}
