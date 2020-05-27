import React, { useState } from 'react';
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
} from '@constants/products';
import { FlexRow, FlexColumn, Flex } from '@styles/styled';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Typography } from '@material-ui/core';
import { SEPARATORS, getDessertRouteKey } from '@utils/Helper';
import { IMainPageSectionProps } from '..';
import { useHistory } from 'react-router-dom';
import { TopSalesItem } from './TopSalesItem';

export function TopSalesSection({ isMobile }: IMainPageSectionProps) {
  const [activeStep, setActiveStep] = useState(0);
  const history = useHistory();
  const maxSteps = 2;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
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
      <FlexRow>
        <FlexColumn bordered>
          <TopSalesItem
            height={15}
            product={macarons[0]}
            onClick={addItemToConstructor}
          />
        </FlexColumn>
      </FlexRow>
    );
    sections.push(
      <FlexRow>
        <FlexColumn bordered>
          <TopSalesItem
            height={15}
            product={choux[0]}
            onClick={addItemToConstructor}
          />
        </FlexColumn>
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
            <IconButtonStyled
              onClick={handleBack}
              disabled={activeStep === 0}
              left
            >
              <KeyboardArrowLeft />
            </IconButtonStyled>
            <IconButtonStyled
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              style={{ marginLeft: '1rem' }}
            >
              <KeyboardArrowRight />
            </IconButtonStyled>
          </div>
        </TopSalesHeader>
        <TopSalesProductsMobile>{sections[activeStep]}</TopSalesProductsMobile>
        <Flex flexEnd>
          <DescriptionLink href='/products'>
            {`${SEPARATORS.DASH} ДЕСЕРТЫ`}
          </DescriptionLink>
        </Flex>
      </Flex>
    );
  }

  sections.push(
    <FlexRow>
      <FlexColumn bordered>
        <TopSalesItem
          height={15}
          product={macarons[0]}
          onClick={addItemToConstructor}
        />
      </FlexColumn>
      <FlexColumn bordered>
        <TopSalesItem
          height={15}
          product={choux[1]}
          onClick={addItemToConstructor}
        />
      </FlexColumn>
      <FlexColumn bordered>
        <TopSalesItem
          height={15}
          product={macarons[2]}
          onClick={addItemToConstructor}
        />
      </FlexColumn>
    </FlexRow>
  );
  sections.push(
    <FlexRow>
      <FlexColumn bordered>
        <TopSalesItem
          height={15}
          product={zephyr[1]}
          onClick={addItemToConstructor}
        />
      </FlexColumn>
      <FlexColumn bordered>
        <TopSalesItem
          height={15}
          product={macarons[4]}
          onClick={addItemToConstructor}
        />
      </FlexColumn>
      <FlexColumn bordered>
        <TopSalesItem
          height={15}
          product={cheesecakes[0]}
          onClick={addItemToConstructor}
        />
      </FlexColumn>
    </FlexRow>
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
          disabled={activeStep === 0}
          style={{ position: 'absolute', left: '-5rem' }}
          left
        >
          <KeyboardArrowLeft />
        </IconButtonStyled>
        {sections[activeStep]}
        <IconButtonStyled
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
          style={{ position: 'absolute', right: '-5rem' }}
        >
          <KeyboardArrowRight />
        </IconButtonStyled>
      </TopSalesProducts>
    </Flex>
  );
}
