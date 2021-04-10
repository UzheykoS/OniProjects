import React, { useReducer, useState, useCallback, useEffect } from 'react';
import { ChouxInfo } from './styled';
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
import { chouxMix, choux, IProduct, Choux } from '@constants/products';
import MixSelectModal from '@components/modals/MixSelectModal';
import { useBasket } from '@hooks/useBasket';
import { SCROLL_INTO_VIEW_ELEMENT, BREAKPOINT } from '@constants';
import { useLocation } from 'react-router-dom';
import { ILocationStateProps, getConstructorMode } from '..';
import { DessertsWrapperBase } from '@common/styled';

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
      [ConstructoreMode.ChouxSmall, ConstructoreMode.ChouxMedium],
      editItem
        ? getConstructorMode(editItem.product, ConstructoreMode.ChouxSmall)
        : ConstructoreMode.ChouxSmall
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

  const [atBottom, setAtBottom] = useState(false);

  const handleScroll = () => {
    // check that constructor can overlay footer
    if (document.documentElement.scrollHeight - 950 <= window.scrollY) {
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

  const handleChouxMixConfirm = (quantity: number) => {
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

    if (mix.id === Choux.ChouxMixSmall) {
      dispatch({ type: 'setMode', mode: ConstructoreMode.ChouxSmall });
    } else if (mix.id === Choux.ChouxMixLarge) {
      dispatch({ type: 'setMode', mode: ConstructoreMode.ChouxMedium });
    }
    if (!isMobile) {
      setExpanded(true);
    }
    handleClose();
  }

  const chouxElements: JSX.Element[] = [];
  for (let i = 0; i < choux.length; i++) {
    if (i % 2 === 0) {
      chouxElements.push(
        <FlexRow key={i}>
          <FlexColumn bordered isLastChild={i === choux.length - 1}>
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
            Шу
          </Typography>
        </FlexColumn>
        <FlexColumn style={{ flexGrow: 2 }}>
          <ChouxInfo>
            <Typography
              variant='body1'
              style={{
                lineHeight: isMobile ? '19px' : '24px',
                margin: isMobile ? '10px 10px 20px 10px' : '0 120px 20px 0',
              }}
            >
              Основа пирожного шу – заварное тесто, покрытое тонким хрустящим
              слоем. Внутри – много начинки и лёгкого крема. Украшаем
              разноцветными кружочками из марципана.
            </Typography>
          </ChouxInfo>
        </FlexColumn>
      </FlexRow>
      <FlexRow>
        <Typography
          variant='h3'
          style={{ margin: '30px 0 15px 0', whiteSpace: 'nowrap' }}
        >
          НАБОРЫ ШУ
        </Typography>
      </FlexRow>
      <FlexRow>
        <FlexColumn>
          <DessertsMix
            size='small'
            imageHeight={130}
            pictureStyle={{
              alignItems: 'center',
              height: isMobile ? undefined : 270,
            }}
            product={chouxMix[0]}
            onClick={handleChouxMixClick}
          />
        </FlexColumn>
        <FlexColumn>
          <DessertsMix
            size='small'
            imageHeight={250}
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
            stickyLimit={915}
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
              stickyLimit={687}
              editItem={editItem}
              limitBottom={expanded && atBottom}
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
    </DessertsWrapperBase>
  );
}
