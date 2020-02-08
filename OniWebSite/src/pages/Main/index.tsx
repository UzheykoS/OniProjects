import { loadMainPageImage, preloadImages } from '@utils/Helper';
import { Container, Row, Col } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { BannerSection } from './BannerSection';
import { TopSalesSection } from './TopSalesSection';
import { AboutSection } from './AboutSection';
import { InstagramSection } from './InstagramSection';
import { useLoading } from '@hooks/useLoading';

export const Main = () => {
  const { showLoading, closeLoading } = useLoading();

  const loadImages = async () => {
    await loadMainPageImage('./images/images_large/main1.jpg');

    closeLoading();

    await preloadImages([
      './images/images_large/cakes/cake1.jpg',
      './images/images_large/cakes/cake2.jpg',
      './images/images_large/cakes/cake3.jpg',
      './images/images_large/cakes/cake4.jpg',
      './images/images_large/cakes/cake5.jpg',
      './images/images_large/cakes/cut1.jpg',
      './images/images_large/cakes/cut2.jpg',
      './images/images_large/cakes/cut3.jpg',
      './images/images_large/cakes/cut4.jpg',
      './images/images_large/cakes/cut5.jpg',
      './images/images_large/macarons/macaron1.jpg',
      './images/images_large/macarons/macaron2.jpg',
      './images/images_large/macarons/macaron3.jpg',
      './images/images_large/macarons/macaron4.jpg',
      './images/images_large/macarons/macaron5.jpg',
      './images/images_large/macarons/macaron6.jpg',
      './images/images_large/macarons/macaron7.jpg',
      './images/images_large/macarons/macaron8.jpg',
      './images/images_large/main.jpg',
      './images/images_large/main2.jpg',
      './images/images_large/main3.jpg',
    ]);
  };

  useEffect(() => {
    showLoading();
    loadImages();
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <BannerSection />
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <TopSalesSection />
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <AboutSection />
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <InstagramSection />
          </Col>
        </Row>
      </Container>
    </>
  );
};
