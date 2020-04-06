import React from 'react';
import { ImageWrapper } from './styled';
import { IImageWithFallbackProps } from '@common/ImageWithFallback';

export function ProductImageWrapper(props: IImageWithFallbackProps) {
  return <ImageWrapper {...props} />;
}
