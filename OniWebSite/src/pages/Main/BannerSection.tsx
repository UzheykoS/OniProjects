import React, { useEffect } from 'react';
import { ImagesContainer, BackgroundImage } from './styled';
import BannerWrapper from '@icons/banner-wrapper.svg';
import { useLoading } from '@hooks/useLoading';
import { useSupportWebp } from '@common/ImageWithFallback/useSupportWebp';

export function BannerSection() {
  const { showLoading, closeLoading } = useLoading();
  const { supports } = useSupportWebp();

  useEffect(() => {
    showLoading();
  }, []);

  const onImageLoaded = () => {
    closeLoading();
  };

  return (
    <ImagesContainer>
      <BannerWrapper />
      <BackgroundImage
        src={supports ? './images/pages/main/main_1.jpg' : './images/pages/main/main_1.webp'}
        onLoad={onImageLoaded}
      />
    </ImagesContainer>
  );
}
