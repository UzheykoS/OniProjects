import React, { useReducer, useState, useCallback } from 'react';
import { ChouxWrapper, ChouxInfo } from './styled';
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
import { ChouxSingle } from '@components/products/ChouxSingle';
import { chouxMix, choux, IProduct } from '@constants/products';
import MixSelectModal from '@components/modals/MixSelectModal';
import { useBasket } from '@hooks/useBasket';

export function Choux() {
  const [state, dispatch] = useReducer(
    constructorReducer,
    initialContstructorState(
      [ConstructoreMode.ChouxSmall, ConstructoreMode.ChouxMedium],
      ConstructoreMode.ChouxSmall
    )
  );
  const [expanded, setExpanded] = useState<boolean>(false);
  const [selectedMix, setSelectedMix] = useState<IProduct>();
  const handleClose = useCallback(() => setSelectedMix(undefined), []);
  const { addToBasket } = useBasket();

  const handleChouxClick = (item: IProduct) => {
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

  const handleChouxMixClick = (item: IProduct) => {
    setSelectedMix(item);
  };

  const handleChouxMixConfirm = () => {
    if (!selectedMix) {
      return;
    }
    addToBasket({ product: selectedMix, quantity: 1 });
    handleClose();
  };

  const chouxElements: JSX.Element[] = [];
  for (let i = 0; i < choux.length; i++) {
    if (i % 2 === 0) {
      chouxElements.push(
        <FlexRow key={i}>
          <FlexColumn bordered>
            <ChouxSingle product={choux[i]} onClick={handleChouxClick} />
          </FlexColumn>
          {i + 1 < choux.length ? (
            <FlexColumn bordered>
              <ChouxSingle product={choux[i + 1]} onClick={handleChouxClick} />
            </FlexColumn>
          ) : (
            <FlexColumn />
          )}
          <FlexColumn />
        </FlexRow>
      );
    }
  }

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
          <DessertsMix product={chouxMix[0]} onClick={handleChouxMixClick} />
        </FlexColumn>
        <FlexColumn bordered>
          <DessertsMix product={chouxMix[1]} onClick={handleChouxMixClick} />
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

      {chouxElements}
      {!!selectedMix && (
        <MixSelectModal
          mix={selectedMix}
          confirmAdd={handleChouxMixConfirm}
          closeModal={handleClose}
          open={!!selectedMix}
        />
      )}
    </ChouxWrapper>
  );
}
