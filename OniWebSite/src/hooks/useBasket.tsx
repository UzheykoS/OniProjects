import React, {
  useContext,
  createContext,
  useReducer,
  useCallback,
} from 'react';
import { IProduct, ICakeInfo, DELIVERY_PRICE } from '@constants/products';
import { useMediaQuery } from '@material-ui/core';
import { BREAKPOINT } from '@constants';

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
    | 'removeDelivery';
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
    case 'remove':
      if (action.item) {
        const { items } = state;
        const index = items.findIndex(i => i === action.item);
        if (index > -1) {
          items.splice(index, 1);
          return { ...state, items };
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
        return { ...state, items };
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
        return { ...state, items };
      }
      return state;
    case 'clear':
      return { ...state, items: [] };
    case 'addDelivery':
      return { ...state, delivery: true };
    case 'removeDelivery':
      return { ...state, delivery: false };
    default:
      throw new Error('Unknown action');
  }
}

const BasketProvider = ({ children }: { children?: React.ReactNode }) => {
  const [state, dispatch] = useReducer(basketReducer, initialBasketState);
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);

  const addToBasket = (item: IBasketItem) => {
    if (!isMobile) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
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

  let totalPrice = state.items.reduce((accumulator, currentValue) => {
    accumulator += Number(currentValue.product.price) * currentValue.quantity;
    return accumulator;
  }, 0);

  if (state.delivery) {
    totalPrice += DELIVERY_PRICE;
  }

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
    [addToBasket]
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
  }, [addToBasket]);

  const removeDeliveryHandler = useCallback(() => {
    removeDelivery && removeDelivery();
  }, [addToBasket]);

  return {
    addToBasket: addToBasketHandler,
    clearBasket: clearBasketHandler,
    removeFromBasket: removeFromBasketHandler,
    increaseQuantity: increaseQuantityHandler,
    decreaseQuantity: decreaseQuantityHandler,
    addDelivery: addDeliveryHandler,
    removeDelivery: removeDeliveryHandler,
    delivery,
    items,
    totalPrice,
  };
}

export { BasketContext, BasketProvider, useBasket };
