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
const keys = require('../../../../config/keys');

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

  const handleCheckoutSuccess = () => {
    sendMsg();
  };

  function sendMsg() {
    var url =
      'https://api.telegram.org/bot' + keys.telegramBotToken + '/sendMessage';
    var body = JSON.stringify({
      chat_id: keys.telegramChatId,
      parse_mode: 'Markdown',
      text:
        '*New order*\n' +
        // data.get('title') +
        '\n\n*Имя:* ' +
        // data.get('name') +
        '\n*Телефон:* ' +
        // data.get('phone') +
        '\n*Откуда:* [' +
        window.location.href +
        '](' +
        window.location.href +
        ')',
    });
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(body);
  }

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
        {activeTab === CheckoutTabs.Delivery && (
          <Delivery
            handleContinue={() => setActiveTab(CheckoutTabs.Contacts)}
          />
        )}
        {activeTab === CheckoutTabs.Contacts && (
          <Contacts handleContinue={() => setActiveTab(CheckoutTabs.Payment)} />
        )}
        {activeTab === CheckoutTabs.Payment && (
          <Payment handleContinue={handleCheckoutSuccess} />
        )}
      </Content>
    </CheckoutStepperContainer>
  );
}
