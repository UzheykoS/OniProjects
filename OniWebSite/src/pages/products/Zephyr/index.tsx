import React, { useReducer, useState, useCallback, useEffect } from 'react';
import { ZephyrInfo } from './styled';
import { Typography, useMediaQuery } from '@material-ui/core';
import { FlexRow, FlexColumn } from '@styles/styled';
import {
  constructorReducer,
  initialContstructorState,
  ConstructoreMode,
} from '@components/Constructor/Constructor';
import { ConstructorContainer } from '@components/Constructor';
import { DessertsMix } from '@components/DessertsMix';
import { ZephyrSingle } from '@components/products/ZephyrSingle';
import { zephyrMix, zephyr, IProduct, Zephyr } from '@constants/products';
import MixSelectModal from '@components/modals/MixSelectModal';
import { useBasket } from '@hooks/useBasket';
import { SCROLL_INTO_VIEW_ELEMENT, BREAKPOINT } from '@constants';
import { useLocation } from 'react-router-dom';
import { ILocationStateProps, getConstructorMode } from '..';
import { DessertsWrapperBase } from '@common/styled';

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
      const el = document.getElementById(SCROLL_INTO_VIEW_ELEMENT);
      if (el) {
        const viewportOffset = el.getBoundingClientRect();
        window.scrollTo({
          top: viewportOffset.top + window.scrollY - (isMobile ? 200 : 120),
          left: 0,
          behavior: 'smooth',
        });
      }
    }
  }, [editItem]);

  const [state, dispatch] = useReducer(
    constructorReducer,
    initialContstructorState(
      [
        {
          type: ConstructoreMode.ZephyrSmall,
          count: 8,
        },
        {
          type: ConstructoreMode.ZephyrMedium,
          count: 16,
        },
      ],
      editItem
        ? getConstructorMode(editItem.product, {
            type: ConstructoreMode.ZephyrSmall,
            count: 8,
          })
        : {
            type: ConstructoreMode.ZephyrSmall,
            count: 8,
          }
    )
  );
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);
  const [expanded, setExpanded] = useState<boolean>(
    !!editItem || !!productItem || !isMobile
  );
  useEffect(() => {
    setExpanded(!!editItem || !!productItem || !isMobile);
  }, [isMobile]);

  const [selectedMix, setSelectedMix] = useState<IProduct>();
  const handleClose = useCallback(() => setSelectedMix(undefined), []);
  const { addToBasket } = useBasket();

  const handleZephyrClick = (item: IProduct) => {
    if (!expanded && !isMobile) {
      setExpanded(true);
    }
    dispatch({ type: 'add', item });
  };

  const handleZephyrMixClick = (item: IProduct) => {
    if (item.id === Zephyr.ZephyrMixSmall) {
      setSelectedMix({ ...item, imageUrl: item.imageUrl + '-rotated' });
    } else {
      setSelectedMix(item);
    }
  };

  const handleZephyrMixConfirm = (quantity: number) => {
    if (!selectedMix) {
      return;
    }
    addToBasket({ product: selectedMix, quantity });
    handleClose();
  };

  function cancelModal(mix: IProduct) {
    const el = document.getElementById(SCROLL_INTO_VIEW_ELEMENT);
    if (el) {
      const viewportOffset = el.getBoundingClientRect();
      window.scrollTo({
        top: viewportOffset.top + window.scrollY - (isMobile ? 200 : 120),
        left: 0,
        behavior: 'smooth',
      });
    }

    if (mix.id === Zephyr.ZephyrMixSmall) {
      dispatch({
        type: 'setMode',
        mode: {
          type: ConstructoreMode.ZephyrSmall,
          count: 8,
        },
      });
    } else if (mix.id === Zephyr.ZephyrMixLarge) {
      dispatch({
        type: 'setMode',
        mode: {
          type: ConstructoreMode.ZephyrMedium,
          count: 16,
        },
      });
    }
    if (!isMobile) {
      setExpanded(true);
    }
    handleClose();
  }

  const [atBottom, setAtBottom] = useState(false);

  const handleScroll = () => {
    // check that constructor can overlay footer
    if (document.documentElement.scrollHeight - 350 - 900 <= window.scrollY) {
      setAtBottom(true);
    } else {
      setAtBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
            Зефир
          </Typography>
        </FlexColumn>
        <FlexColumn style={{ flexGrow: 2 }}>
          <ZephyrInfo>
            <Typography
              variant='body1'
              style={{
                lineHeight: isMobile ? '19px' : '24px',
                margin: isMobile ? '10px 10px 20px 10px' : '0 120px 20px 0',
              }}
            >
              Как в детстве, только ещё вкуснее. Мы разработали рецептуру с
              пониженным содержанием сахара и готовим зефир на основе
              натуральных фруктовых пюре без красителей и ароматизаторов.
            </Typography>
          </ZephyrInfo>
        </FlexColumn>
      </FlexRow>
      <FlexRow>
        <Typography
          variant='h3'
          style={{ margin: '30px 0px 15px', whiteSpace: 'nowrap' }}
        >
          НАБОРЫ ЗЕФИРА
        </Typography>
      </FlexRow>
      <FlexRow>
        <FlexColumn>
          <DessertsMix
            size={'large'}
            product={
              isMobile
                ? {
                    ...zephyrMix[0],
                    imageUrl: zephyrMix[0].imageUrl + '-rotated',
                  }
                : zephyrMix[0]
            }
            onClick={handleZephyrMixClick}
            pictureStyle={{
              height: 'auto',
              width: isMobile ? '258px' : '162px',
              marginBottom: isMobile ? '10px' : '20px',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          />
        </FlexColumn>
        <FlexColumn>
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
            stickyLimit={955}
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
            СОБРАТЬ СВОЙ НАБОР
          </Typography>
        </FlexColumn>
        <FlexColumn />
        {!isMobile && (
          <FlexColumn
            style={{
              position: !atBottom ? 'relative' : undefined,
            }}
          >
            <ConstructorContainer
              state={state}
              dispatch={dispatch}
              expanded={expanded}
              setExpanded={setExpanded}
              stickyLimit={800}
              editItem={editItem}
              limitBottom={expanded && atBottom}
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
    </DessertsWrapperBase>
  );
}
