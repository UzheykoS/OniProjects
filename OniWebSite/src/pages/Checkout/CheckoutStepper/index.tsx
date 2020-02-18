import React, { useState } from 'react';
import { CheckoutContainer, Content, CheckoutHeaderWrapper } from '../styled';
import { Tabs, Tab, Typography, IconButton } from '@material-ui/core';
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

export function CheckoutStepper({
  items,
  returnToBasket,
}: ICheckoutStepperProps) {
  const [activeTab, setActiveTab] = useState(CheckoutTabs.Delivery);
  const handleTabChange = (_e: React.ChangeEvent<{}>, tab: CheckoutTabs) => {
    setActiveTab(tab);
  };

  return (
    <CheckoutContainer>
      <CheckoutHeaderWrapper>
        <IconButton onClick={returnToBasket}>
          <ChevronLeftIcon />
        </IconButton>
        <Typography variant='h2'>Оформление заказа</Typography>
      </CheckoutHeaderWrapper>

      <Tabs
        value={activeTab}
        indicatorColor='primary'
        textColor='primary'
        onChange={handleTabChange}
      >
        <Tab label={CheckoutTabs.Delivery} value={CheckoutTabs.Delivery} />
        <Tab label={CheckoutTabs.Contacts} value={CheckoutTabs.Contacts} />
        <Tab label={CheckoutTabs.Payment} value={CheckoutTabs.Payment} />
      </Tabs>
      <Content>
        {activeTab === CheckoutTabs.Delivery && (
          <>
            {items.map((item, index) => {
              return <span key={index}>{item.name}</span>;
            })}
            <Delivery />
          </>
        )}
        {activeTab === CheckoutTabs.Contacts && <Contacts />}
        {activeTab === CheckoutTabs.Payment && <Payment />}
      </Content>
    </CheckoutContainer>
  );
}
