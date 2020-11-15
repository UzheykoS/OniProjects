import React, { useEffect } from 'react';
import {
  ImagesContainer,
  BackgroundImage,
  BannerTextContent,
  ImagesContainerMobile,
  BannerTextContentMobile,
} from './styled';
import BannerWrapper from '@icons/banner-wrapper.svg';
import { useLoading } from '@hooks/useLoading';
import { useSupportWebp } from '@common/ImageWithFallback/useSupportWebp';
import { Typography } from '@material-ui/core';
import colors from '@constants/colors';
import { Button } from '@common/Button';
import { useHistory } from 'react-router-dom';
import { IMainPageSectionProps } from '.';

export function BannerSection({ isMobile }: IMainPageSectionProps) {
  const { showLoading, closeLoading } = useLoading();
  const { supports } = useSupportWebp();
  const history = useHistory();

  useEffect(() => {
    showLoading();
  }, []);

  const onImageLoaded = () => {
    closeLoading();
  };

  if (isMobile) {
    return (
      <ImagesContainerMobile>
        <BackgroundImage
          src={
            supports
              ? './images/pages/main/main_2.webp'
              : './images/pages/main/main_2.jpg'
          }
          onLoad={onImageLoaded}
          isMobile
        />
        <BannerTextContentMobile>
          <Typography
            variant='h3'
            gutterBottom
            style={{ zIndex: 'inherit', fontSize: 16 }}
          >
            МЫ ДЕЛАЕМ
          </Typography>
          <Typography
            variant='h2'
            gutterBottom
            style={{
              color: colors.primary.white,
              zIndex: 'inherit',
              fontSize: 42,
              lineHeight: '42px',
              margin: '1rem 0',
            }}
          >
            Десерты,{'\n'}
            которые {'\n'}
            вдохновляют
          </Typography>
          <Typography
            variant='body1'
            gutterBottom
            style={{
              color: colors.primary.white,
              zIndex: 'inherit',
              fontSize: 16,
              lineHeight: '24px',
            }}
          >
            Кондитерские изделия – это искусство, {'\n'}и мы готовы это доказать
          </Typography>
          <Button
            rounded
            style={{ marginTop: '2rem' }}
            onClick={() => {
              history.push('/products');
            }}
          >
            СДЕЛАТЬ ЗАКАЗ
          </Button>
        </BannerTextContentMobile>
      </ImagesContainerMobile>
    );
  }

  return (
    <ImagesContainer>
      <BannerWrapper />
      <BackgroundImage
        src={
          supports
            ? './images/pages/main/main_1.jpg'
            : './images/pages/main/main_1.webp'
        }
        onLoad={onImageLoaded}
      />
      <BannerTextContent>
        <Typography variant='h3' gutterBottom style={{ zIndex: 'inherit' }}>
          МЫ ДЕЛАЕМ
        </Typography>
        <Typography
          variant='h2'
          gutterBottom
          style={{ color: colors.primary.white, zIndex: 'inherit' }}
        >
          Десерты, которые {'\n'}
          вдохновляют
        </Typography>
        <Typography
          variant='body1'
          gutterBottom
          style={{ color: colors.primary.white, zIndex: 'inherit' }}
        >
          Кондитерские изделия – это искусство, {'\n'}и мы готовы это доказать
        </Typography>
        <Button
          rounded
          style={{ marginTop: '2rem' }}
          onClick={() => {
            history.push('/products');
          }}
        >
          СДЕЛАТЬ ЗАКАЗ
        </Button>
      </BannerTextContent>
    </ImagesContainer>
  );
}
