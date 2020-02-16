import React, { useState } from 'react';
import {
  MacaronSingleWrapper,
  ImageWrapper,
  Title,
  Description,
  AddIconWrapper,
} from './styled';
import { IItem } from '@pages/products/Macarons/MacaronsConstructor/MacaronsConstructor';
import AddIcon from '@material-ui/icons/Add';
import colors from '@constants/colors';

interface IMacaronSingleProps {
  name: string;
  description: string;
  imageUrl: string;
  hoverImageUrl: string;
  onClick: (item: IItem) => void;
}

export function MacaronSingle({
  name,
  description,
  imageUrl,
  hoverImageUrl,
  onClick,
}: IMacaronSingleProps) {
  const [mouseOver, setMouseOver] = useState(false);

  const onMouseOver = () => {
    setMouseOver(true);
  };

  const onMouseOut = () => {
    setMouseOver(false);
  };

  return (
    <MacaronSingleWrapper
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={() =>
        onClick({
          name,
          imageUrl,
        })
      }
    >
      <AddIconWrapper visible={mouseOver}>
        <AddIcon style={{ fontSize: 40, color: colors.primary.white }} />
      </AddIconWrapper>
      <ImageWrapper src={mouseOver ? hoverImageUrl : imageUrl} />
      <Title>{name}</Title>
      <Description>{description}</Description>
    </MacaronSingleWrapper>
  );
}
