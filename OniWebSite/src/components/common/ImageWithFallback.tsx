import React from 'react';

export interface IImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  type?: string;
}

export const ImageWithFallback = ({
  src,
  type = 'image/webp',
  ...delegated
}: IImageWithFallbackProps) => {
  return (
    <picture>
      <source srcSet={`${src}.webp`} type={type} />
      <img src={`${src}.jpg`} {...delegated} />
    </picture>
  );
};
