import React, { useEffect } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { useLoading } from '@hooks/useLoading';
import {
  DeliveryBodyContainer,
  DeliveryHeaderContainer,
  DeliveryContainer,
  PhotoWrapper,
} from './styled';

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
  const { showLoading, closeLoading } = useLoading();

  useEffect(() => {
    showLoading();
  }, []);

  const onImageLoaded = () => {
    closeLoading();
  };

  return (
    <DeliveryContainer>
      <DeliveryHeaderContainer>
        <PhotoWrapper>
          <img
            src='./images/pages/contacts/contacts_header.jpg'
            onLoad={onImageLoaded}
          />
        </PhotoWrapper>
        <div className='header-text'>
          <div className='header-main'>ДОСТАВКА И ОПЛАТА</div>
          <div className='header-body'>
            Наш кондитерский цех находится в г.Киев по адресу бульвар Вацлава
            Гавела, 9А (бывший бульвар Ивана Лепсе). Вы можете забрать свой
            заказ самостоятельно или заказать доставку курьером по Киеву.
            Стоимость доставки составляет 70 грн. Минимальная сумма заказа для
            доставки – 200 грн. Доставка в другие города Украины обсуждается
            индивидуально.
            <br />
            <br />
            При условии наличия желаемых изделий возможна доставка в день
            заказа. Все детали Вы можете уточнить по тел.+380962490430 или
            написав нам на почту info@oni.ua.
            <br />
            <br />
            Оплата осуществляется наличными при получении или на карту
            ПриватБанк. Предоплата необходима только для индивидуальных и
            корпоративных заказов.
          </div>
        </div>
      </DeliveryHeaderContainer>
      <DeliveryBodyContainer>
        <GoogleMapsWrapper
          containerElement={<div style={{ height: '100%', width: '100%' }} />}
          mapElement={<div style={{ height: `100%` }} />}
          onMapLoad={() => {}}
          onMapClick={() => {}}
          onMarkerRightClick={() => {}}
        />
      </DeliveryBodyContainer>
    </DeliveryContainer>
  );
}
