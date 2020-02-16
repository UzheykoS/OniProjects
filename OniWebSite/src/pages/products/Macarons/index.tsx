import React, { useReducer, useState } from 'react';
import { MacaronSingle } from '../../../components/MacaronSingle';
import { MacaronsWrapper, MacaronsInfo } from './styled';
import { Typography } from '@material-ui/core';
import { FlexRow, FlexColumn } from '@styles/styled';
import { MacaronsMix } from './MacaronsMix';
import { MacaronsConstructorContainer } from './MacaronsConstructor';
import {
  constructorReducer,
  initialContstructorState,
  IItem,
} from './MacaronsConstructor/MacaronsConstructor';

export function Macarons() {
  const [state, dispatch] = useReducer(
    constructorReducer,
    initialContstructorState
  );
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleMacaronClick = (item: IItem) => {
    if (!expanded) {
      setExpanded(true);
    }
    dispatch({ type: 'add', item });
  };

  return (
    <MacaronsWrapper>
      <FlexRow>
        <FlexColumn>
          <Typography
            // className={'stretch'}
            variant='h3'
            style={{ whiteSpace: 'nowrap', marginRight: '100px' }}
          >
            НАША ПРОДУКЦИЯ
          </Typography>
        </FlexColumn>
        <FlexColumn>
          <MacaronsInfo>
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
          </MacaronsInfo>
        </FlexColumn>
      </FlexRow>
      <FlexRow>
        <FlexColumn bordered>
          <MacaronsMix
            quantity={6}
            price={168}
            imageUrl='./images/images_large/macarons/mac_small.jpg'
          />
        </FlexColumn>
        <FlexColumn bordered>
          <MacaronsMix
            quantity={12}
            price={336}
            imageUrl={'./images/images_large/macarons/mac_medium.jpg'}
          />
        </FlexColumn>
        <FlexColumn bordered>
          <MacaronsMix
            quantity={24}
            price={672}
            imageUrl={'./images/images_large/macarons/mac_large.jpg'}
          />
        </FlexColumn>
      </FlexRow>

      <FlexRow style={{ justifyContent: 'space-between' }}>
        <FlexColumn>
          <Typography
            variant='h3'
            style={{ margin: '60px 0 30px 0', whiteSpace: 'nowrap' }}
          >
            ВКУСЫ МАКАРОН
          </Typography>
        </FlexColumn>
        <FlexColumn
          style={{ width: '310px', marginRight: '120px', position: 'relative' }}
        >
          <MacaronsConstructorContainer
            state={state}
            dispatch={dispatch}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        </FlexColumn>
      </FlexRow>

      <FlexRow>
        <FlexColumn bordered>
          <MacaronSingle
            name='Малина'
            description='Двойная начинка на основе натурального пюре малины с ярким малиновым центром'
            hoverImageUrl='./images/images_large/macarons/macaron1_hover.jpg'
            imageUrl='./images/images_large/macarons/macaron1.jpg'
            onClick={handleMacaronClick}
          />
        </FlexColumn>
        <FlexColumn bordered>
          <MacaronSingle
            name='Манго-Маракуйя'
            description='Двойная начинка на основе натурального пюре манго и маракуйи с ярким центром манго-маракуйя'
            imageUrl='./images/images_large/macarons/macaron2.jpg'
            hoverImageUrl='./images/images_large/macarons/macaron2_hover.jpg'
            onClick={handleMacaronClick}
          />
        </FlexColumn>
      </FlexRow>
      <FlexRow>
        <FlexColumn bordered>
          <MacaronSingle
            name='Фисташка'
            description='Начинка на основе натуральной  100% фисташковой пасты без сахара'
            imageUrl='./images/images_large/macarons/macaron3.jpg'
            hoverImageUrl='./images/images_large/macarons/macaron3_hover.jpg'
            onClick={handleMacaronClick}
          />
        </FlexColumn>
        <FlexColumn bordered>
          <MacaronSingle
            name='Дор Блю-Груша'
            description='Двойная начинка на основе сыра Дор Блю с центром из натурального грушевого пюре'
            imageUrl='./images/images_large/macarons/macaron4.jpg'
            hoverImageUrl='./images/images_large/macarons/macaron4_hover.jpg'
            onClick={handleMacaronClick}
          />
        </FlexColumn>
      </FlexRow>
      <FlexRow>
        <FlexColumn bordered>
          <MacaronSingle
            name='Кофе-Солёная карамель'
            description='Двойная начинка на основе натурального кофе с центром из мягкой соленой карамели'
            imageUrl='./images/images_large/macarons/macaron5.jpg'
            hoverImageUrl='./images/images_large/macarons/macaron5_hover.jpg'
            onClick={handleMacaronClick}
          />
        </FlexColumn>
        <FlexColumn bordered>
          <MacaronSingle
            name='Пармезан-Инжир'
            description='Двойная начинка на основе сыра Пармезан с центром из натурального пюре инжира'
            imageUrl='./images/images_large/macarons/macaron6.jpg'
            hoverImageUrl='./images/images_large/macarons/macaron6_hover.jpg'
            onClick={handleMacaronClick}
          />
        </FlexColumn>
      </FlexRow>
      <FlexRow>
        <FlexColumn bordered>
          <MacaronSingle
            name='Смородина'
            description='Двойная начинка на основе натурального пюре смородины с ярким смородиновым центром'
            imageUrl='./images/images_large/macarons/macaron7.jpg'
            hoverImageUrl='./images/images_large/macarons/macaron7_hover.jpg'
            onClick={handleMacaronClick}
          />
        </FlexColumn>
        <FlexColumn bordered>
          <MacaronSingle
            name='Шоколад'
            description='Начинка на основе натурального бельгийского черного шоколада 60%'
            imageUrl='./images/images_large/macarons/macaron8.jpg'
            hoverImageUrl='./images/images_large/macarons/macaron8_hover.jpg'
            onClick={handleMacaronClick}
          />
        </FlexColumn>
      </FlexRow>
      <FlexRow>
        <FlexColumn bordered>
          <MacaronSingle
            name='Лаванда-Черника'
            description='Двойная начинка на основе молочных сливок, настоянных на цветках лаванды, с центром из натурального пюре черники'
            imageUrl='./images/images_large/macarons/macaron9.jpg'
            hoverImageUrl='./images/images_large/macarons/macaron9_hover.jpg'
            onClick={handleMacaronClick}
          />
        </FlexColumn>
      </FlexRow>
    </MacaronsWrapper>
  );
}
