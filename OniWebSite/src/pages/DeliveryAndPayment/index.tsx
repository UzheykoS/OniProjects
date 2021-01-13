import React, { ReactElement } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import {
  DeliverySection,
  TextWrapper,
  IconWrapper,
  CustomDivider,
} from './styled';
import { Typography, useMediaQuery, Link } from '@material-ui/core';
import LocationIcon from '@icons/location.svg';
import PhoneIcon from '@icons/phone.svg';
import EnvelopeIcon from '@icons/envelope.svg';
import { Flex } from '@styles/styled';
import { BREAKPOINT } from '@constants';

interface IGoogleMapsWrapperProps {
  containerElement: ReactElement;
  mapElement: ReactElement;
  isMobile: boolean;
  onMapLoad: () => void;
  onMapClick: () => void;
  onMarkerRightClick: () => void;
}

const GoogleMapsWrapper = withGoogleMap((props: IGoogleMapsWrapperProps) => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={17}
    defaultCenter={{ lat: 50.4461836, lng: 30.4256751 }}
    onClick={props.onMapClick}
  >
    <Marker
      title={'ONI'}
      icon={
        props.isMobile
          ? './images/oni-marker-small.png'
          : './images/oni-marker.png'
      }
      position={{ lat: 50.4461836, lng: 30.4256751 }}
    />
  </GoogleMap>
));

export function DeliveryAndPayment() {
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);

  return (
    <Flex direction='column' justifyCenter>
      <Flex
        justifyCenter
        direction={isMobile ? 'column' : 'row'}
        style={{ margin: isMobile ? '5rem 2rem 2rem 2rem' : '50px 0px' }}
      >
        <Flex direction='column' alignEnd style={{ paddingTop: '3.5rem' }}>
          <Flex direction='column' style={{ width: isMobile ? '' : 450 }}>
            <Typography
              variant='h1'
              style={{ lineHeight: '1.2rem', marginBottom: '3rem' }}
            >
              Доставка
            </Typography>
            <svg width='41' height='5'>
              <rect width='41' height='5' style={{ fill: '#B8A36A' }} />
            </svg>
            <Typography
              variant='h3'
              style={{ marginBottom: '1rem', marginTop: '2rem' }}
            >
              ДОСТАВКА ПО КИЕВУ
            </Typography>
            <Typography variant='body1'>
              <b>Доставляем курьером</b> на следующий день после оформления
              заказа. Стоимость доставки – 80 грн. Минимальная сумма заказа для
              доставки – 200 грн. Возможность доставки курьером в день заказа
              уточняйте дополнительно.
            </Typography>
            <Typography variant='body1' style={{ marginTop: '1rem' }}>
              <b>Срочную доставку в день заказа</b> осуществляем на курьерском такси.
              Стоимость доставки – по тарифу перевозчика. Минимальная сумма
              заказа для доставки – 200 грн. Если все выбранные десерты есть в
              наличии, вы можете получить заказ в течение часа после оформления.
            </Typography>
            <Typography
              variant='h3'
              style={{ marginBottom: '1rem', marginTop: '2.5rem' }}
            >
              ДОСТАВКА В ДРУГИЕ ГОРОДА
            </Typography>
            <Typography variant='body1'>
              Отправляем десерты Новой почтой только в холодное время года –
              температура на улице не выше 10°C. Стоимость доставки – по тарифу
              перевозчика. Минимальная сумма заказа для доставки – 200 грн.
            </Typography>
            <Typography
              variant='h3'
              style={{ marginBottom: '1rem', marginTop: '2.5rem' }}
            >
              САМОВЫВОЗ
            </Typography>
            <Typography variant='body1' style={{ marginBottom: '2rem' }}>
              Мы всегда рады встрече! Заказ можно забрать у нас в кондитерской.
              Заодно выпить кофе и поболтать.
            </Typography>
            <CustomDivider />
            {!isMobile && (
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
                    <Link
                      href='tel:+380962490430'
                      style={{ textDecoration: 'underline' }}
                      color='inherit'
                    >
                      +38 096 249 04 30
                    </Link>
                  </TextWrapper>
                  <TextWrapper>
                    <IconWrapper>
                      <EnvelopeIcon />
                    </IconWrapper>
                    <Link
                      href='mailto:info@oni.ua'
                      style={{ textDecoration: 'underline' }}
                      color='inherit'
                    >
                      info@oni.ua
                    </Link>
                  </TextWrapper>
                </Flex>
              </DeliverySection>
            )}
          </Flex>
        </Flex>

        <Flex
          direction='column'
          style={{
            padding: isMobile ? '' : '8rem 0 0 5rem',
            position: 'relative',
            flexBasis: isMobile ? '' : '30rem',
          }}
        >
          <Typography
            variant='h3'
            style={{ marginBottom: '1rem', marginTop: '2rem' }}
          >
            ОПЛАТА
          </Typography>
          <Typography variant='body1' style={{ marginBottom: '1rem' }}>
            Если доставку осуществляет наш курьер – заказ можно оплатить заранее
            на карту или наличными при получении.
          </Typography>
          <Typography variant='body1' style={{ marginBottom: '1rem' }}>
            Если доставку осуществляет курьерское такси или Новая почта – заказ
            необходимо оплатить заранее на карту.
          </Typography>
          <Typography variant='body1'>
            Если вы забираете заказ самостоятельно – его можно оплатить при
            получении наличными или через терминал. Также вы можете оплатить
            заказ заранее на карту.
          </Typography>
          <Flex
            justifyCenter
            id='map-wrapper'
            style={{
              height: 400,
              width: isMobile ? '100%' : 700,
              top: isMobile ? '' : 450,
              position: isMobile ? 'inherit' : 'absolute',
            }}
          >
            <GoogleMapsWrapper
              containerElement={<div style={{ width: '100%' }} />}
              mapElement={<div style={{ height: `100%` }} />}
              isMobile={isMobile}
              onMapLoad={() => {}}
              onMapClick={() => {}}
              onMarkerRightClick={() => {}}
            />
          </Flex>
          {isMobile && (
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
                  <Link
                    href='tel:+380962490430'
                    style={{ textDecoration: 'underline' }}
                    color='inherit'
                  >
                    +38 096 249 04 30
                  </Link>
                </TextWrapper>
                <TextWrapper>
                  <IconWrapper>
                    <EnvelopeIcon />
                  </IconWrapper>
                  <Link
                    href='mailto:info@oni.ua'
                    style={{ textDecoration: 'underline' }}
                    color='inherit'
                  >
                    info@oni.ua
                  </Link>
                </TextWrapper>
              </Flex>
            </DeliverySection>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
