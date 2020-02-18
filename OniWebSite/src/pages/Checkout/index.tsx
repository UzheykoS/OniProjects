import React, { useState } from 'react';
import { CheckoutContainer } from './styled';
import { useBasket } from '@hooks/useBasket';
import { CheckoutStepper } from './CheckoutStepper';
import { Basket } from './Basket';

export function Checkout() {
  const { items } = useBasket();
  const [isCheckout, setIsCheckout] = useState(false);

  return (
    <CheckoutContainer>
      {isCheckout ? (
        <CheckoutStepper
          items={items}
          returnToBasket={() => setIsCheckout(false)}
        />
      ) : (
        <Basket items={items} confirmCheckout={() => setIsCheckout(true)} />
      )}
    </CheckoutContainer>
  );
}
