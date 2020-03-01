import React, { useReducer, useState, useCallback } from 'react';
import { MacaronSingle } from '../../../components/products/MacaronSingle';
import { MacaronsWrapper, MacaronsInfo } from './styled';
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
import { macarons, macaronMix, IProduct } from '@constants/products';
import { useBasket } from '@hooks/useBasket';
import MixSelectModal from '@components/modals/MixSelectModal';

export function Macarons() {
  const [state, dispatch] = useReducer(
    constructorReducer,
    initialContstructorState(
      [
        ConstructoreMode.MacaronSmall,
        ConstructoreMode.MacaronMedium,
        ConstructoreMode.MacaronLarge,
      ],
      ConstructoreMode.MacaronSmall
    )
  );
  const [expanded, setExpanded] = useState<boolean>(false);
  const [selectedMix, setSelectedMix] = useState<IProduct>();
  const handleClose = useCallback(() => setSelectedMix(undefined), []);
  const { addToBasket } = useBasket();

  const handleMacaronClick = (item: IProduct) => {
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

  const handleMacaronsMixClick = (item: IProduct) => {
    setSelectedMix(item);
  };

  const handleMacaronsMixConfirm = () => {
    if (!selectedMix) {
      return;
    }
    addToBasket({ product: selectedMix, quantity: 1 });
    handleClose();
  };

  const macaronElements: JSX.Element[] = [];
  for (let i = 0; i < macarons.length; i++) {
    if (i % 2 === 0) {
      macaronElements.push(
        <FlexRow key={i}>
          <FlexColumn bordered>
            <MacaronSingle product={macarons[i]} onClick={handleMacaronClick} />
          </FlexColumn>
          {i + 1 < macarons.length ? (
            <FlexColumn bordered>
              <MacaronSingle
                product={macarons[i + 1]}
                onClick={handleMacaronClick}
              />
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
    <MacaronsWrapper>
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
          <DessertsMix
            product={macaronMix[0]}
            onClick={handleMacaronsMixClick}
          />
        </FlexColumn>
        <FlexColumn bordered>
          <DessertsMix
            product={macaronMix[1]}
            onClick={handleMacaronsMixClick}
          />
        </FlexColumn>
        <FlexColumn bordered>
          <DessertsMix
            product={macaronMix[2]}
            onClick={handleMacaronsMixClick}
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
          style={{ width: '310px', marginRight: '100px', position: 'relative' }}
        >
          <ConstructorContainer
            state={state}
            dispatch={dispatch}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        </FlexColumn>
      </FlexRow>
      {macaronElements}
      {!!selectedMix && (
        <MixSelectModal
          mix={selectedMix}
          confirmAdd={handleMacaronsMixConfirm}
          closeModal={handleClose}
          open={!!selectedMix}
        />
      )}
    </MacaronsWrapper>
  );
}
