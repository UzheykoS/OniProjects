import React from 'react';
import { CheesecakesInfo } from './styled';
import { Typography, useMediaQuery } from '@material-ui/core';
import { FlexRow, FlexColumn } from '@styles/styled';
import { cheesecakes, IProduct } from '@constants/products';
import { useBasket } from '@hooks/useBasket';
import { CheesecakeSingle } from '@components/products/CheesecakeSingle';
import { BREAKPOINT } from '@constants';
import { DessertsWrapperBase } from '@common/styled';

export function Cheesecakes() {
  const { addToBasket } = useBasket();
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);

  const handleCheesecakeClick = (item: IProduct) => {
    addToBasket({ product: item, quantity: 1 });
  };

  return (
    <DessertsWrapperBase>
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
            Чизкейки
          </Typography>
        </FlexColumn>
        <FlexColumn style={{ flexGrow: 2 }}>
          <CheesecakesInfo>
            <Typography
              variant='body1'
              style={{
                lineHeight: isMobile ? '19px' : '24px',
                margin: isMobile ? '10px 10px 20px 10px' : '0 120px 20px 0',
              }}
            >
              Мы делаем запечённые чизкейки на основе сыра Филадельфия - всё,
              как надо. В нашем меню три вкуса. Кардинально разные, чтобы каждый
              нашёл что-то для себя.
            </Typography>
            <Typography
              variant='body2'
              style={{
                margin: isMobile ? '0 10px 20px 10px' : '10px 70px 20px 0px',
              }}
            >
              У нас можно выбрать любые вкусы из меню и сформировать свой набор
              на 6, 12 или 24 макарон.
            </Typography>
          </CheesecakesInfo>
        </FlexColumn>
      </FlexRow>

      <FlexRow>
        <FlexColumn bordered>
          <CheesecakeSingle
            product={cheesecakes[0]}
            showButton
            onClick={handleCheesecakeClick}
          />
        </FlexColumn>
        <FlexColumn bordered>
          <CheesecakeSingle
            product={cheesecakes[1]}
            showButton
            onClick={handleCheesecakeClick}
          />
        </FlexColumn>
        <FlexColumn bordered isLastChild>
          <CheesecakeSingle
            product={cheesecakes[2]}
            showButton
            onClick={handleCheesecakeClick}
          />
        </FlexColumn>
      </FlexRow>
    </DessertsWrapperBase>
  );
}
