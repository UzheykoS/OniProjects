import React, { useCallback, useState, useEffect } from 'react';
import {
  ConstructorWrapper,
  ModeSelectWrapper,
  SurpriseMe,
  CenteredRow,
  ConstructorGridWrapper,
  ChipStyled,
} from './styled';
import {
  IconButton,
  Typography,
  Button as MUIButton,
  useMediaQuery,
} from '@material-ui/core';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { Button } from '@common/Button';
import { ConstructorGridItem } from './ConstructorGridItem';
import { useBasket, IBasketItem } from '@hooks/useBasket';
import { IProduct, macaronMix, chouxMix, zephyrMix } from '@constants/products';
import ConstructorClearModal from './ConstructorClearModal';
import colors from '@constants/colors';
import { getRandomDessert } from '@utils/Helper';
import { Flex } from '@styles/styled';
import { useSnackbar, SnackbarType } from '@hooks/useSnackbar';
import { BREAKPOINT } from '@constants';

export enum ConstructoreMode {
  MacaronSmall = 6,
  MacaronMedium = 12,
  MacaronLarge = 24,
  ChouxSmall = 2,
  ChouxMedium = 4,
  ZephyrSmall = 8,
  ZephyrMedium = 16,
}

interface IConstructorState {
  availableModes: ConstructoreMode[];
  mode: ConstructoreMode;
  items: IProduct[];
  randomItems: IProduct[];
}

type ActionType = {
  type: 'setMode' | 'add' | 'remove' | 'clear' | 'surpriseMe';
  mode?: ConstructoreMode;
  item?: IProduct;
  index?: number;
};

export class ConstructorError extends Error {
  constructor(m: string) {
    super(m);
    Object.setPrototypeOf(this, ConstructorError.prototype);
  }
}

export const initialContstructorState = (
  availableModes: ConstructoreMode[],
  mode: ConstructoreMode
): IConstructorState => {
  return {
    availableModes,
    mode,
    items: [],
    randomItems: [],
  };
};

export function constructorReducer(
  state: IConstructorState,
  action: ActionType
) {
  switch (action.type) {
    case 'setMode':
      if (action.mode) {
        return { ...state, mode: action.mode };
      }
      throw new ConstructorError('Attempt to set mode to ' + action.mode);
    case 'add':
      if (!action.item) {
        throw new ConstructorError('Attempt to add empty item');
      }
      let newState = { ...state };
      if (state.items.length + state.randomItems.length === state.mode) {
        const modeIndex = state.availableModes.indexOf(state.mode);
        if (modeIndex === state.availableModes.length - 1) {
          return newState;
          // throw new ConstructorError('List is already full');
        } else {
          newState.mode = state.availableModes[modeIndex + 1];
        }
      }
      newState.items.push(action.item);
      return newState;
    case 'remove':
      if (action.index !== undefined && action.index > -1) {
        const { items, randomItems } = state;
        if (action.index < items.length) {
          items.splice(action.index, 1);
        } else if (randomItems.length) {
          randomItems.splice(action.index - items.length, 1);
        }
        return { ...state, items, randomItems };
      }
      throw new ConstructorError(
        'Attempt to remove element with index: ' + action.index
      );
    case 'clear':
      return { ...state, items: [], randomItems: [] };
    case 'surpriseMe':
      const { items, mode } = state;
      const randomItems = [];
      for (let i = items.length; i < mode; i++) {
        randomItems.push(getRandomDessert(mode));
      }
      return { ...state, randomItems };
    default:
      throw new ConstructorError('Unknown action');
  }
}

const surpriseMeTitles = [
  'Удивите меня',
  'Как вам такой набор?',
  'Поменяли. Надо брать!',
  'Хм… А так?',
  'Вам не угодишь…',
  'И так не подходит?',
  'Признайтесь, жмёте по приколу 😉',
  'Может, сами выберете вкусы?',
  'Сложно, понимаем…',
];

export interface IConstructorProps {
  dispatch: React.Dispatch<ActionType>;
  state: IConstructorState;
  editItem?: IBasketItem;
  closeConstructor?: () => void;
}

