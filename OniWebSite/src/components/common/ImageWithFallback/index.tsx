import React, { useState, useEffect, useRef } from 'react';
import { useSupportWebp } from './useSupportWebp';
import { ImageStyled } from './styled';

export interface IImageWithFallbackProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  type?: string;
  isSecondary?: boolean;
}

export const ImageWithFallback = ({
  src,
  type = 'image/webp',
  style,
  isSecondary,
  ...delegated
}: IImageWithFallbackProps) => {
  const [loading, setLoading] = useState(true);
  const state = useRef<{ image?: HTMLImageElement }>({});
  const srcWebp = `${src}.webp`;
  const srcJpg = `${src}.jpg`;
  const { supports } = useSupportWebp();

  useEffect(() => {
    loadImage();
    return () => {
      if (state.current.image) {
        state.current.image.onload = null;
        state.current.image.onerror = null;
      }
    };
  }, []);

  function loadImage() {
    if (state.current.image) {
      state.current.image.onload = null;
      state.current.image.onerror = null;
    }
    const i = new Image();
    state.current.image = i;
    i.onload = onLoad;

    if (supports) {
      i.src = srcWebp;
    } else {
      i.src = srcJpg;
    }
  }

  function onLoad() {
    setLoading(false);
  }

  const splittedSrc = src!.split('/');
  const placeholderSrc = isSecondary
    ? src
    : splittedSrc.slice(0, splittedSrc.length - 1).join('/') +
      '/small/' +
      splittedSrc[splittedSrc.length - 1];

  const generatedSrc = supports
    ? srcWebp
    : loading
    ? `${placeholderSrc}.jpg`
    : srcJpg;

  return (
    <picture
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    >
      <source srcSet={generatedSrc} type={type} />
      <ImageStyled
        src={generatedSrc}
        blurred={loading}
        alt={splittedSrc[splittedSrc.length - 1]}
        {...delegated}
      />
    </picture>
  );
};
