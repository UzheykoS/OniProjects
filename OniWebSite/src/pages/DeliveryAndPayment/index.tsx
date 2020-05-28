import React, { ReactElement } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import {
  DeliverySection,
  TextWrapper,
  IconWrapper,
  CustomDivider,
} from './styled';
import { Typography, useMediaQuery } from '@material-ui/core';
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
              style={{ marginBottom: '2rem', marginTop: '2rem' }}
            >
              ДОСТАВКА ПО КИЕВУ
            </Typography>
            <Typography variant='body1'>
              Доставляем курьером с Пн по Сб. Стоимость доставки – 80 грн.
              Минимальная сумма заказа для доставки – 200 грн. При оформлении
              заказа до 11:00 возможна доставка в тот же день.
            </Typography>
            <Typography
              variant='h3'
              style={{ marginBottom: '2rem', marginTop: '2rem' }}
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
            )}
          </Flex>
        </Flex>

        <Flex
          direction='column'
          style={{
            padding: isMobile ? '' : '3rem 0 0 5rem',
            position: 'relative',
            flexBasis: isMobile ? '' : '30rem',
          }}
        >
          <Typography
            variant='h3'
            style={{ marginBottom: '2rem', marginTop: '2rem' }}
          >
            ОПЛАТА
          </Typography>
          <Typography variant='body1' style={{ marginBottom: '2rem' }}>
            Заказ можно оплатить наличными при получении или заранее на карту.
          </Typography>
          <Flex
            justifyCenter
            id='map-wrapper'
            style={{
              height: 300,
              width: isMobile ? '100%' : 700,
              top: isMobile ? '' : 250,
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
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
