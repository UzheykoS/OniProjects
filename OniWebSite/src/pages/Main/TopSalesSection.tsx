import React, { useState } from 'react';
import {
  TopSalesWrapper,
  TopSalesProducts,
  IconButtonStyled,
  DescriptionLink,
  TopSalesHeader,
} from './styled';
import { MacaronSingle } from '@components/products/MacaronSingle';
import { macarons, choux, zephyr, cheesecakes } from '@constants/products';
import { FlexRow, FlexColumn } from '@styles/styled';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { ChouxSingle } from '@components/products/ChouxSingle';
import { ZephyrSingle } from '@components/products/ZephyrSingle';
import { CheesecakeSingle } from '@components/products/CheesecakeSingle';
import { Typography } from '@material-ui/core';
import { SEPARATORS } from '@utils/Helper';

export function TopSalesSection() {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = 2;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const sections = [];
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
    <TopSalesWrapper>
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
    </TopSalesWrapper>
  );
}
