import React, { useReducer, useState, useCallback, useEffect } from 'react';
import { MacaronSingle } from '../../../components/products/MacaronSingle';
import { MacaronsWrapper, MacaronsInfo } from './styled';
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
import { macarons, macaronMix, IProduct } from '@constants/products';
import { useBasket } from '@hooks/useBasket';
import MixSelectModal from '@components/modals/MixSelectModal';
import { BREAKPOINT, SCROLL_INTO_VIEW_ELEMENT } from '@constants';
import { useLocation } from 'react-router-dom';
import { ILocationStateProps, getConstructorMode } from '..';

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
  const [expanded, setExpanded] = useState<boolean>(
    !!editItem || !!productItem
  );
  const [selectedMix, setSelectedMix] = useState<IProduct>();
  const handleClose = useCallback(() => setSelectedMix(undefined), []);
  const { addToBasket } = useBasket();
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);

  const handleMacaronClick = (item: IProduct) => {
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
    <MacaronsWrapper>
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
          <MacaronsInfo>
            <Typography
              variant='body1'
              style={{
                lineHeight: isMobile ? '19px' : '24px',
                margin: isMobile ? '10px 10px 40px 10px' : '0 120px 20px 80px',
              }}
            >
              Макарон – это маленькое пирожное, которое состоит из двух
              миндальных половинок, пропитанных начинкой. Яркий вкус, нежная
              текстура внутри и хрустящая корочка снаружи.{' '}
            </Typography>
            {!isMobile && (
              <Typography
                variant='body2'
                style={{ margin: '10px 70px 20px 80px' }}
              >
                У нас можно выбрать любые вкусы из меню и сформировать свой
                набор на 6, 12 или 24 макарон.
              </Typography>
            )}
          </MacaronsInfo>
        </FlexColumn>
      </FlexRow>
      <FlexRow>
        <FlexColumn bordered>
          <DessertsMix
            size={'small'}
            imageHeight={250}
            product={macaronMix[0]}
            onClick={handleMacaronsMixClick}
          />
        </FlexColumn>
        <FlexColumn bordered>
          <DessertsMix
            size={'small'}
            imageHeight={250}
            product={macaronMix[1]}
            onClick={handleMacaronsMixClick}
          />
        </FlexColumn>
        <FlexColumn bordered>
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
            stickyLimit={1365}
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
            ВКУСЫ МАКАРОН
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
              stickyLimit={740}
              editItem={editItem}
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
    </MacaronsWrapper>
  );
}
