import React from 'react';
// import Slider from 'react-slick';
import { ImagesContainer, BackgroundImage } from './styled';
import BannerWrapper from '@icons/banner-wrapper.svg';

export function BannerSection() {
  // const settings = {
  //   className: '',
  //   dots: false,
  //   fade: true,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   adaptiveHeight: true,
  //   autoplay: true,
  //   speed: 500,
  //   autoplaySpeed: 5000,
  //   cssEase: 'linear',
  //   arrows: false,
  // };

  return (
    <ImagesContainer>
      <BannerWrapper />
      {/* <Slider {...settings}> */}
      <BackgroundImage src='./images/images_large/main1.jpg' />
      {/* <BackgroundImage src='./images/images_large/main2.jpg' /> */}
      {/* </Slider> */}
    </ImagesContainer>
  );
}
