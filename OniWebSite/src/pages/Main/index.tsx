import { loadMainPageImage } from '@utils/Helper';
import React, { useEffect } from 'react';
import { BannerSection } from './BannerSection';
import { TopSalesSection } from './TopSalesSection';
import { AboutSection } from './AboutSection';
import { InstagramSection } from './InstagramSection';
import { useLoading } from '@hooks/useLoading';
import { MainContainer, MainWrapper } from './styled';
import { useSupportWebp } from '@common/ImageWithFallback/useSupportWebp';
import { useMediaQuery } from '@material-ui/core';
import { BREAKPOINT } from '@constants';

export interface IMainPageSectionProps {
  isMobile: boolean;
}

export const Main = () => {
  const { showLoading, closeLoading } = useLoading();
  const { supports } = useSupportWebp();
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);

  const loadImages = async () => {
    await loadMainPageImage(
      supports
        ? './images/pages/main/main_1.jpg'
        : './images/pages/main/main_1.webp'
    );

    closeLoading();
  };

  useEffect(() => {
    showLoading();
    loadImages();
  }, []);

  return (
    <MainWrapper>
      <BannerSection isMobile={isMobile} />
      <MainContainer>
        <TopSalesSection isMobile={isMobile} />
        <AboutSection isMobile={isMobile} />
        <InstagramSection isMobile={isMobile} />
      </MainContainer>
    </MainWrapper>
  );
};
