import React, { useState } from 'react';
import {
  MacaronSingleWrapper,
  ImageWrapper,
  Title,
  Description,
} from './styled';

interface IMacaronSingleProps {
  name: string;
  description: string;
  imageUrl: string;
  hoverImageUrl: string;
}

export function MacaronSingle({
  name,
  description,
  imageUrl,
  hoverImageUrl,
}: IMacaronSingleProps) {
  const [mouseOver, setMouseOver] = useState(false);

  const onMouseOver = () => {
    setMouseOver(true);
  };

  const onMouseOut = () => {
    setMouseOver(false);
  };

  return (
    <MacaronSingleWrapper>
      <ImageWrapper
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        src={mouseOver ? hoverImageUrl : imageUrl}
      />
      <Title>{name}</Title>
      <Description>{description}</Description>
    </MacaronSingleWrapper>
  );
}
