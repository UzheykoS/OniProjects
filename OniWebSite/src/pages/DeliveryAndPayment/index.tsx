import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import {
  DeliveryMainSection,
  DeliveryTopSection,
  DeliveryLeftSection,
  DeliveryTextSection,
  DeliverySection,
  TextWrapper,
  IconWrapper,
  Title,
  DeliveryRightSection,
  DeliveryBottomSection,
} from './styled';
import { Typography } from '@material-ui/core';
import LocationIcon from '@icons/location.svg';
import { Flex } from '@styles/styled';
import { ImageWithFallback } from '@common/ImageWithFallback';

const GoogleMapsWrapper = withGoogleMap((props: any) => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={17}
    defaultCenter={{ lat: 50.4461836, lng: 30.4256751 }}
    onClick={props.onMapClick}
  >
    <Marker
      title={'ONI'}
      label={'O'}
      position={{ lat: 50.4461836, lng: 30.4256751 }}
    />
  </GoogleMap>
));

export function DeliveryAndPayment() {
  return (
    <DeliveryMainSection>
      <DeliveryTopSection>
        <DeliveryLeftSection>
          <DeliveryTextSection>
            <Typography
              variant='h1'
              style={{ lineHeight: '1.2rem', marginBottom: '3rem' }}
            >
              Доставка и оплата
            </Typography>

            <Typography
              variant='h3'
              style={{ marginBottom: '2rem', marginTop: '2rem' }}
            >
              АДРЕС
            </Typography>
            <DeliverySection>
              <TextWrapper>
                <IconWrapper>
                  <LocationIcon />
                </IconWrapper>
                Киев, бульвар Вацлава Гавела, 9А
              </TextWrapper>
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
            </DeliverySection>
            <Typography
              variant='body1'
              style={{ marginBottom: '2rem', marginTop: '2rem' }}
            >
              Наш кондитерский цех находится в г.Киев по адресу бульвар Вацлава
              Гавела, 9А (бывший бульвар Ивана Лепсе). Вы можете забрать свой
              заказ самостоятельно или заказать доставку курьером по Киеву.
              Стоимость доставки составляет 70 грн. Минимальная сумма заказа для
              доставки – 200 грн. Доставка в другие города Украины обсуждается
              индивидуально.
            </Typography>
            <Typography variant='body1' style={{ marginBottom: '2rem' }}>
              При условии наличия желаемых изделий возможна доставка в день
              заказа. Все детали Вы можете уточнить по тел.+380962490430 или
              написав нам на почту info@oni.ua.
            </Typography>
            <Typography variant='body1' style={{ marginBottom: '2rem' }}>
              Оплата осуществляется наличными при получении или на карту
              ПриватБанк. Предоплата необходима только для индивидуальных и
              корпоративных заказов.
            </Typography>
          </DeliveryTextSection>
        </DeliveryLeftSection>

        <DeliveryRightSection>
          <ImageWithFallback
            src='./images/pages/about/about_5'
            style={{
              width: '710px',
              height: '320px',
              objectFit: 'cover',
              marginTop: '4rem',
            }}
          />
        </DeliveryRightSection>
      </DeliveryTopSection>

      <DeliveryBottomSection id='map-wrapper'>
        <GoogleMapsWrapper
          containerElement={<div style={{ width: '100%' }} />}
          mapElement={<div style={{ height: `100%` }} />}
          onMapLoad={() => {}}
          onMapClick={() => {}}
          onMarkerRightClick={() => {}}
        />
      </DeliveryBottomSection>
    </DeliveryMainSection>
  );
}
