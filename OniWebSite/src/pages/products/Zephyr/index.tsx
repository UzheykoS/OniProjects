import React, { useReducer, useState, useCallback, useEffect } from 'react';
import { ZephyrWrapper, ZephyrInfo } from './styled';
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
import { ZephyrSingle } from '@components/products/ZephyrSingle';
import { zephyrMix, zephyr, IProduct } from '@constants/products';
import MixSelectModal from '@components/modals/MixSelectModal';
import { useBasket } from '@hooks/useBasket';
import { SCROLL_INTO_VIEW_ELEMENT, BREAKPOINT } from '@constants';
import { useLocation } from 'react-router-dom';
import { ILocationStateProps, getConstructorMode } from '..';

export function ZephyrPage() {
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
      [ConstructoreMode.ZephyrSmall, ConstructoreMode.ZephyrMedium],
      editItem
        ? getConstructorMode(editItem.product, ConstructoreMode.ZephyrSmall)
        : ConstructoreMode.ZephyrSmall
    )
  );
  const [expanded, setExpanded] = useState<boolean>(
    !!editItem || !!productItem
  );
  const [selectedMix, setSelectedMix] = useState<IProduct>();
  const handleClose = useCallback(() => setSelectedMix(undefined), []);
  const { addToBasket } = useBasket();
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);

  const handleZephyrClick = (item: IProduct) => {
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

  const handleZephyrMixClick = (item: IProduct) => {
    setSelectedMix(item);
  };

  const handleZephyrMixConfirm = () => {
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

  const zephyrElements: JSX.Element[] = [];
  for (let i = 0; i < zephyr.length; i++) {
    if (i % 2 === 0) {
      zephyrElements.push(
        <FlexRow key={i}>
          <FlexColumn bordered>
            <ZephyrSingle product={zephyr[i]} onClick={handleZephyrClick} />
          </FlexColumn>
          <FlexColumn bordered isLastChild>
            <ZephyrSingle product={zephyr[i + 1]} onClick={handleZephyrClick} />
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
            style={{
              whiteSpace: 'nowrap',
              margin: isMobile ? '50px 10px 10px 10px' : '0 100px 0 0',
            }}
          >
            ДЕСЕРТЫ
          </Typography>
        </FlexColumn>
        <FlexColumn style={{ flexGrow: 2 }}>
          <ZephyrInfo>
            <Typography
              variant='body1'
              style={{
                lineHeight: isMobile ? '19px' : '24px',
                margin: isMobile ? '10px 10px 40px 10px' : '0 120px 20px 80px',
              }}
            >
              Мы разработали рецептуру с пониженным содержанием сахара и готовим
              наш зефир исключительно на основе натуральных фруктовых пюре без
              ароматизаторов и консервантов. У нас можно выбрать любые вкусы из
              меню и сформировать свой набор на 8 или 16 шт.{' '}
            </Typography>
            {!isMobile && (
              <Typography
                variant='body2'
                style={{ margin: '10px 70px 20px 80px' }}
              >
                У нас можно выбрать любые вкусы из меню и сформировать свой
                набор на 8 или 16 зефира.
              </Typography>
            )}
          </ZephyrInfo>
        </FlexColumn>
      </FlexRow>
      <FlexRow>
        <FlexColumn bordered>
          <DessertsMix
            size={'large'}
            imageHeight={isMobile ? 160 : undefined}
            product={zephyrMix[0]}
            onClick={handleZephyrMixClick}
            pictureStyle={{
              width: '280px',
              height: '320px',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          />
        </FlexColumn>
        <FlexColumn bordered>
          <DessertsMix
            size={'large'}
            imageHeight={isMobile ? 275 : 300}
            product={zephyrMix[1]}
            onClick={handleZephyrMixClick}
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
            ВКУСЫ ЗЕФИРА
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
              stickyLimit={920}
              editItem={editItem}
            />
          </FlexColumn>
        )}
      </FlexRow>

      {zephyrElements}
      {!!selectedMix && (
        <MixSelectModal
          mix={selectedMix}
          confirmAdd={handleZephyrMixConfirm}
          closeModal={handleClose}
          open={!!selectedMix}
          cancelModal={cancelModal}
        />
      )}
    </ZephyrWrapper>
  );
}
