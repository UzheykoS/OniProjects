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
import { IItem } from '@components/Constructor/Constructor';

interface IZephyrSingleProps {
  name: string;
  description: string;
  imageUrl: string;
  hoverImageUrl: string;
  onClick: (item: IItem) => void;
}

export function ZephyrSingle({
  name,
  description,
  imageUrl,
  hoverImageUrl,
  onClick,
}: IZephyrSingleProps) {
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
    </ZephyrSingleWrapper>
  );
}
