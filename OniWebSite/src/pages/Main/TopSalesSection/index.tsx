import React, { useRef } from 'react';
import {
  TopSalesProducts,
  IconButtonStyled,
  DescriptionLink,
  TopSalesHeader,
  TopSalesProductsMobile,
} from '../styled';
import {
  macarons,
  choux,
  zephyr,
  cheesecakes,
  IProduct,
  cakes,
} from '@constants/products';
import { FlexRow, Flex, FlexColumn } from '@styles/styled';
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
      // uncomment to add item and  scroll user to constructor
      // state: { productItem: product },
    });
  }

  const sections = [];
  sections.push(
    <FlexColumn style={{ marginTop: '1px' }} bordered key={0}>
      <TopSalesItem
        product={macarons[0]}
        title='Макарон'
        description='Любимый десерт французов. Маленькое пирожное, которое состоит из двух миндальных половинок, пропитанных начинкой. Яркий вкус, нежная текстура внутри и хрустящая корочка снаружи'
        onClick={addItemToConstructor}
      />
    </FlexColumn>
  );
  sections.push(
    <FlexColumn style={{ marginTop: '1px' }} bordered key={1}>
      <TopSalesItem
        product={choux[0]}
        title='Шу'
        description='Основа пирожного шу – заварное тесто, покрытое тонким хрустящим слоем. Внутри – много начинки и лёгкого крема. Украшаем разноцветными кружочками из марципана'
        onClick={addItemToConstructor}
      />
    </FlexColumn>
  );
  sections.push(
    <FlexColumn style={{ marginTop: '1px' }} bordered key={2}>
      <TopSalesItem
        product={zephyr[0]}
        title='Зефир'
        description='Как в детстве, только ещё вкуснее. Мы разработали рецептуру с пониженным содержанием сахара и готовим зефир на основе натуральных фруктовых пюре без красителей и ароматизаторов'
        onClick={addItemToConstructor}
      />
    </FlexColumn>
  );
  sections.push(
    <FlexColumn style={{ marginTop: '1px' }} bordered key={3}>
      <TopSalesItem
        product={cheesecakes[0]}
        title='Чизкейки'
        description=''
        onClick={addItemToConstructor}
      />
    </FlexColumn>
  );
  sections.push(
    <FlexColumn style={{ marginTop: '1px' }} bordered key={4}>
      <TopSalesItem
        product={cakes[0][0]}
        title='Торты'
        description='Баланс во вкусе, правильная текстура и аппетитный декор – это наш идеальный торт. Каждый продуман до мелочей и заставляет посмотреть на десерты по-новому'
        onClick={addItemToConstructor}
      />
    </FlexColumn>
  );

  if (isMobile) {
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
            {sections.map((s, i) => (
              <FlexRow key={i}>{s}</FlexRow>
            ))}
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
