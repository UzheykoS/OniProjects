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
  DeliveryRightSection,
  MapSection,
  CustomDivider,
} from './styled';
import { Typography } from '@material-ui/core';
import LocationIcon from '@icons/location.svg';
import PhoneIcon from '@icons/phone.svg';
import EnvelopeIcon from '@icons/envelope.svg';
import { Flex } from '@styles/styled';

const GoogleMapsWrapper = withGoogleMap((props: any) => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={17}
    defaultCenter={{ lat: 50.4461836, lng: 30.4256751 }}
    onClick={props.onMapClick}
  >
    <Marker
      title={'ONI'}
      icon={'./images/oni-marker.png'}
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
              Доставка
            </Typography>
            <Typography
              variant='body1'
              style={{ marginBottom: '2rem', marginTop: '1rem' }}
            >
              Наш кондитерский цех находится в г.Киев по адресу бульвар Вацлава
              Гавела, 9А (бывший бульвар Ивана Лепсе).
            </Typography>
            <Typography variant='body1' style={{ marginBottom: '2rem' }}>
              Вы можете забрать свой заказ самостоятельно или заказать доставку
              курьером по Киеву. Стоимость доставки составляет 70 грн.
              Минимальная сумма заказа для доставки – 200 грн. Доставка в другие
              города Украины обсуждается индивидуально.
            </Typography>
            <Typography variant='body1' style={{ marginBottom: '2rem' }}>
              При условии наличия желаемых изделий возможна доставка в день
              заказа. Все детали Вы можете уточнить по тел.+380962490430 или
              написав нам на почту info@oni.ua.
            </Typography>
            <CustomDivider />
            <DeliverySection>
              <Flex>
                <TextWrapper>
                  <IconWrapper>
                    <LocationIcon />
                  </IconWrapper>
                  Киев, бульвар Вацлава Гавела, 9А
                </TextWrapper>
              </Flex>
              <Flex>
                <TextWrapper style={{ marginRight: '2rem' }}>
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
              </Flex>
            </DeliverySection>
          </DeliveryTextSection>
        </DeliveryLeftSection>

        <DeliveryRightSection>
          <Typography
            variant='h3'
            style={{ marginBottom: '2rem', marginTop: '2rem' }}
          >
            ОПЛАТА
          </Typography>
          <Typography variant='body1' style={{ marginBottom: '2rem' }}>
            Оплата осуществляется наличными при получении или на карту
            ПриватБанк. Предоплата необходима только для индивидуальных и
            корпоративных заказов.
          </Typography>
          <MapSection id='map-wrapper'>
            <GoogleMapsWrapper
              containerElement={<div style={{ width: '100%' }} />}
              mapElement={<div style={{ height: `100%` }} />}
              onMapLoad={() => {}}
              onMapClick={() => {}}
              onMarkerRightClick={() => {}}
            />
          </MapSection>
        </DeliveryRightSection>
      </DeliveryTopSection>
    </DeliveryMainSection>
  );
}
