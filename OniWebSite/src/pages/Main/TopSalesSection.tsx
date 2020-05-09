import React, { useState } from 'react';
import {
  TopSalesProducts,
  IconButtonStyled,
  DescriptionLink,
  TopSalesHeader,
  TopSalesProductsMobile,
} from './styled';
import { MacaronSingle } from '@components/products/MacaronSingle';
import { macarons, choux, zephyr, cheesecakes } from '@constants/products';
import { FlexRow, FlexColumn, Flex } from '@styles/styled';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { ChouxSingle } from '@components/products/ChouxSingle';
import { ZephyrSingle } from '@components/products/ZephyrSingle';
import { CheesecakeSingle } from '@components/products/CheesecakeSingle';
import { Typography } from '@material-ui/core';
import { SEPARATORS } from '@utils/Helper';
import { IMainPageSectionProps } from '.';

export function TopSalesSection({ isMobile }: IMainPageSectionProps) {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = 2;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const sections = [];
  if (isMobile) {
    sections.push(
      <FlexRow>
        <FlexColumn bordered>
          <MacaronSingle height={15} product={macarons[0]} onClick={() => {}} />
        </FlexColumn>
      </FlexRow>
    );
    sections.push(
      <FlexRow>
        <FlexColumn bordered>
          <MacaronSingle height={15} product={choux[0]} onClick={() => {}} />
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
            {`${SEPARATORS.DASH} ПРОДУКЦИЯ`}
          </DescriptionLink>
        </Flex>
      </Flex>
    );
  }

  sections.push(
    <FlexRow>
      <FlexColumn bordered>
        <MacaronSingle height={15} product={macarons[0]} onClick={() => {}} />
      </FlexColumn>
      <FlexColumn bordered>
        <ChouxSingle height={15} product={choux[1]} onClick={() => {}} />
      </FlexColumn>
      <FlexColumn bordered>
        <MacaronSingle height={15} product={macarons[2]} onClick={() => {}} />
      </FlexColumn>
    </FlexRow>
  );
  sections.push(
    <FlexRow>
      <FlexColumn bordered>
        <ZephyrSingle height={15} product={zephyr[1]} onClick={() => {}} />
      </FlexColumn>
      <FlexColumn bordered>
        <MacaronSingle height={15} product={macarons[4]} onClick={() => {}} />
      </FlexColumn>
      <FlexColumn bordered>
        <CheesecakeSingle
          height={15}
          product={cheesecakes[0]}
          onClick={() => {}}
          showButton={false}
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
          {`${SEPARATORS.DASH} ПРОДУКЦИЯ`}
        </DescriptionLink>
      </TopSalesHeader>
      <TopSalesProducts>
        <IconButtonStyled
          onClick={handleBack}
          disabled={activeStep === 0}
          style={{ margin: '0 3rem 0 0' }}
          left
        >
          <KeyboardArrowLeft />
        </IconButtonStyled>
        {sections[activeStep]}
        <IconButtonStyled
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
          style={{ margin: '0 0 0 3rem' }}
        >
          <KeyboardArrowRight />
        </IconButtonStyled>
      </TopSalesProducts>
    </Flex>
  );
}
