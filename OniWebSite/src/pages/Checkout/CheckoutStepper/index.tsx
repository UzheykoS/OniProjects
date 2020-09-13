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
import {
  Typography,
  IconButton,
  useMediaQuery,
  Stepper,
  Step,
  StepButton,
} from '@material-ui/core';
import { Delivery, DeliveryType } from './Delivery';
import { Contacts } from './Contacts';
import { Payment, PaymentType } from './Payment';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { IBasketItem, useBasket } from '@hooks/useBasket';
import { submitOrder } from '@src/api/oni-web';
import { useSnackbar, SnackbarType } from '@hooks/useSnackbar';
import { BREAKPOINT } from '@constants';
import { Flex } from '@styles/styled';

enum CheckoutTabs {
  Delivery = 'Способ доставки',
  Contacts = 'Контактные данные',
  Payment = 'Способ оплаты',
}

enum CheckoutSteps {
  Delivery = 0,
  Contacts = 1,
  Payment = 2,
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
  name: '',
  phone: '',
  comments: '',
  address: 'Самовывоз: бул. Вацлава Гавела, 9А',
  date: null,
  time: null,
};

export function CheckoutStepper({ returnToBasket }: ICheckoutStepperProps) {
  const {
    items,
    totalPrice,
    delivery,
    clearBasket,
    addDelivery,
    removeDelivery,
  } = useBasket();
  const [activeTab, setActiveTab] = useState(CheckoutTabs.Delivery);
  const [activeStep, setActiveStep] = useState(CheckoutSteps.Delivery);

  const [form, setForm] = useState<IOrder>({
    ...initialState,
    delivery: delivery ? DeliveryType.Delivery : DeliveryType.SelfService,
    address: delivery ? '' : 'Самовывоз: бул. Вацлава Гавела, 9А',
  });
  const { showSnackbar } = useSnackbar();
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);

  const handleDeliveryChange = (delivery: DeliveryType) => {
    if (delivery === DeliveryType.SelfService) {
      setForm({
        ...form,
        delivery,
        address: 'Самовывоз: бул. Вацлава Гавела, 9А',
      });
    } else {
      setForm({ ...form, delivery, address: '' });
    }
  };

  const handleDeliverySubmit = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    setActiveTab(CheckoutTabs.Contacts);
    setActiveStep(CheckoutSteps.Contacts);
  };

  const handleContactDataChange = (contactData: IContactData) => {
    setForm({ ...form, ...contactData });
  };

  const handleContactDataSubmit = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    setActiveTab(CheckoutTabs.Payment);
    setActiveStep(CheckoutSteps.Payment);
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
      console.log(e);
      showSnackbar(
        'Ошибка при сохранении заказа ☹️\nПопробуйте ещё раз',
        SnackbarType.Error
      );
    }
  };

  const handleTabChange = (_e: React.ChangeEvent<{}>, tab: CheckoutTabs) => {
    setActiveTab(tab);
  };

  const handleStepChange = (step: CheckoutSteps) => () => {
    setActiveStep(step);
  };

  function isStepComplete(step: CheckoutSteps) {
    return step < activeStep;
  }

  if (isMobile) {
    return (
      <CheckoutStepperContainer>
        <CheckoutHeaderWrapper>
          <BackArrowWrapper>
            <IconButton onClick={returnToBasket} size='small'>
              <ChevronLeftIcon style={{ margin: 0 }} />
            </IconButton>
          </BackArrowWrapper>
          <TextLink onClick={returnToBasket}>Назад</TextLink>
        </CheckoutHeaderWrapper>
        <Typography variant='h2'>Оформление заказа</Typography>
        <Flex alignBaseline>
          <HelperText>Сумма вашего заказа: </HelperText>
          <Typography variant='h2' style={{ fontSize: 16 }}>
            {totalPrice} грн.
          </Typography>
        </Flex>

        <Stepper
          activeStep={activeStep}
          orientation='horizontal'
          alternativeLabel
          style={{ padding: '24px 0' }}
        >
          <Step completed={isStepComplete(CheckoutSteps.Delivery)}>
            <StepButton onClick={handleStepChange(CheckoutSteps.Delivery)}>
              {CheckoutTabs.Delivery}
            </StepButton>
          </Step>
          <Step completed={isStepComplete(CheckoutSteps.Contacts)}>
            <StepButton onClick={handleStepChange(CheckoutSteps.Contacts)}>
              {CheckoutTabs.Contacts}
            </StepButton>
          </Step>
          <Step completed={isStepComplete(CheckoutSteps.Payment)}>
            <StepButton onClick={handleStepChange(CheckoutSteps.Payment)}>
              {CheckoutTabs.Payment}
            </StepButton>
          </Step>
        </Stepper>

        <Content>
          {activeStep === CheckoutSteps.Delivery && (
            <Delivery
              totalPrice={totalPrice}
              delivery={form.delivery}
              addDelivery={addDelivery}
              removeDelivery={removeDelivery}
              handleDeliveryChange={handleDeliveryChange}
              handleContinue={handleDeliverySubmit}
            />
          )}
          {activeStep === CheckoutSteps.Contacts && (
            <Contacts
              formData={form}
              setFormData={handleContactDataChange}
              delivery={form.delivery}
              totalPrice={totalPrice}
              handleContinue={handleContactDataSubmit}
              handleBackClick={() => setActiveStep(CheckoutSteps.Delivery)}
            />
          )}
          {activeStep === CheckoutSteps.Payment && (
            <Payment
              delivery={form.delivery}
              totalPrice={totalPrice}
              isValid={!!form.name && !!form.phone}
              handleContinue={handlePaymentSubmit}
              handleBackClick={() => setActiveStep(CheckoutSteps.Contacts)}
            />
          )}
        </Content>
      </CheckoutStepperContainer>
    );
  }

  return (
    <CheckoutStepperContainer>
      <CheckoutHeaderWrapper>
        <BackArrowWrapper>
          <IconButton onClick={returnToBasket} size='small'>
            <ChevronLeftIcon style={{ margin: 4 }} />
          </IconButton>
        </BackArrowWrapper>
        <Typography style={{ fontSize: 46 }} variant='h2'>
          Оформление заказа
        </Typography>
      </CheckoutHeaderWrapper>
      <TabsStyled
        value={activeTab}
        indicatorColor='primary'
        textColor='primary'
        onChange={handleTabChange}
        TabIndicatorProps={{
          style: { display: 'block' },
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
          <Delivery
            totalPrice={totalPrice}
            delivery={form.delivery}
            addDelivery={addDelivery}
            removeDelivery={removeDelivery}
            handleDeliveryChange={handleDeliveryChange}
            handleContinue={handleDeliverySubmit}
          />
        )}
        {activeTab === CheckoutTabs.Contacts && (
          <Contacts
            formData={form}
            setFormData={handleContactDataChange}
            delivery={form.delivery}
            totalPrice={totalPrice}
            handleContinue={handleContactDataSubmit}
          />
        )}
        {activeTab === CheckoutTabs.Payment && (
          <Payment
            delivery={form.delivery}
            totalPrice={totalPrice}
            isValid={!!form.name && !!form.phone}
            handleContinue={handlePaymentSubmit}
          />
        )}
      </Content>
    </CheckoutStepperContainer>
  );
}
