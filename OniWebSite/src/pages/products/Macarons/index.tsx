import React, { useReducer, useState, useCallback, useEffect } from 'react';
import { MacaronSingle } from '../../../components/products/MacaronSingle';
import { MacaronsInfo } from './styled';
import { Typography, useMediaQuery } from '@material-ui/core';
import { FlexRow, FlexColumn } from '@styles/styled';
import {
  constructorReducer,
  initialContstructorState,
  ConstructoreMode,
} from '@components/Constructor/Constructor';
import { ConstructorContainer } from '@components/Constructor';
import { DessertsMix } from '@components/DessertsMix';
import { macarons, macaronMix, IProduct, Macarons } from '@constants/products';
import { useBasket } from '@hooks/useBasket';
import MixSelectModal from '@components/modals/MixSelectModal';
import { BREAKPOINT, SCROLL_INTO_VIEW_ELEMENT } from '@constants';
import { useLocation } from 'react-router-dom';
import { ILocationStateProps, getConstructorMode } from '..';
import { DessertsWrapperBase } from '@common/styled';

export function MacaronsPage() {
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
        ConstructoreMode.MacaronSmall,
        ConstructoreMode.MacaronMedium,
        ConstructoreMode.MacaronLarge,
      ],
      editItem
        ? getConstructorMode(editItem.product, ConstructoreMode.MacaronSmall)
        : ConstructoreMode.MacaronSmall
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

  const handleMacaronClick = (item: IProduct) => {
    if (!expanded && !isMobile) {
      setExpanded(true);
    }
    dispatch({ type: 'add', item });
  };

  const handleMacaronsMixClick = (item: IProduct) => {
    if (
      item.id === Macarons.MacaronsMixSmall ||
      item.id === Macarons.MacaronsMixMedium
    ) {
      setSelectedMix({ ...item, imageUrl: item.imageUrl + '-rotated' });
    } else {
      setSelectedMix(item);
    }
  };

  const handleMacaronsMixConfirm = (quantity: number) => {
    if (!selectedMix) {
      return;
    }
    addToBasket({
      product: selectedMix,
      quantity,
    });
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

    if (mix.id === Macarons.MacaronsMixMedium) {
      dispatch({ type: 'setMode', mode: ConstructoreMode.MacaronMedium });
    } else if (mix.id === Macarons.MacaronsMixLarge) {
      dispatch({ type: 'setMode', mode: ConstructoreMode.MacaronLarge });
    } else if (mix.id === Macarons.MacaronsMixSmall) {
      dispatch({ type: 'setMode', mode: ConstructoreMode.MacaronSmall });
    }
    if (!isMobile) {
      setExpanded(true);
    }
    handleClose();
  }

  const [atBottom, setAtBottom] = useState(false);

  const handleScroll = () => {
    // check that constructor can overlay footer
    if (document.documentElement.scrollHeight - 350 - 850 <= window.scrollY) {
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

  const macaronElements: JSX.Element[] = [];
  for (let i = 0; i < macarons.length; i++) {
    if (i % 2 === 0) {
      macaronElements.push(
        <FlexRow key={i}>
          <FlexColumn bordered>
            <MacaronSingle product={macarons[i]} onClick={handleMacaronClick} />
          </FlexColumn>
          {i + 1 < macarons.length ? (
            <FlexColumn bordered isLastChild>
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
            Макарон
          </Typography>
        </FlexColumn>
        <FlexColumn style={{ flexGrow: 2 }}>
          <MacaronsInfo>
            <Typography
              variant='body1'
              style={{
                lineHeight: isMobile ? '19px' : '24px',
                margin: isMobile ? '10px 10px 20px 10px' : '0 120px 20px 0',
              }}
            >
              Любимый десерт французов. Маленькое пирожное, которое состоит из
              двух миндальных половинок, пропитанных начинкой. Яркий вкус,
              нежная текстура внутри и хрустящая корочка снаружи.
            </Typography>
          </MacaronsInfo>
        </FlexColumn>
      </FlexRow>
      <FlexRow>
        <Typography
          variant='h3'
          style={{ margin: '30px 0 15px 0', whiteSpace: 'nowrap' }}
        >
          НАБОРЫ МАКАРОН
        </Typography>
      </FlexRow>
      <FlexRow>
        <FlexColumn>
          <DessertsMix
            size={'small'}
            imageHeight={250}
            product={macaronMix[0]}
            onClick={handleMacaronsMixClick}
          />
        </FlexColumn>
        <FlexColumn>
          <DessertsMix
            size={'small'}
            imageHeight={250}
            product={macaronMix[1]}
            onClick={handleMacaronsMixClick}
          />
        </FlexColumn>
        <FlexColumn>
          <DessertsMix
            size={'small'}
            imageHeight={250}
            product={macaronMix[2]}
            onClick={handleMacaronsMixClick}
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
            stickyLimit={1420}
            editItem={editItem}
          />
        </FlexRow>
      )}

      <FlexRow>
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
              stickyLimit={720}
              editItem={editItem}
              limitBottom={expanded && atBottom}
            />
          </FlexColumn>
        )}
      </FlexRow>

      {macaronElements}

      {!!selectedMix && (
        <MixSelectModal
          mix={selectedMix}
          confirmAdd={handleMacaronsMixConfirm}
          closeModal={handleClose}
          open={!!selectedMix}
          cancelModal={cancelModal}
        />
      )}
    </DessertsWrapperBase>
  );
}
