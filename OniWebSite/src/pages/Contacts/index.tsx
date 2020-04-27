import React, { useState } from 'react';
import {
  ContactsMainSection,
  ContactsTopSection,
  ContactsBottomSection,
  ContactsLeftSection,
  ContactsRightSection,
  ContactsTextSection,
  ContactsSection,
  TextWrapper,
  IconWrapper,
  useStyles,
  Title,
  RotatedImageWrapper,
  LinkWrapper,
} from './styled';
import {
  Typography,
  Paper,
  TextField,
  InputBaseComponentProps,
} from '@material-ui/core';
import { ImageWithFallback } from '@common/ImageWithFallback';
import PhoneIcon from '@icons/phone.svg';
import EnvelopeIcon from '@icons/envelope.svg';
import LocationIcon from '@icons/location.svg';
import { Button } from '@common/Button';
import {
  INVALID_PHONE,
  INVALID_NAME,
} from '@pages/Checkout/CheckoutStepper/Contacts';
import PhoneInput from '@common/PhoneInput';
import { submitOrder } from '@src/api/oni-web';
import { useSnackbar } from '@hooks/useSnackbar';
import { DeliveryType } from '@pages/Checkout/CheckoutStepper/Delivery';
import { PaymentType } from '@pages/Checkout/CheckoutStepper/Payment';
import { Flex } from '@styles/styled';

interface IRequiredContactsData {
  name?: string;
  phone?: string;
}

interface IContactsData extends IRequiredContactsData {
  message?: string;
}

export function Contacts() {
  const [formData, setFormData] = useState<IContactsData>({
    name: '',
    phone: '',
    message: '',
  });
  const classes = useStyles();
  const [formErrors, setFormErrors] = useState<IRequiredContactsData>({});
  const { showSnackbar } = useSnackbar();

  const handleChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleBlur = (key: string, value: string) => {
    if (key === 'name') {
      setFormErrors({ ...formErrors, name: value ? undefined : INVALID_NAME });
    }
    if (key === 'phone') {
      setFormErrors({
        ...formErrors,
        phone: !value || value.indexOf('_') > -1 ? INVALID_PHONE : undefined,
      });
    }
  };

  const handleMessageSubmit = async () => {
    try {
      await submitOrder({
        name: formData.name,
        phone: formData.phone,
        delivery: DeliveryType.SelfService,
        payment: PaymentType.Card,
        itemsMessage: formData.message,
      });
      showSnackbar('Сообщение отправлено!');
    } catch (e) {
      throw e;
    }
  };

  return (
    <ContactsMainSection>
      <ContactsTopSection>
        <ContactsLeftSection>
          <ContactsTextSection>
            <Typography
              variant='h1'
              style={{ lineHeight: '1.2rem', marginBottom: '3rem' }}
            >
              Контакты
            </Typography>

            <Typography
              variant='h3'
              style={{ marginBottom: '2rem', marginTop: '2rem' }}
            >
              АДРЕС
            </Typography>
            <ContactsSection>
              <Flex direction='row' justifyBetween>
                <TextWrapper>
                  <IconWrapper>
                    <LocationIcon />
                  </IconWrapper>
                  Киев, бульвар Вацлава Гавела, 9А
                </TextWrapper>
                <LinkWrapper href='/delivery#map-wrapper'>
                  Показать на карте
                </LinkWrapper>
              </Flex>
              <Flex direction='row' justifyBetween>
                <Flex direction='column'>
                  <Title>Время работы</Title>
                  <TextWrapper>Пн-Сб 9:00 - 20:00</TextWrapper>
                </Flex>
                <Flex direction='column'>
                  <Title>Приём заказов</Title>
                  <TextWrapper>Пн-Сб 9:00 - 18:00</TextWrapper>
                </Flex>
              </Flex>
            </ContactsSection>

            <Typography
              variant='h3'
              style={{ marginBottom: '2rem', marginTop: '2rem' }}
            >
              СВЯЗАТЬСЯ С НАМИ
            </Typography>
            <ContactsSection>
              <TextWrapper>
                <IconWrapper>
                  <PhoneIcon />
                </IconWrapper>
                +38 096 249 04 30
              </TextWrapper>
              <TextWrapper>
                <IconWrapper>
                  <EnvelopeIcon />
                </IconWrapper>
                info@oni.ua
              </TextWrapper>
            </ContactsSection>

            <Typography
              variant='body1'
              style={{ marginBottom: '2rem', marginTop: '3rem' }}
            >
              Если срочно нужно что-то вкусное, а Вы забыли сделать заказ - мы
              готовы решить эту проблему.
            </Typography>
            <Typography variant='body1' style={{ marginBottom: '2rem' }}>
              У нас есть небольшая кофейня, где всегда можно выбрать десерты с
              витрины. Ну и, само собой, выпить вкусный кофе - к нему мы
              относимся с такой же любовью, как и к сладкому.
            </Typography>
          </ContactsTextSection>
        </ContactsLeftSection>

        <ContactsRightSection>
          <ImageWithFallback
            src='./images/pages/about/about_5'
            style={{
              width: '710px',
              height: '320px',
              objectFit: 'cover',
              marginTop: '4rem',
            }}
          />
        </ContactsRightSection>
      </ContactsTopSection>

      <ContactsBottomSection>
        <ContactsLeftSection style={{ paddingRight: '5rem' }}>
          <Paper
            style={{
              padding: '2rem',
              margin: '5rem 0',
              textAlign: 'center',
              width: '530px',
            }}
          >
            <Typography variant={'h3'} style={{ margin: '1rem' }}>
              НАПИШИТЕ НАМ
            </Typography>
            <TextField
              label='Имя'
              value={formData.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange('name', e.target.value)
              }
              onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                handleBlur('name', e.target.value)
              }
              variant='outlined'
              required
              FormHelperTextProps={{
                classes: { root: classes.formHelperText },
              }}
              error={!!formErrors.name}
              helperText={formErrors.name}
              fullWidth
              style={{ margin: '1rem 0' }}
            />
            <TextField
              label='Телефон'
              value={formData.phone}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange('phone', e.target.value)
              }
              onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                handleBlur('phone', e.target.value)
              }
              variant='outlined'
              required
              InputProps={{
                inputComponent: PhoneInput as React.FunctionComponent<
                  InputBaseComponentProps
                >,
              }}
              FormHelperTextProps={{
                classes: { root: classes.formHelperText },
              }}
              error={!!formErrors.phone}
              helperText={formErrors.phone}
              fullWidth
              style={{ margin: '1rem 0' }}
            />
            <TextField
              label='Ваше сообщение тут'
              value={formData.message}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange('message', e.target.value)
              }
              variant='outlined'
              multiline
              rowsMax='4'
              fullWidth
              style={{ margin: '1rem 0' }}
            />
            <Button rounded onClick={handleMessageSubmit}>
              Отправить
            </Button>
          </Paper>
        </ContactsLeftSection>

        <ContactsRightSection>
          <RotatedImageWrapper>
            <ImageWithFallback
              src='./images/pages/macarons/box-24'
              style={{
                width: '600px',
                height: 'auto',
                objectFit: 'cover',
                marginTop: '4rem',
              }}
            />
          </RotatedImageWrapper>
        </ContactsRightSection>
      </ContactsBottomSection>
    </ContactsMainSection>
  );
}
