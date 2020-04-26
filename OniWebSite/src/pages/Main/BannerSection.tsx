import React, { useEffect } from 'react';
import { ImagesContainer, BackgroundImage, BannerTextContent } from './styled';
import BannerWrapper from '@icons/banner-wrapper.svg';
import { useLoading } from '@hooks/useLoading';
import { useSupportWebp } from '@common/ImageWithFallback/useSupportWebp';
import { Typography } from '@material-ui/core';
import colors from '@constants/colors';
import { Button } from '@common/Button';
import { useHistory } from 'react-router-dom';

export function BannerSection() {
  const { showLoading, closeLoading } = useLoading();
  const { supports } = useSupportWebp();
  const history = useHistory();

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
          Интересные сочетания вкусов и текстур, натуральные {'\n'}
          ингридиенты высокого качества, авторские рецептуры {'\n'}и внимание к
          деталям
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
