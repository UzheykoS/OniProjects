import React, { useState } from 'react';
import { CheckoutContainer } from './styled';
import { useBasket } from '@hooks/useBasket';
import { CheckoutStepper } from './CheckoutStepper';
import { Basket } from './Basket';

export function Checkout() {
  const {
    items,
    totalPrice,
    removeFromBasket,
    increaseQuantity,
    decreaseQuantity,
    clearBasket,
  } = useBasket();
  const [isCheckout, setIsCheckout] = useState(false);

  return (
    <CheckoutContainer>
      <CheckoutStepper
        isCheckout={isCheckout}
        returnToBasket={() => setIsCheckout(false)}
      />
      {!isCheckout && (
        <Basket
          items={items}
          totalPrice={totalPrice}
          confirmCheckout={() => setIsCheckout(true)}
          removeFromBasket={removeFromBasket}
          handleIncreaseQuantity={increaseQuantity}
          handleDecreaseQuantity={decreaseQuantity}
          clearBasket={clearBasket}
        />
      )}
    </CheckoutContainer>
  );
}
