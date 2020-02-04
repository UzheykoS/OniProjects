import Slider from 'react-slick';
import React from 'react';

export function BannerSection() {
  const settings = {
    className: '',
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    arrows: false,
  };

  return (
    <div className='images-container'>
      <Slider {...settings}>
        <img className='background-img' src='./images/images_large/main1.jpg' />
        <img className='background-img' src='./images/images_large/main2.jpg' />
      </Slider>
    </div>
  );
}
