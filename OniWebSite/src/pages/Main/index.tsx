import { loadMainPageImage } from '@utils/Helper';
import React, { useEffect } from 'react';
import { BannerSection } from './BannerSection';
import { TopSalesSection } from './TopSalesSection';
import { AboutSection } from './AboutSection';
import { InstagramSection } from './InstagramSection';
import { useLoading } from '@hooks/useLoading';
import { MainContainer, MainWrapper } from './styled';
import { useSupportWebp } from '@common/ImageWithFallback/useSupportWebp';
// import { Grid } from '@material-ui/core';

export const Main = () => {
  const { showLoading, closeLoading } = useLoading();
  const { supports } = useSupportWebp();

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
      <BannerSection />
      <MainContainer>
        <TopSalesSection />
        <AboutSection />
        <InstagramSection />
      </MainContainer>
      {/* <Grid container>
        <Grid container justify={'center'}>
          <Grid item md={8}>
            <TopSalesSection />
          </Grid>
        </Grid>

        <Grid container justify={'center'}>
          <Grid item md={8}>
            <AboutSection />
          </Grid>
        </Grid>

        <Grid container justify={'center'}>
          <Grid item md={8}>
            <InstagramSection />
          </Grid>
        </Grid>
      </Grid> */}
    </MainWrapper>
  );
};
