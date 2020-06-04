import React, { useRef } from 'react';
import {
  TopSalesProducts,
  IconButtonStyled,
  DescriptionLink,
  TopSalesHeader,
  TopSalesProductsMobile,
  FlexColumnStyled,
} from '../styled';
import {
  macarons,
  choux,
  zephyr,
  cheesecakes,
  IProduct,
} from '@constants/products';
import { FlexRow, Flex } from '@styles/styled';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Typography } from '@material-ui/core';
import { SEPARATORS, getDessertRouteKey } from '@utils/Helper';
import { IMainPageSectionProps } from '..';
import { useHistory } from 'react-router-dom';
import { TopSalesItem } from './TopSalesItem';
import Slider from 'react-slick';

export function TopSalesSection({ isMobile }: IMainPageSectionProps) {
  const history = useHistory();
  const slider = useRef<Slider>(null);

  const handleNext = () => {
    slider?.current?.slickNext();
  };

  const handleBack = () => {
    slider?.current?.slickPrev();
  };

  function addItemToConstructor(product: IProduct) {
    history.push({
      pathname: getDessertRouteKey(product) || '/',
      state: { productItem: product },
    });
  }

  const sections = [];
  if (isMobile) {
    sections.push(
      <FlexRow key={0}>
        <FlexColumnStyled bordered isLastChild>
          <TopSalesItem
            height={15}
            product={macarons[0]}
            isMobile
            onClick={addItemToConstructor}
          />
        </FlexColumnStyled>
      </FlexRow>
    );
    sections.push(
      <FlexRow key={1}>
        <FlexColumnStyled bordered isLastChild>
          <TopSalesItem
            height={15}
            product={choux[0]}
            isMobile
            onClick={addItemToConstructor}
          />
        </FlexColumnStyled>
      </FlexRow>
    );

    return (
      <Flex direction={'column'} style={{ margin: '2rem' }}>
        <TopSalesHeader>
          <Typography
            variant='h3'
            gutterBottom
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            ТОП ПРОДАЖ
          </Typography>
          <div>
            <IconButtonStyled onClick={handleBack} left>
              <KeyboardArrowLeft />
            </IconButtonStyled>
            <IconButtonStyled
              onClick={handleNext}
              style={{ marginLeft: '1rem' }}
            >
              <KeyboardArrowRight />
            </IconButtonStyled>
          </div>
        </TopSalesHeader>
        <TopSalesProductsMobile>
          <Slider
            ref={slider}
            {...{
              dots: false,
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1,
              focusOnSelect: false,
              // beforeChange: (_current, next) => setActiveStep(next),
            }}
          >
            {sections}
          </Slider>
        </TopSalesProductsMobile>
        <Flex flexEnd>
          <DescriptionLink href='/products'>
            {`${SEPARATORS.DASH} ДЕСЕРТЫ`}
          </DescriptionLink>
        </Flex>
      </Flex>
    );
  }

  sections.push(
    <FlexColumnStyled bordered key={0}>
      <TopSalesItem product={macarons[0]} onClick={addItemToConstructor} />
    </FlexColumnStyled>
  );
  sections.push(
    <FlexColumnStyled bordered key={1}>
      <TopSalesItem product={choux[1]} onClick={addItemToConstructor} />
    </FlexColumnStyled>
  );
  sections.push(
    <FlexColumnStyled bordered key={2}>
      <TopSalesItem product={macarons[2]} onClick={addItemToConstructor} />
    </FlexColumnStyled>
  );
  sections.push(
    <FlexColumnStyled bordered key={3}>
      <TopSalesItem product={zephyr[1]} onClick={addItemToConstructor} />
    </FlexColumnStyled>
  );
  sections.push(
    <FlexColumnStyled bordered key={4}>
      <TopSalesItem product={macarons[4]} onClick={addItemToConstructor} />
    </FlexColumnStyled>
  );
  sections.push(
    <FlexColumnStyled bordered key={5}>
      <TopSalesItem product={cheesecakes[0]} onClick={addItemToConstructor} />
    </FlexColumnStyled>
  );

  return (
    <Flex direction={'column'}>
      <TopSalesHeader>
        <Typography variant='h3' gutterBottom>
          ТОП ПРОДАЖ
        </Typography>
        <DescriptionLink href='/products'>
          {`${SEPARATORS.DASH} ДЕСЕРТЫ`}
        </DescriptionLink>
      </TopSalesHeader>
      <TopSalesProducts>
        <IconButtonStyled
          onClick={handleBack}
          style={{ position: 'absolute', left: '-5rem' }}
          left
        >
          <KeyboardArrowLeft />
        </IconButtonStyled>
        <Slider
          ref={slider}
          {...{
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            focusOnSelect: false,
            swipeToSlide: false,
            draggable: false,
          }}
        >
          {sections}
        </Slider>
        <IconButtonStyled
          onClick={handleNext}
          style={{ position: 'absolute', right: '-5rem' }}
        >
          <KeyboardArrowRight />
        </IconButtonStyled>
      </TopSalesProducts>
    </Flex>
  );
}
