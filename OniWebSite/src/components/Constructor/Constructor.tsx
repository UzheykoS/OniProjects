import React from 'react';
import {
  ConstructorWrapper,
  ModeSelectWrapper,
  SurpriseMe,
  CenteredRow,
  ConstructorGridWrapper,
} from './styled';
import { Chip, IconButton } from '@material-ui/core';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { Button } from '@common/Button';
import { ConstructorGridItem } from './ConstructorGridItem';
import { useBasket } from '@hooks/useBasket';
import { IProduct } from '@constants/products';

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
      if (action.item && state.items.length === state.mode) {
        throw new ConstructorError('List is already full');
      }
      if (action.item) {
        const { items } = state;
        items.push(action.item);
        return { ...state, items };
      }
      throw new ConstructorError('Attempt to add item: ' + action.item);
    case 'remove':
      if (action.index !== undefined && action.index > -1) {
        const { items } = state;
        items.splice(action.index, 1);
        return { ...state, items };
      }
      throw new ConstructorError(
        'Attempt to remove element with index: ' + action.index
      );
    case 'clear':
      return { ...state, items: [] };
    case 'surpriseMe':
      return state;
    default:
      throw new ConstructorError('Unknown action');
  }
}

export interface IConstructorProps {
  dispatch: React.Dispatch<ActionType>;
  state: IConstructorState;
}

export function Constructor({ state, dispatch }: IConstructorProps) {
  const { addToBasket } = useBasket();

  const handleConstructorSubmit = () => {
    state.items.forEach(item => {
      addToBasket({ ...item, quantity: 1 });
    });
  };

  const handleModeSelect = (m: ConstructoreMode) => {
    dispatch({ type: 'setMode', mode: m });
  };

  const handleClear = () => {
    dispatch({ type: 'clear' });
  };

  const handleSurpriseMeClick = () => {
    dispatch({ type: 'surpriseMe' });
  };

  const handleRemoveClick = (index: number) => {
    dispatch({ type: 'remove', index });
  };

  const constructorGridContent = () => {
    let result: JSX.Element[] = [];
    for (let i = 0; i < state.mode; i++) {
      const item = state.items[i];
      result.push(
        <ConstructorGridItem
          key={i}
          mode={state.mode}
          item={item}
          index={i}
          onClick={handleRemoveClick}
        />
      );
    }
    return result;
  };

  return (
    <ConstructorWrapper>
      <ModeSelectWrapper>
        <div>
          {state.availableModes.map(mode => (
            <Chip
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
        <IconButton onClick={handleClear}>
          <DeleteOutlinedIcon />
        </IconButton>
      </ModeSelectWrapper>
      <ConstructorGridWrapper>
        {constructorGridContent()}
      </ConstructorGridWrapper>
      <CenteredRow>
        <SurpriseMe variant='body2' onClick={handleSurpriseMeClick}>
          Удивите меня
        </SurpriseMe>
      </CenteredRow>
      <CenteredRow>
        <Button rounded onClick={handleConstructorSubmit}>
          Добавить
        </Button>
      </CenteredRow>
    </ConstructorWrapper>
  );
}
