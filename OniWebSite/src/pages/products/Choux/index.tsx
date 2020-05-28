import React, { useReducer, useState, useCallback, useEffect } from 'react';
import { ChouxWrapper, ChouxInfo } from './styled';
import { Typography, useMediaQuery } from '@material-ui/core';
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
import { SCROLL_INTO_VIEW_ELEMENT, BREAKPOINT } from '@constants';
import { useLocation } from 'react-router-dom';
import { ILocationStateProps, getConstructorMode } from '..';

export function ChouxPage() {
  const location = useLocation();
  const { editItem, productItem } =
    (location.state as ILocationStateProps) || {};

  useEffect(() => {
    if (editItem && editItem.contents && editItem.contents.length) {
      editItem.contents.forEach(c => {
        dispatch({ type: 'add', item: c });
      });
    }
    if (productItem) {
      dispatch({ type: 'add', item: productItem });
    }
  }, [editItem]);

  const [state, dispatch] = useReducer(
    constructorReducer,
    initialContstructorState(
      [ConstructoreMode.ChouxSmall, ConstructoreMode.ChouxMedium],
      editItem
        ? getConstructorMode(editItem.product, ConstructoreMode.ChouxSmall)
        : ConstructoreMode.ChouxSmall
    )
  );
  const [expanded, setExpanded] = useState<boolean>(
    !!editItem || !!productItem
  );
  const [selectedMix, setSelectedMix] = useState<IProduct>();
  const handleClose = useCallback(() => setSelectedMix(undefined), []);
  const { addToBasket } = useBasket();
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);

  const handleChouxClick = (item: IProduct) => {
    if (!expanded && !isMobile) {
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

  function cancelModal() {
    const el = document.getElementById(SCROLL_INTO_VIEW_ELEMENT);
    if (el) {
      const viewportOffset = el.getBoundingClientRect();
      window.scrollTo({
        top: viewportOffset.top - 30,
        left: 0,
        behavior: 'smooth',
      });
    }

    setExpanded(true);
    handleClose();
  }

  const chouxElements: JSX.Element[] = [];
  for (let i = 0; i < choux.length; i++) {
    if (i % 2 === 0) {
      chouxElements.push(
        <FlexRow key={i}>
          <FlexColumn bordered>
            <ChouxSingle product={choux[i]} onClick={handleChouxClick} />
          </FlexColumn>
          {i + 1 < choux.length ? (
            <FlexColumn bordered isLastChild>
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
            style={{
              whiteSpace: 'nowrap',
              margin: isMobile ? '50px 10px 10px 10px' : '0 100px 0 0',
            }}
          >
            НАШИ ДЕСЕРТЫ
          </Typography>
        </FlexColumn>
        <FlexColumn style={{ flexGrow: 2 }}>
          <ChouxInfo>
            <Typography
              variant='body1'
              style={{
                lineHeight: isMobile ? '19px' : '24px',
                margin: isMobile ? '10px 10px 40px 10px' : '0 120px 20px 80px',
              }}
            >
              Основа пирожного шу – заварное тесто, покрытое тонким хрустящим
              слоем. Внутри – двойная начинка из нежного крема и яркого центра.
              Шу украшены разноцветными кружочками из марципана. У нас можно
              выбрать любые вкусы из меню и сформировать свой набор на 2 или 4
              шу.{' '}
            </Typography>
            {!isMobile && (
              <Typography
                variant='body2'
                style={{ margin: '10px 70px 20px 80px' }}
              >
                У нас можно выбрать любые вкусы из меню и сформировать свой
                набор на 4 или 8 шу.
              </Typography>
            )}
          </ChouxInfo>
        </FlexColumn>
      </FlexRow>
      <FlexRow>
        <FlexColumn bordered>
          <DessertsMix
            size='large'
            imageHeight={300}
            product={chouxMix[0]}
            onClick={handleChouxMixClick}
          />
        </FlexColumn>
        <FlexColumn bordered>
          <DessertsMix
            size='large'
            imageHeight={300}
            product={chouxMix[1]}
            onClick={handleChouxMixClick}
          />
        </FlexColumn>
      </FlexRow>

      {isMobile && (
        <FlexRow style={{ justifyContent: 'center', marginTop: '20px' }}>
          <ConstructorContainer
            state={state}
            dispatch={dispatch}
            expanded={expanded}
            setExpanded={setExpanded}
            stickyLimit={1100}
            editItem={editItem}
          />
        </FlexRow>
      )}

      <FlexRow style={{ justifyContent: 'space-between' }}>
        <FlexColumn>
          <Typography
            variant='h3'
            id={SCROLL_INTO_VIEW_ELEMENT}
            style={{ margin: '60px 0 30px 0', whiteSpace: 'nowrap' }}
          >
            ВКУСЫ ШУ
          </Typography>
        </FlexColumn>
        <FlexColumn />
        {!isMobile && (
          <FlexColumn
            style={{
              position: 'relative',
            }}
          >
            <ConstructorContainer
              state={state}
              dispatch={dispatch}
              expanded={expanded}
              setExpanded={setExpanded}
              stickyLimit={1000}
              editItem={editItem}
            />
          </FlexColumn>
        )}
      </FlexRow>

      {chouxElements}
      {!!selectedMix && (
        <MixSelectModal
          mix={selectedMix}
          confirmAdd={handleChouxMixConfirm}
          closeModal={handleClose}
          open={!!selectedMix}
          cancelModal={cancelModal}
        />
      )}
    </ChouxWrapper>
  );
}
