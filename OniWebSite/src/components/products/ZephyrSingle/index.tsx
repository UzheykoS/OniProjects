import React, { useState } from 'react';
import {
  ZephyrSingleWrapper,
  ImageWrapper,
  Title,
  Description,
  AddIconWrapper,
} from './styled';
import AddIcon from '@material-ui/icons/Add';
import colors from '@constants/colors';
import { IProduct, ProductType } from '@constants/products';

interface IProps extends IProduct {
  onClick: (item: IProduct) => void;
}

export function ZephyrSingle({ name, description, imageUrl, onClick }: IProps) {
  const [mouseOver, setMouseOver] = useState(false);

  const onMouseOver = () => {
    setMouseOver(true);
  };

  const onMouseOut = () => {
    setMouseOver(false);
  };

  return (
    <ZephyrSingleWrapper
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={() =>
        onClick({
          name,
          description,
          imageUrl,
          type: ProductType.Zephyr,
        })
      }
    >
      <AddIconWrapper visible={mouseOver}>
        <AddIcon style={{ fontSize: 40, color: colors.primary.white }} />
      </AddIconWrapper>
      <ImageWrapper src={imageUrl} />
      <Title>{name}</Title>
      <Description>{description}</Description>
    </ZephyrSingleWrapper>
  );
}
