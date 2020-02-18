import React, { useState } from 'react';
import { ConstructoreMode } from './Constructor';
import {
  ConstructorGridItemWrapper,
  RemoveIconWrapper,
  ImageWrapper,
} from './styled';
import colors from '@constants/colors';
import RemoveIcon from '@material-ui/icons/Remove';
import { IProduct } from '@constants/products';

interface IConstructorGridItemProps {
  item: IProduct;
  mode: ConstructoreMode;
  index: number;
  onClick: (index: number) => void;
}

export function ConstructorGridItem({
  item,
  onClick,
  mode,
  index,
}: IConstructorGridItemProps) {
  const [mouseOver, setMouseOver] = useState(false);

  const onMouseOver = () => {
    setMouseOver(true);
  };

  const onMouseOut = () => {
    setMouseOver(false);
  };

  return (
    <ConstructorGridItemWrapper
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={() => onClick(index)}
      size={
        mode === ConstructoreMode.MacaronLarge
          ? 'small'
          : mode === ConstructoreMode.ChouxSmall
          ? 'large'
          : 'medium'
      }
      removeEnabled={!!item}
    >
      {item && (
        <RemoveIconWrapper visible={mouseOver}>
          <RemoveIcon style={{ fontSize: 40, color: colors.primary.white }} />
        </RemoveIconWrapper>
      )}
      {item && <ImageWrapper src={item.imageUrl} />}
    </ConstructorGridItemWrapper>
  );
}
