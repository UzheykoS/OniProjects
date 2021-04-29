import React, { useState } from 'react';
import {
  Content,
  CheckoutHeaderWrapper,
  CheckoutStepperContainer,
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
import { useBasket } from '@hooks/useBasket';
import { submitOrder } from '@src/api/oni-web';
import { useSnackbar, SnackbarType } from '@hooks/useSnackbar';
import { BREAKPOINT } from '@constants';
import { Flex } from '@styles/styled';
import { Success } from './Success';
import { formatDate, formatMessage } from '@utils/Helper';
import { TextLink } from '@common/styled';

enum CheckoutTabs {
  Delivery = 'Способ доставки',
  Contacts = 'Контактные данные',
  Payment = 'Способ оплаты',
  Success = 'Заказ принят!',
}

enum CheckoutSteps {
  Delivery = 0,
  Contacts = 1,
  Payment = 2,
  Success = 3,
}

export interface IRequiredContactData {
  name?: string;
  phone?: string;
  address?: string;
  date?: string | null;
  surname?: string;
  city?: string;
}

export interface IContactData extends IRequiredContactData {
  comments?: string;
  time?: string | null;
}

export interface IOrder extends IContactData {
  delivery: DeliveryType;
  payment: PaymentType;
  itemsMessage?: string;
}

interface ICheckoutStepperProps {
  isCheckout?: boolean;
  returnToBasket: () => void;
}

const initialState = {
  delivery: DeliveryType.SelfService,
  payment: PaymentType.Card,
  name: '',
  phone: '',
  comments: '',
  address: 'Самовывоз: бул. Вацлава Гавела, 9А',
  date: null,
  time: '',
  surname: '',
  city: '',
};

export function CheckoutStepper({
  returnToBasket,
  isCheckout,
}: ICheckoutStepperProps) {
  const {
    items,
    totalPrice,
    delivery,
    clearBasket,
    addDelivery,
    removeDelivery,
  } = useBasket();
  const [activeStep, setActiveStep] = useState(CheckoutSteps.Delivery);
  const [payment, setPayment] = useState(PaymentType.Card);

  const [form, setForm] = useState<IOrder>({
    ...initialState,
    delivery: delivery ? DeliveryType.Delivery : DeliveryType.SelfService,
    address: delivery ? '' : 'Самовывоз: бул. Вацлава Гавела, 9А',
  });
  const { showSnackbar } = useSnackbar();
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);

  const handleDeliveryChange = (deliveryValue: DeliveryType) => {
    if (deliveryValue === DeliveryType.SelfService) {
      setForm({
        ...form,
        delivery: deliveryValue,
        address: 'Самовывоз: бул. Вацлава Гавела, 9А',
      });
    } else {
      setForm({
        ...form,
        delivery: deliveryValue,
        address:
          form.address === 'Самовывоз: бул. Вацлава Гавела, 9А'
            ? ''
            : form.address,
      });
    }
  };

  const handleDeliverySubmit = () => {
    if (form.delivery === DeliveryType.Delivery) {
      addDelivery();
    } else {
      removeDelivery();
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
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
    setActiveStep(CheckoutSteps.Payment);
  };

  const handlePaymentSubmit = async (payment: PaymentType) => {
    setForm(initialState);
    const itemsMessage = formatMessage(items);
    const date = form.date ? formatDate(form.date) : '';

    try {
      await submitOrder({ ...form, date, payment, itemsMessage });
      setPayment(payment);
      clearBasket();
      setActiveStep(CheckoutSteps.Success);
    } catch (e) {
      console.error(e);
      showSnackbar(
        'Ошибка при сохранении заказа ☹️\nПопробуйте ещё раз',
        SnackbarType.Error
      );
    }
  };

  const handleStepChange = (step: CheckoutSteps) => () => {
    setActiveStep(step);
  };

  const handleContactsBackClick = () => {
    removeDelivery();
    setActiveStep(CheckoutSteps.Delivery);
    setForm({ ...form, date: null });
  };

  function isStepComplete(step: CheckoutSteps) {
    return step < activeStep;
  }

  if (!isCheckout) {
    return null;
  }

  return (
    <CheckoutStepperContainer>
      {isMobile ? (
        <CheckoutHeaderWrapper>
          <BackArrowWrapper>
            <IconButton onClick={returnToBasket} size='small'>
              <ChevronLeftIcon style={{ margin: 0 }} />
            </IconButton>
          </BackArrowWrapper>
          <TextLink onClick={returnToBasket}>Назад</TextLink>
        </CheckoutHeaderWrapper>
      ) : (
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
      )}

      {isMobile && <Typography variant='h2'>Оформление заказа</Typography>}

      {!!totalPrice && (
        <Flex alignBaseline style={{ marginTop: '10px' }}>
          <HelperText>Сумма заказа: </HelperText>
          <Typography variant='h2' style={{ fontSize: 18 }}>
            {totalPrice} грн
          </Typography>
        </Flex>
      )}

      {activeStep !== CheckoutSteps.Success && (
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
      )}

      <Content style={{ width: isMobile ? 'auto' : '800px' }}>
        {activeStep === CheckoutSteps.Delivery && (
          <Delivery
            totalPrice={totalPrice}
            delivery={form.delivery}
            items={items}
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
            handleBackClick={handleContactsBackClick}
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
        {activeStep === CheckoutSteps.Success && <Success payment={payment} />}
      </Content>
    </CheckoutStepperContainer>
  );
}
