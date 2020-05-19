import React, { useState } from 'react';
import {
  Content,
  CheckoutHeaderWrapper,
  TabsStyled,
  TabStyled,
  CheckoutStepperContainer,
  TextLink,
  HelperText,
  BackArrowWrapper,
} from '../styled';
import { Typography, IconButton, useMediaQuery } from '@material-ui/core';
import { Delivery, DeliveryType } from './Delivery';
import { Contacts } from './Contacts';
import { Payment, PaymentType } from './Payment';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { IBasketItem, useBasket } from '@hooks/useBasket';
import { submitOrder } from '@src/api/oni-web';
import { useSnackbar } from '@hooks/useSnackbar';
import { BREAKPOINT } from '@constants';
import { Flex } from '@styles/styled';

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
  const { items, clearBasket } = useBasket();
  const { showSnackbar } = useSnackbar();
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);

  const handleDeliverySubmit = (delivery: DeliveryType) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    setForm({ ...form, delivery });
    setActiveTab(CheckoutTabs.Contacts);
  };

  const handleContactDataSubmit = (contactData: IContactData) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
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
      clearBasket();
      returnToBasket();
      showSnackbar('Заказ сохранён!');
    } catch (e) {
      throw e;
    }
  };

  const handleTabChange = (_e: React.ChangeEvent<{}>, tab: CheckoutTabs) => {
    setActiveTab(tab);
  };

  const totalPrice = items.reduce((accumulator, currentValue) => {
    accumulator += Number(currentValue.product.price) * currentValue.quantity;
    return accumulator;
  }, 0);

  return (
    <CheckoutStepperContainer>
      <CheckoutHeaderWrapper>
        <BackArrowWrapper>
          <IconButton onClick={returnToBasket} size='small'>
            <ChevronLeftIcon style={{ margin: isMobile ? 0 : 4 }} />
          </IconButton>
        </BackArrowWrapper>
        {isMobile ? (
          <TextLink onClick={returnToBasket}>Назад</TextLink>
        ) : (
          <Typography style={{ fontSize: 46 }} variant='h2'>
            Оформление заказа
          </Typography>
        )}
      </CheckoutHeaderWrapper>
      {isMobile && <Typography variant='h2'>Оформление заказа</Typography>}
      {isMobile && (
        <Flex alignBaseline>
          <HelperText>Сумма вашего заказа: </HelperText>
          <Typography variant='h2' style={{ fontSize: 16 }}>
            {totalPrice} грн.
          </Typography>
        </Flex>
      )}

      <TabsStyled
        value={activeTab}
        indicatorColor='primary'
        textColor='primary'
        onChange={handleTabChange}
        TabIndicatorProps={{
          style: { display: isMobile ? 'none' : 'block' },
        }}
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
