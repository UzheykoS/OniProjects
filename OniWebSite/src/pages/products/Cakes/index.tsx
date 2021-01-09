import React from 'react';
import { CakeSingle, CakeSubmitInfo } from '@components/products/CakeSingle';
import { cakes } from '@constants/products';
import { useBasket } from '@hooks/useBasket';
import { CakesWrapper, CakesInfo, CakesMenuWrapper } from './styled';
import { FlexRow, FlexColumn } from '@styles/styled';
import { Typography, useMediaQuery } from '@material-ui/core';
import { BREAKPOINT } from '@constants';

export function Cakes() {
  const { addToBasket } = useBasket();
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);

  const handleCakeAdd = (info: CakeSubmitInfo) => {
    addToBasket({
      quantity: info.quantity,
      product: info.cake,
    });
  };

  return (
    <CakesWrapper>
      <FlexRow>
        <FlexColumn style={{ flexGrow: 1, flexShrink: 2 }}>
          <Typography
            variant='h1'
            style={{
              whiteSpace: 'nowrap',
              margin: isMobile ? '50px 10px 10px 10px' : '0 100px 0 0',
              fontSize: '40px',
            }}
          >
            Торты
          </Typography>
        </FlexColumn>
        <FlexColumn style={{ flexGrow: 2 }}>
          <CakesInfo>
            <Typography
              variant='body1'
              style={{
                lineHeight: isMobile ? '19px' : '24px',
                margin: isMobile ? '10px 10px 20px 10px' : '0 120px 20px 0',
              }}
            >
              Баланс во вкусе, правильная текстура и аппетитный декор – это наш
              идеальный торт. Каждый продуман до мелочей и заставляет посмотреть
              на десерты по-новому.
            </Typography>
            <Typography
              variant='body2'
              style={{
                margin: isMobile ? '0 10px 20px 10px' : '10px 70px 20px 0px',
              }}
            >
              Меню тортов стандартное – нельзя менять составляющие или декор.
              Заказ необходимо делать минимум за 6 часов. Вы получите свежий
              торт, сделанный специально для вас.
            </Typography>
          </CakesInfo>
        </FlexColumn>
      </FlexRow>
      <CakesMenuWrapper>
        <CakeSingle cakePair={cakes[0]} onClick={handleCakeAdd} />
        <CakeSingle cakePair={cakes[1]} onClick={handleCakeAdd} />
        <CakeSingle cakePair={cakes[2]} onClick={handleCakeAdd} />
        <CakeSingle cakePair={cakes[3]} onClick={handleCakeAdd} />
        <CakeSingle cakePair={cakes[4]} onClick={handleCakeAdd} />
      </CakesMenuWrapper>
    </CakesWrapper>
  );
}
