import React, { useReducer, useState } from 'react';
import { ChouxWrapper, ChouxInfo } from './styled';
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
import { ChouxSingle } from '@components/ChouxSingle';

export function Choux() {
  const [state, dispatch] = useReducer(
    constructorReducer,
    initialContstructorState(
      [ConstructoreMode.ChouxSmall, ConstructoreMode.ChouxMedium],
      ConstructoreMode.ChouxSmall
    )
  );
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleChouxClick = (item: IItem) => {
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
    <ChouxWrapper>
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
          <ChouxInfo>
            <Typography
              variant='body1'
              style={{ lineHeight: '24px', margin: '0 120px 20px 80px' }}
            >
              Основа пирожного шу – заварное тесто, покрытое тонким хрустящим
              слоем. Внутри – двойная начинка из нежного крема и яркого центра.
              Шу украшены разноцветными кружочками из марципана. У нас можно
              выбрать любые вкусы из меню и сформировать свой набор на 2 или 4
              шу.{' '}
            </Typography>
            <Typography
              variant='body2'
              style={{ margin: '10px 70px 20px 80px' }}
            >
              У нас можно выбрать любые вкусы из меню и сформировать свой набор
              на 4 или 8 шу.
            </Typography>
          </ChouxInfo>
        </FlexColumn>
      </FlexRow>
      <FlexRow>
        <FlexColumn bordered>
          <DessertsMix
            quantity={4}
            price={80}
            imageUrl='./images/images_large/choux/choux_mix_small.jpg'
          />
        </FlexColumn>
        <FlexColumn bordered>
          <DessertsMix
            quantity={8}
            price={160}
            imageUrl={'./images/images_large/choux/choux_mix_large.jpg'}
          />
        </FlexColumn>
        <FlexColumn />
      </FlexRow>

      <FlexRow style={{ justifyContent: 'space-between' }}>
        <FlexColumn>
          <Typography
            variant='h3'
            style={{ margin: '60px 0 30px 0', whiteSpace: 'nowrap' }}
          >
            ВКУСЫ ШУ
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
          <ChouxSingle
            name='ФИСТАШКА-АПЕЛЬСИН'
            description='Крем с натуральной 100% фисташковой пастой и цедрой апельсина в сочетании с конфи из натурального пюре апельсина'
            hoverImageUrl='./images/images_large/choux/choux_1_hover.jpg'
            imageUrl='./images/images_large/choux/choux_1.jpg'
            onClick={handleChouxClick}
          />
        </FlexColumn>
        <FlexColumn bordered>
          <ChouxSingle
            name='СОЛЁНАЯ КАРАМЕЛЬ'
            description='Мягкая солёная карамель в сочетании с нежным карамельным кремом'
            imageUrl='./images/images_large/choux/choux_2.jpg'
            hoverImageUrl='./images/images_large/choux/choux_2_hover.jpg'
            onClick={handleChouxClick}
          />
        </FlexColumn>
        <FlexColumn />
      </FlexRow>
      <FlexRow>
        <FlexColumn bordered>
          <ChouxSingle
            name='МАЛИНА-ЛИЧИ-РОЗА'
            description='Крем с натуральным пюре личи и лепестками чайной розы в сочетании с конфи из натурального пюре малины'
            imageUrl='./images/images_large/choux/choux_3.jpg'
            hoverImageUrl='./images/images_large/choux/choux_3_hover.jpg'
            onClick={handleChouxClick}
          />
        </FlexColumn>
        <FlexColumn bordered>
          <ChouxSingle
            name='ВАНИЛЬ-ПЕРСИК'
            description='Крем с добавлением натуральных стручков ванили из Мадагаскара в сочетании с конфи из натурального пюре персика'
            imageUrl='./images/images_large/choux/choux_4.jpg'
            hoverImageUrl='./images/images_large/choux/choux_4_hover.jpg'
            onClick={handleChouxClick}
          />
        </FlexColumn>
        <FlexColumn />
      </FlexRow>
    </ChouxWrapper>
  );
}
