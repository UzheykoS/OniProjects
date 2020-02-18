import React, { useReducer, useState } from 'react';
import { ZephyrWrapper, ZephyrInfo } from './styled';
import { Typography } from '@material-ui/core';
import { FlexRow, FlexColumn } from '@styles/styled';
import {
  constructorReducer,
  initialContstructorState,
  ConstructoreMode,
  ConstructorError,
} from '@components/Constructor/Constructor';
import { ConstructorContainer } from '@components/Constructor';
import { DessertsMix } from '@components/DessertsMix';
import { ZephyrSingle } from '@components/ZephyrSingle';
import { zephyrMix, zephyr, IProduct } from '@constants/products';

export function Zephyr() {
  const [state, dispatch] = useReducer(
    constructorReducer,
    initialContstructorState(
      [ConstructoreMode.ZephyrSmall, ConstructoreMode.ZephyrMedium],
      ConstructoreMode.ZephyrSmall
    )
  );
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleZephyrClick = (item: IProduct) => {
    if (!expanded) {
      setExpanded(true);
    }
    try {
      dispatch({ type: 'add', item });
    } catch (e) {
      if (e instanceof ConstructorError) {
        console.log('Add modal dialog asking to increase mix size');
      }
    }
  };

  const zephyrElements: JSX.Element[] = [];
  for (let i = 0; i < zephyr.length; i++) {
    if (i % 2 === 0) {
      zephyrElements.push(
        <FlexRow key={i}>
          <FlexColumn bordered>
            <ZephyrSingle {...zephyr[i]} onClick={handleZephyrClick} />
          </FlexColumn>
          <FlexColumn bordered>
            <ZephyrSingle {...zephyr[i + 1]} onClick={handleZephyrClick} />
          </FlexColumn>
          <FlexColumn />
        </FlexRow>
      );
    }
  }

  return (
    <ZephyrWrapper>
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
          <ZephyrInfo>
            <Typography
              variant='body1'
              style={{ lineHeight: '24px', margin: '0 120px 20px 80px' }}
            >
              Мы разработали рецептуру с пониженным содержанием сахара и готовим
              наш зефир исключительно на основе натуральных фруктовых пюре без
              ароматизаторов и консервантов. У нас можно выбрать любые вкусы из
              меню и сформировать свой набор на 8 или 16 шт.{' '}
            </Typography>
            <Typography
              variant='body2'
              style={{ margin: '10px 70px 20px 80px' }}
            >
              У нас можно выбрать любые вкусы из меню и сформировать свой набор
              на 8 или 16 зефира.
            </Typography>
          </ZephyrInfo>
        </FlexColumn>
      </FlexRow>
      <FlexRow>
        <FlexColumn bordered>
          <DessertsMix
            price={80}
            quantity={zephyrMix[0].name}
            imageUrl={zephyrMix[0].imageUrl}
          />
        </FlexColumn>
        <FlexColumn bordered>
          <DessertsMix
            price={160}
            quantity={zephyrMix[1].name}
            imageUrl={zephyrMix[1].imageUrl}
          />
        </FlexColumn>
      </FlexRow>

      <FlexRow style={{ justifyContent: 'space-between' }}>
        <FlexColumn>
          <Typography
            variant='h3'
            style={{ margin: '60px 0 30px 0', whiteSpace: 'nowrap' }}
          >
            ВКУСЫ ЗЕФИРА
          </Typography>
        </FlexColumn>
        <FlexColumn
          style={{ width: '310px', marginRight: '120px', position: 'relative' }}
        >
          <ConstructorContainer
            state={state}
            dispatch={dispatch}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        </FlexColumn>
      </FlexRow>

      {zephyrElements}
    </ZephyrWrapper>
  );
}