export function Constructor({
  state,
  dispatch,
  editItem,
  closeConstructor,
}: IConstructorProps) {
  const { addToBasket, removeFromBasket } = useBasket();
  const [showClear, setShowClear] = useState(false);
  const [showSurpriseMe, setShowSurpriseMe] = useState(false);
  const [surpriseMeTitleIndex, setSurpriseMeTitleIndex] = useState(0);
  const { showSnackbar } = useSnackbar();
  const [activeItem, setActiveItem] = useState<number>();
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);

  const handleClearModalOpen = useCallback(() => setShowClear(true), []);
  const handleClearModalClose = useCallback(() => setShowClear(false), []);

  const [errorMessage, setErrorMessage] = useState('');

  const handleConstructorSubmit = () => {
    if (!isValid()) {
      return;
    }

    if (editItem) {
      removeFromBasket(editItem);
      showSnackbar('Заказ обновлён!', SnackbarType.Info);
    }

    const allItems = [...state.items, ...state.randomItems];
    const contents =
      state.mode < allItems.length ? allItems.slice(0, state.mode) : allItems;

    switch (state.mode) {
      case ConstructoreMode.MacaronSmall:
        addToBasket({
          product: {
            ...macaronMix[0],
            imageUrl: macaronMix[0].imageUrl + '-rotated',
          },
          quantity: 1,
          contents,
        });
        break;
      case ConstructoreMode.MacaronMedium:
        addToBasket({
          product: {
            ...macaronMix[1],
            imageUrl: macaronMix[1].imageUrl + '-rotated',
          },
          quantity: 1,
          contents,
        });
        break;
      case ConstructoreMode.MacaronLarge:
        addToBasket({
          product: macaronMix[2],
          quantity: 1,
          contents,
        });
        break;
      case ConstructoreMode.ChouxSmall:
        addToBasket({
          product: chouxMix[0],
          quantity: 1,
          contents,
        });
        break;
      case ConstructoreMode.ChouxMedium:
        addToBasket({
          product: chouxMix[1],
          quantity: 1,
          contents,
        });
        break;
      case ConstructoreMode.ZephyrSmall:
        addToBasket({
          product: zephyrMix[0],
          quantity: 1,
          contents,
        });
        break;
      case ConstructoreMode.ZephyrMedium:
        addToBasket({
          product: zephyrMix[1],
          quantity: 1,
          contents,
        });
        break;
      default:
        state.items.forEach(item => {
          addToBasket({ product: item, quantity: 1 });
        });
        break;
    }
    closeConstructor && closeConstructor();
  };

  const isValid = () => {
    const isNotFull =
      state.items.length + state.randomItems.length < state.mode;
    if (isNotFull) {
      setErrorMessage('Соберите полный набор');
    } else {
      setErrorMessage('');
    }
    return !isNotFull;
  };

  useEffect(() => {
    setErrorMessage('');
  }, [state.items.length]);

  const handleModeSelect = (m: ConstructoreMode) => {
    dispatch({ type: 'setMode', mode: m });
  };

  const handleClear = () => {
    dispatch({ type: 'clear' });
    handleClearModalClose();
  };

  const handleClearIconClick = () => {
    if (state.items.length || state.randomItems.length) {
      handleClearModalOpen();
    }
  };

  const handleSurpriseMeClick = () => {
    if (state.items.length === state.mode) {
      setShowSurpriseMe(true);
    } else {
      surpriseMe();
    }
  };

  const surpriseMe = (clear?: boolean) => {
    if (clear) {
      dispatch({ type: 'clear' });
    }
    setSurpriseMeTitleIndex(
      surpriseMeTitleIndex < surpriseMeTitles.length - 1
        ? surpriseMeTitleIndex + 1
        : 1
    );
    dispatch({ type: 'surpriseMe' });
    if (showSurpriseMe) {
      setShowSurpriseMe(false);
    }
  };

  const handleRemoveClick = (index?: number) => {
    dispatch({ type: 'remove', index });
  };

  const handleMobileItemClick = (index?: number) => {
    if (!index || index === activeItem) {
      setActiveItem(undefined);
    } else {
      setActiveItem(index);
    }
  };

  const constructorGridContent = () => {
    let result: JSX.Element[] = [];
    const itemsCollection = [...state.items, ...state.randomItems];
    for (let i = 0; i < state.mode; i++) {
      const item = itemsCollection[i];
      result.push(
        <ConstructorGridItem
          key={i}
          mode={state.mode}
          item={item}
          index={i}
          isActive={i === activeItem}
          onClick={isMobile ? handleMobileItemClick : handleRemoveClick}
          removeItem={handleRemoveClick}
        />
      );
    }

    return result;
  };

  return (
    <>
      <ConstructorWrapper
        size={
          state.mode === ConstructoreMode.MacaronLarge
            ? 'small'
            : state.mode === ConstructoreMode.ChouxSmall
            ? 'large'
            : 'medium'
        }
      >
        <ModeSelectWrapper>
          <div>
            {state.availableModes.map(mode => (
              <ChipStyled
                key={mode}
                clickable
                color='secondary'
                label={mode}
                style={{ width: '50px', margin: '0px 5px' }}
                variant={state.mode === mode ? 'outlined' : 'default'}
                onClick={() => handleModeSelect(mode)}
              />
            ))}
          </div>
          <IconButton onClick={handleClearIconClick}>
            <DeleteOutlinedIcon />
          </IconButton>
        </ModeSelectWrapper>
        <Flex
          direction='column'
          style={{ display: showClear ? 'flex' : 'none' }}
        >
          <Flex>
            <Typography
              variant='body2'
              style={{ margin: '0.5rem', textAlign: 'end' }}
            >
              Вы точно хотите удалить все вкусы, которые выбрали?
            </Typography>
          </Flex>
          <Flex justifyCenter style={{ marginBottom: 10 }}>
            <MUIButton
              variant='contained'
              style={{ width: 100, height: 40, borderRadius: '50px' }}
              onClick={handleClearModalClose}
            >
              Нет
            </MUIButton>
            <MUIButton
              variant='contained'
              color='primary'
              style={{
                width: 100,
                height: 40,
                borderRadius: '50px',
                marginLeft: 10,
                backgroundColor: colors.primary.white,
                color: colors.primary.black,
                border: `1px solid ${colors.primary.gold}`,
              }}
              onClick={handleClear}
            >
              Да
            </MUIButton>
          </Flex>
        </Flex>
        <ConstructorGridWrapper>
          {constructorGridContent()}
        </ConstructorGridWrapper>
        <CenteredRow>
          <Flex direction='column' style={{ width: '100%' }}>
            <SurpriseMe
              variant='body2'
              onClick={handleSurpriseMeClick}
              style={{ display: showSurpriseMe ? 'none' : 'flex' }}
            >
              {surpriseMeTitles[surpriseMeTitleIndex]}
            </SurpriseMe>
            <Flex
              direction='column'
              style={{ display: showSurpriseMe ? 'flex' : 'none' }}
            >
              <Flex>
                <Typography
                  variant='body2'
                  style={{ margin: '0.5rem', textAlign: 'end' }}
                >
                  Мы удалим выбранные вкусы и соберём набор на свой вкус.
                  Согласны?
                </Typography>
              </Flex>
              <Flex justifyCenter style={{ marginBottom: 10 }}>
                <MUIButton
                  variant='contained'
                  style={{ width: 100, height: 40, borderRadius: '50px' }}
                  onClick={() => setShowSurpriseMe(false)}
                >
                  Нет
                </MUIButton>
                <MUIButton
                  variant='contained'
                  color='primary'
                  style={{
                    width: 100,
                    height: 40,
                    borderRadius: '50px',
                    marginLeft: 10,
                    backgroundColor: colors.primary.white,
                    color: colors.primary.black,
                    border: `1px solid ${colors.primary.gold}`,
                  }}
                  onClick={() => surpriseMe(true)}
                >
                  Да
                </MUIButton>
              </Flex>
            </Flex>
          </Flex>
        </CenteredRow>
        <CenteredRow>
          <Button rounded onClick={handleConstructorSubmit}>
            Добавить
          </Button>
        </CenteredRow>
        {!!errorMessage && (
          <CenteredRow>
            <Typography
              variant='body2'
              style={{ margin: '0.5rem', color: colors.error[0] }}
            >
              {errorMessage}
            </Typography>
          </CenteredRow>
        )}
      </ConstructorWrapper>
      {!isMobile && (
        <ConstructorClearModal
          confirmClear={handleClear}
          closeModal={handleClearModalClose}
          open={showClear}
        />
      )}
    </>
  );
}
