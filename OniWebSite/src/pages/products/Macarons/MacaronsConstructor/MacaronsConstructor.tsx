import React from 'react';
import {
  ConstructorWrapper,
  ModeSelectWrapper,
  SurpriseMe,
  CenteredRow,
  ConstructorGridWrapper,
  ConstructorGridItem,
  ImageWrapper,
} from './styled';
import { Chip, IconButton } from '@material-ui/core';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { Button } from '@common/Button';

enum MacaronsContstructoreMode {
  Small = 6,
  Medium = 12,
  Large = 24,
}

export interface IItem {
  name: string;
  imageUrl: string;
}

interface IConstructorState {
  mode: MacaronsContstructoreMode;
  items: IItem[];
}

type ActionType = {
  type: 'setMode' | 'add' | 'remove' | 'clear' | 'surpriseMe';
  mode?: MacaronsContstructoreMode;
  item?: IItem;
};

export const initialContstructorState: IConstructorState = {
  mode: MacaronsContstructoreMode.Small,
  items: [],
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
      throw Error();
    case 'add':
      if (action.item) {
        const { items } = state;
        items.push(action.item);
        return { ...state, items };
      }
      throw Error();
    case 'remove':
      if (action.item) {
        const { items } = state;
        const index = items.findIndex(i => i.name === action.item?.name);
        if (index) {
          items.splice(index);
        }
        return { ...state, items };
      }
      throw Error();
    case 'clear':
      return { ...state, items: [] };
    case 'surpriseMe':
      return state;
    default:
      throw Error();
  }
}

export interface IMacaronsConstructorProps {
  dispatch: React.Dispatch<ActionType>;
  state: IConstructorState;
}

export function MacaronsConstructor({
  state,
  dispatch,
}: IMacaronsConstructorProps) {
  const handleModeSelect = (m: MacaronsContstructoreMode) => {
    dispatch({ type: 'setMode', mode: m });
  };

  const handleClear = () => {
    dispatch({ type: 'clear' });
  };

  const handleSurpriseMeClick = () => {
    dispatch({ type: 'surpriseMe' });
  };

  const constructorGridContent = () => {
    let result: JSX.Element[] = [];
    for (let i = 0; i < state.mode; i++) {
      const item = state.items[i];
      result.push(
        <ConstructorGridItem
          key={i}
          size={
            state.mode === MacaronsContstructoreMode.Large ? 'small' : 'large'
          }
        >
          {item && <ImageWrapper src={item.imageUrl} />}
        </ConstructorGridItem>
      );
    }
    return result;
  };

  return (
    <ConstructorWrapper>
      <ModeSelectWrapper>
        <div>
          <Chip
            clickable
            color='secondary'
            label={MacaronsContstructoreMode.Small}
            style={{ width: '50px', margin: '0px 5px' }}
            variant={
              state.mode === MacaronsContstructoreMode.Small
                ? 'outlined'
                : 'default'
            }
            onClick={() => handleModeSelect(MacaronsContstructoreMode.Small)}
          />
          <Chip
            clickable
            color='secondary'
            label={MacaronsContstructoreMode.Medium}
            style={{ width: '50px', margin: '0px 5px' }}
            variant={
              state.mode === MacaronsContstructoreMode.Medium
                ? 'outlined'
                : 'default'
            }
            onClick={() => handleModeSelect(MacaronsContstructoreMode.Medium)}
          />
          <Chip
            clickable
            color='secondary'
            label={MacaronsContstructoreMode.Large}
            style={{ width: '50px', margin: '0px 5px' }}
            variant={
              state.mode === MacaronsContstructoreMode.Large
                ? 'outlined'
                : 'default'
            }
            onClick={() => handleModeSelect(MacaronsContstructoreMode.Large)}
          />
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
        <Button rounded>Добавить</Button>
      </CenteredRow>
    </ConstructorWrapper>
  );
}
