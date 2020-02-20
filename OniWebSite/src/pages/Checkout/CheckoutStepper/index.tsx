import React, { useState } from 'react';
import {
  Content,
  CheckoutHeaderWrapper,
  TabsStyled,
  TabStyled,
  CheckoutStepperContainer,
} from '../styled';
import { Typography, IconButton } from '@material-ui/core';
import { Delivery } from './Delivery';
import { Contacts } from './Contacts';
import { Payment } from './Payment';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { IBasketItem } from '@hooks/useBasket';

enum CheckoutTabs {
  Delivery = 'Способ доставки',
  Contacts = 'Контактные данные',
  Payment = 'Способ оплаты',
}

interface ICheckoutStepperProps {
  items: IBasketItem[];
  returnToBasket: () => void;
}

export function CheckoutStepper({ returnToBasket }: ICheckoutStepperProps) {
  const [activeTab, setActiveTab] = useState(CheckoutTabs.Delivery);
  const handleTabChange = (_e: React.ChangeEvent<{}>, tab: CheckoutTabs) => {
    setActiveTab(tab);
  };

  return (
    <CheckoutStepperContainer>
      <CheckoutHeaderWrapper>
        <IconButton onClick={returnToBasket}>
          <ChevronLeftIcon />
        </IconButton>
        <Typography variant='h2'>Оформление заказа</Typography>
      </CheckoutHeaderWrapper>

      <TabsStyled
        value={activeTab}
        indicatorColor='primary'
        textColor='primary'
        onChange={handleTabChange}
      >
        <TabStyled
          label={CheckoutTabs.Delivery}
          value={CheckoutTabs.Delivery}
        />
        <TabStyled
          label={CheckoutTabs.Contacts}
          value={CheckoutTabs.Contacts}
        />
        <TabStyled label={CheckoutTabs.Payment} value={CheckoutTabs.Payment} />
      </TabsStyled>
      <Content>
        {activeTab === CheckoutTabs.Delivery && <Delivery />}
        {activeTab === CheckoutTabs.Contacts && <Contacts />}
        {activeTab === CheckoutTabs.Payment && <Payment />}
      </Content>
    </CheckoutStepperContainer>
  );
}
