import React, { useReducer, useState } from 'react';
import { ZephyrWrapper, ZephyrInfo } from './styled';
import { Typography } from '@material-ui/core';
import { FlexRow, FlexColumn } from '@styles/styled';
import {
  constructorReducer,
  initialContstructorState,
  IItem,
  ConstructoreMode,
  ConstructorError,
} from '@components/Constructor/Constructor';
import { ConstructorContainer } from '@components/Constructor';
import { DessertsMix } from '@components/DessertsMix';
import { ZephyrSingle } from '@components/ZephyrSingle';

export function Zephyr() {
  const [state, dispatch] = useReducer(
    constructorReducer,
    initialContstructorState(
      [ConstructoreMode.ZephyrSmall, ConstructoreMode.ZephyrMedium],
      ConstructoreMode.ZephyrSmall
    )
  );
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleZephyrClick = (item: IItem) => {
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
            quantity={8}
            price={80}
            imageUrl='./images/images_large/zephyr/zephyr_mix_small.jpg'
          />
        </FlexColumn>
        <FlexColumn bordered>
          <DessertsMix
            quantity={16}
            price={160}
            imageUrl={'./images/images_large/zephyr/zephyr_mix_large.jpg'}
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

      <FlexRow>
        <FlexColumn bordered>
          <ZephyrSingle
            name='КЛАССИЧЕСКИЙ ЯБЛОЧНЫЙ'
            description='Сделан на основе натурального пюре запечённого яблока'
            hoverImageUrl='./images/images_large/zephyr/zephyr_1.jpg'
            imageUrl='./images/images_large/zephyr/zephyr_1.jpg'
            onClick={handleZephyrClick}
          />
        </FlexColumn>
        <FlexColumn bordered>
          <ZephyrSingle
            name='СМОРОДИНА'
            description='Сделан на основе натурального пюре чёрной смородины'
            imageUrl='./images/images_large/zephyr/zephyr_2.jpg'
            hoverImageUrl='./images/images_large/zephyr/zephyr_2.jpg'
            onClick={handleZephyrClick}
          />
        </FlexColumn>
        <FlexColumn />
      </FlexRow>
      <FlexRow>
        <FlexColumn bordered>
          <ZephyrSingle
            name='КЛУБНИКА-КЛЮКВА'
            description='Сделан на основе натурального пюре клубники и клюквы'
            imageUrl='./images/images_large/zephyr/zephyr_3.jpg'
            hoverImageUrl='./images/images_large/zephyr/zephyr_3.jpg'
            onClick={handleZephyrClick}
          />
        </FlexColumn>
        <FlexColumn bordered>
          <ZephyrSingle
            name='АБРИКОС-МАРАКУЙЯ'
            description='Сделан на основе натурального пюре абрикоса и маракуйи'
            imageUrl='./images/images_large/zephyr/zephyr_4.jpg'
            hoverImageUrl='./images/images_large/zephyr/zephyr_4.jpg'
            onClick={handleZephyrClick}
          />
        </FlexColumn>
        <FlexColumn />
      </FlexRow>
    </ZephyrWrapper>
  );
}
