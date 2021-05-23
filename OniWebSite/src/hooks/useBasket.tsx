import React, {
  useContext,
  createContext,
  useReducer,
  useCallback,
} from 'react';
import { IProduct, ICakeInfo } from '@constants/products';

export const BASKET_SESSION_KEY = '__basket_session_key';

export interface IBasketItem {
  product: IProduct | ICakeInfo;
  contents?: IProduct[];
  quantity: number;
}

interface IBasketState {
  items: IBasketItem[];
  totalPrice: number;
  delivery: boolean;
  addToBasket(item: IBasketItem): void;
  removeFromBasket(item: IBasketItem): void;
  clearBasket(): void;
  increaseQuantity(item: IBasketItem): void;
  decreaseQuantity(item: IBasketItem): void;
  addDelivery(): void;
  removeDelivery(): void;
  initialize(state: IBasketState): void;
}

const initialBasketState = {
  items: [],
  totalPrice: 0,
  delivery: false,
  addToBasket: () => {},
  removeFromBasket: () => {},
  clearBasket: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  addDelivery: () => {},
  removeDelivery: () => {},
  initialize: () => {},
};
const BasketContext = createContext<IBasketState>(initialBasketState);

type ActionType = {
  type:
    | 'add'
    | 'remove'
    | 'clear'
    | 'increase'
    | 'decrease'
    | 'addDelivery'
    | 'removeDelivery'
    | 'initialize';
  item?: IBasketItem;
  initialState?: IBasketState;
};

function basketReducer(state: IBasketState, action: ActionType) {
  switch (action.type) {
    case 'add':
      if (action.item) {
        const { items } = state;
        items.push(action.item);
        const newState = { ...state, items };
        localStorage.setItem(BASKET_SESSION_KEY, JSON.stringify(newState));
        return newState;
      }
      return state;
    case 'remove':
      if (action.item) {
        const { items } = state;
        const index = items.findIndex(i => i === action.item);
        if (index > -1) {
          items.splice(index, 1);
          const newState = { ...state, items };
          localStorage.setItem(BASKET_SESSION_KEY, JSON.stringify(newState));
          return newState;
        }
      }
      return state;
    case 'increase':
      if (action.item) {
        const { items } = state;
        const index = items.findIndex(i => i === action.item);
        if (index > -1) {
          items[index].quantity++;
        }
        const newState = { ...state, items };
        localStorage.setItem(BASKET_SESSION_KEY, JSON.stringify(newState));
        return newState;
      }
      return state;
    case 'decrease':
      if (action.item) {
        const { items } = state;
        const index = items.findIndex(i => i === action.item);
        if (index > -1) {
          if (items[index].quantity > 1) {
            items[index].quantity--;
          } else {
            items.splice(index, 1);
          }
        }
        const newState = { ...state, items };
        localStorage.setItem(BASKET_SESSION_KEY, JSON.stringify(newState));
        return newState;
      }
      return state;
    case 'clear': {
      const newState = { ...state, items: [], delivery: false };
      localStorage.removeItem(BASKET_SESSION_KEY);
      return newState;
    }
    case 'addDelivery': {
      const newState = { ...state, delivery: true };
      localStorage.setItem(BASKET_SESSION_KEY, JSON.stringify(newState));
      return newState;
    }
    case 'removeDelivery': {
      const newState = { ...state, delivery: false };
      localStorage.setItem(BASKET_SESSION_KEY, JSON.stringify(newState));
      return newState;
    }
    case 'initialize': {
      if (action.initialState) {
        return action.initialState;
      }
      return state;
    }
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

  const increaseQuantity = (item: IBasketItem) => {
    dispatch({ type: 'increase', item });
  };

  const decreaseQuantity = (item: IBasketItem) => {
    dispatch({ type: 'decrease', item });
  };

  const addDelivery = () => {
    dispatch({ type: 'addDelivery' });
  };

  const removeDelivery = () => {
    dispatch({ type: 'removeDelivery' });
  };

  const initialize = (initialState: IBasketState) => {
    dispatch({ type: 'initialize', initialState });
  };

  let totalPrice = state.items.reduce((accumulator, currentValue) => {
    accumulator += Number(currentValue.product.price) * currentValue.quantity;
    return accumulator;
  }, 0);

  // if (state.delivery) {
  //   totalPrice += DELIVERY_PRICE;
  // }

  return (
    <BasketContext.Provider
      value={{
        items: state.items,
        totalPrice,
        delivery: state.delivery,
        addToBasket,
        removeFromBasket,
        clearBasket,
        increaseQuantity,
        decreaseQuantity,
        addDelivery,
        removeDelivery,
        initialize,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

function useBasket(): IBasketState {
  const {
    addToBasket,
    removeFromBasket,
    clearBasket,
    increaseQuantity,
    decreaseQuantity,
    addDelivery,
    removeDelivery,
    initialize,
    items,
    totalPrice,
    delivery,
  } = useContext(BasketContext);

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
    [removeFromBasket]
  );

  const clearBasketHandler = useCallback(() => {
    clearBasket && clearBasket();
  }, [clearBasket]);

  const increaseQuantityHandler = useCallback(
    (item: IBasketItem) => {
      increaseQuantity && increaseQuantity(item);
    },
    [increaseQuantity]
  );

  const decreaseQuantityHandler = useCallback(
    (item: IBasketItem) => {
      decreaseQuantity && decreaseQuantity(item);
    },
    [decreaseQuantity]
  );

  const addDeliveryHandler = useCallback(() => {
    addDelivery && addDelivery();
  }, [addDelivery]);

  const removeDeliveryHandler = useCallback(() => {
    removeDelivery && removeDelivery();
  }, [removeDelivery]);

  const initializeHandler = useCallback(
    (state: IBasketState) => {
      initialize && initialize(state);
    },
    [initialize]
  );

  return {
    addToBasket: addToBasketHandler,
    clearBasket: clearBasketHandler,
    removeFromBasket: removeFromBasketHandler,
    increaseQuantity: increaseQuantityHandler,
    decreaseQuantity: decreaseQuantityHandler,
    addDelivery: addDeliveryHandler,
    removeDelivery: removeDeliveryHandler,
    initialize: initializeHandler,
    delivery,
    items,
    totalPrice,
  };
}

export { BasketContext, BasketProvider, useBasket };
