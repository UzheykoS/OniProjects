import React, {
  useContext,
  createContext,
  useReducer,
  useCallback,
} from 'react';
import { IProduct } from '@constants/products';

export interface IBasketItem extends IProduct {
  quantity: number;
}

interface IBasketState {
  items: IBasketItem[];
  addToBasket(item: IBasketItem): void;
  removeFromBasket(item: IBasketItem): void;
  clearBasket(): void;
}

const initialBasketState = {
  items: [],
  addToBasket: () => {},
  removeFromBasket: () => {},
  clearBasket: () => {},
};
const BasketContext = createContext<IBasketState>(initialBasketState);

type ActionType = {
  type: 'add' | 'remove' | 'clear';
  item?: IBasketItem;
};

function basketReducer(state: IBasketState, action: ActionType) {
  switch (action.type) {
    case 'add':
      if (action.item) {
        const { items } = state;
        items.push(action.item);
        return { ...state, items };
      }
      return state;
    case 'clear':
      return { ...state, items: [] };
    default:
      throw new Error('Unknown action');
  }
}

const BasketProvider = ({ children }: { children?: React.ReactNode }) => {
  const [state, dispatch] = useReducer(basketReducer, initialBasketState);

  const addToBasket = (item: IBasketItem) => {
    dispatch({ type: 'add', item });
  };

  const removeFromBasket = (item: IBasketItem) => {
    dispatch({ type: 'remove', item });
  };

  const clearBasket = () => {
    dispatch({ type: 'clear' });
  };

  return (
    <BasketContext.Provider
      value={{ items: state.items, addToBasket, removeFromBasket, clearBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};

function useBasket(): IBasketState {
  const { addToBasket, removeFromBasket, clearBasket, items } = useContext(
    BasketContext
  );

  const addToBasketHandler = useCallback(
    (item: IBasketItem) => {
      addToBasket && addToBasket(item);
    },
    [addToBasket]
  );

  const removeFromBasketHandler = useCallback(
    (item: IBasketItem) => {
      removeFromBasket && removeFromBasket(item);
    },
    [addToBasket]
  );

  const clearBasketHandler = useCallback(() => {
    clearBasket && clearBasket();
  }, [clearBasket]);

  return {
    addToBasket: addToBasketHandler,
    clearBasket: clearBasketHandler,
    removeFromBasket: removeFromBasketHandler,
    items,
  };
}

export { BasketContext, BasketProvider, useBasket };
