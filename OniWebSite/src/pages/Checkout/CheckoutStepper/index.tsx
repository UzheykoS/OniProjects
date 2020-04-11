import React, { useState } from 'react';
import {
  Content,
  CheckoutHeaderWrapper,
  TabsStyled,
  TabStyled,
  CheckoutStepperContainer,
} from '../styled';
import { Typography, IconButton } from '@material-ui/core';
import { Delivery, DeliveryType } from './Delivery';
import { Contacts } from './Contacts';
import { Payment, PaymentType } from './Payment';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { IBasketItem, useBasket } from '@hooks/useBasket';
import { submitOrder } from '@src/api/oni-web';
import { useSnackbar } from '@hooks/useSnackbar';

enum CheckoutTabs {
  Delivery = 'Способ доставки',
  Contacts = 'Контактные данные',
  Payment = 'Способ оплаты',
}

export interface IRequiredContactData {
  name?: string;
  phone?: string;
}

export interface IContactData extends IRequiredContactData {
  comments?: string;
  date?: string | null;
  time?: string | null;
  address?: string;
}

export interface IOrder extends IContactData {
  delivery: DeliveryType;
  payment: PaymentType;
  itemsMessage?: string;
}

interface ICheckoutStepperProps {
  items: IBasketItem[];
  returnToBasket: () => void;
}

const initialState = {
  delivery: DeliveryType.SelfService,
  payment: PaymentType.Cash,
};

export function CheckoutStepper({ returnToBasket }: ICheckoutStepperProps) {
  const [activeTab, setActiveTab] = useState(CheckoutTabs.Delivery);
  const [form, setForm] = useState<IOrder>(initialState);
  const { items } = useBasket();
  const { showSnackbar } = useSnackbar();

  const handleDeliverySubmit = (delivery: DeliveryType) => {
    setForm({ ...form, delivery });
    setActiveTab(CheckoutTabs.Contacts);
  };

  const handleContactDataSubmit = (contactData: IContactData) => {
    setForm({ ...form, ...contactData });
    setActiveTab(CheckoutTabs.Payment);
  };

  const handlePaymentSubmit = async (payment: PaymentType) => {
    setForm(initialState);
    const itemsMessage = items.reduce((acc, item) => {
      acc += `${item.product.id} - ${item.quantity} \n`;
      return acc;
    }, '');

    try {
      await submitOrder({ ...form, payment, itemsMessage });
      returnToBasket();
      showSnackbar('Заказ сохранён!');
    } catch (e) {
      throw e;
    }
  };

  const handleTabChange = (_e: React.ChangeEvent<{}>, tab: CheckoutTabs) => {
    setActiveTab(tab);
  };

  return (
    <CheckoutStepperContainer>
      <CheckoutHeaderWrapper>
        <IconButton onClick={returnToBasket}>
          <ChevronLeftIcon style={{ margin: 16 }} />
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
        {activeTab === CheckoutTabs.Delivery && (
          <Delivery handleContinue={handleDeliverySubmit} />
        )}
        {activeTab === CheckoutTabs.Contacts && (
          <Contacts handleContinue={handleContactDataSubmit} />
        )}
        {activeTab === CheckoutTabs.Payment && (
          <Payment handleContinue={handlePaymentSubmit} />
        )}
      </Content>
    </CheckoutStepperContainer>
  );
}
