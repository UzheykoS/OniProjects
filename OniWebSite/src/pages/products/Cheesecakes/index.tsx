import React from 'react';
import { CheesecakesWrapper, CheesecakesInfo } from './styled';
import { Typography } from '@material-ui/core';
import { FlexRow, FlexColumn } from '@styles/styled';
import { cheesecakes, IProduct } from '@constants/products';
import { useBasket } from '@hooks/useBasket';
import { CheesecakeSingle } from '@components/products/CheesecakeSingle';

export function Cheesecakes() {
  const { addToBasket } = useBasket();

  const handleCheesecakeClick = (item: IProduct) => {
    addToBasket({ product: item, quantity: 1 });
  };

  return (
    <CheesecakesWrapper>
      <FlexRow>
        <FlexColumn style={{ flexGrow: 1, flexShrink: 2 }}>
          <Typography
            variant='h3'
            style={{ whiteSpace: 'nowrap', marginRight: '100px' }}
          >
            НАША ПРОДУКЦИЯ
          </Typography>
        </FlexColumn>
        <FlexColumn style={{ flexGrow: 2 }}>
          <CheesecakesInfo>
            <Typography
              variant='body1'
              style={{ lineHeight: '24px', margin: '0 120px 20px 80px' }}
            >
              Макарон – это маленькое пирожное, которое состоит из двух
              миндальных половинок, пропитанных начинкой. Яркий вкус, нежная
              текстура внутри и хрустящая корочка снаружи.{' '}
            </Typography>
            <Typography
              variant='body2'
              style={{ margin: '10px 70px 20px 80px' }}
            >
              У нас можно выбрать любые вкусы из меню и сформировать свой набор
              на 6, 12 или 24 макарон.
            </Typography>
          </CheesecakesInfo>
        </FlexColumn>
      </FlexRow>

      <FlexRow style={{ justifyContent: 'space-between' }}>
        <FlexColumn>
          <Typography
            variant='h3'
            style={{ margin: '60px 0 30px 0', whiteSpace: 'nowrap' }}
          >
            ВКУСЫ ЧИЗКЕЙКОВ
          </Typography>
        </FlexColumn>
      </FlexRow>

      <FlexRow>
        <FlexColumn bordered>
          <CheesecakeSingle
            product={cheesecakes[0]}
            onClick={handleCheesecakeClick}
          />
        </FlexColumn>
        <FlexColumn bordered>
          <CheesecakeSingle
            product={cheesecakes[1]}
            onClick={handleCheesecakeClick}
          />
        </FlexColumn>
        <FlexColumn bordered>
          <CheesecakeSingle
            product={cheesecakes[2]}
            onClick={handleCheesecakeClick}
          />
        </FlexColumn>
      </FlexRow>
    </CheesecakesWrapper>
  );
}
