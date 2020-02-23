import React from 'react';
import { ImagesContainer, BackgroundImage } from './styled';
import BannerWrapper from '@icons/banner-wrapper.svg';

export function BannerSection() {
  return (
    <ImagesContainer>
      <BannerWrapper />
      <BackgroundImage src='./images/pages/main/main_1.jpg' />
    </ImagesContainer>
  );
}
