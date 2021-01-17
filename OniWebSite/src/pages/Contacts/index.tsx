import React from 'react';
import {
  ContactsSection,
  TextWrapper,
  IconWrapper,
  Title,
  LinkWrapper,
  SocialsItem,
} from './styled';
import { Typography, useMediaQuery, Link } from '@material-ui/core';
import { ImageWithFallback } from '@common/ImageWithFallback';
import PhoneIcon from '@icons/phone.svg';
import EnvelopeIcon from '@icons/envelope.svg';
import LocationIcon from '@icons/location.svg';
import { Flex } from '@styles/styled';
import { BREAKPOINT } from '@constants';

export function Contacts() {
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);

  return (
    <Flex direction='column' style={{ fontFamily: 'Roboto' }} justifyCenter>
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
              Контакты
            </Typography>
            <svg width='41' height='5'>
              <rect width='41' height='5' style={{ fill: '#B8A36A' }} />
            </svg>
            <Typography
              variant='h3'
              style={{ marginBottom: '1rem', marginTop: '2rem' }}
            >
              ЖДЁМ В ГОСТИ
            </Typography>
            <Typography variant='body1'>
              Если срочно нужно что-то вкусное, а вы забыли сделать заказ – в
              нашей кофейне всегда можно выбрать десерты с витрины. Ну и, само
              собой, выпить вкусный кофе – к нему мы относимся с такой же
              любовью, как к сладкому.
            </Typography>
            {isMobile && (
              <ImageWithFallback
                src='./images/pages/about/hire'
                style={{
                  width: isMobile ? '100%' : '710px',
                  height: isMobile ? 'auto' : '320px',
                  objectFit: 'cover',
                  marginTop: '2rem',
                }}
              />
            )}
            <Typography
              variant='h3'
              style={{ marginBottom: '1rem', marginTop: '2rem' }}
            >
              АДРЕС
            </Typography>
            <ContactsSection>
              <Flex direction={isMobile ? 'column' : 'row'} justifyBetween>
                <TextWrapper>
                  <IconWrapper>
                    <LocationIcon />
                  </IconWrapper>
                  <LinkWrapper href='/delivery#map-wrapper'>
                    Киев, бульвар Вацлава Гавела, 9А
                  </LinkWrapper>
                </TextWrapper>
              </Flex>
              <Flex direction={isMobile ? 'column' : 'row'} justifyBetween>
                <Flex direction='column'>
                  <Title>Время работы</Title>
                  <TextWrapper>Пн-Пт 9:00-20:00</TextWrapper>
                  <TextWrapper>Сб-Вс 9:00-19:00</TextWrapper>
                </Flex>
              </Flex>
            </ContactsSection>

            <Typography
              variant='h3'
              style={{ marginBottom: '1rem', marginTop: '2rem' }}
            >
              СВЯЗАТЬСЯ С НАМИ
            </Typography>
            <Flex>
              <Flex direction='column'>
                <TextWrapper>
                  <IconWrapper>
                    <PhoneIcon />
                  </IconWrapper>
                  <Link
                    href='tel:+380962490430'
                    style={{ textDecoration: 'underline', lineHeight: '35px' }}
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
              {!isMobile && (
                <Flex direction='column' style={{ marginLeft: 70 }}>
                  <SocialsItem target='_blank' href='https://t.me/oni_desserts'>
                    <img
                      src='images/icons/telegram.png'
                      style={{ marginRight: 5, marginBottom: 5 }}
                    />
                    <TextWrapper>Telegram </TextWrapper>
                  </SocialsItem>
                  <SocialsItem
                    target='_blank'
                    href='viber://chat?number=380962490430'
                  >
                    <img
                      src='images/icons/viber.png'
                      style={{ marginRight: 5 }}
                    />
                    <TextWrapper>Viber </TextWrapper>
                  </SocialsItem>
                </Flex>
              )}
              {isMobile && (
                <Flex
                  style={{ paddingTop: 3, marginLeft: 50 }}
                  direction='column'
                >
                  <SocialsItem target='_blank' href='https://t.me/oni_desserts'>
                    <img
                      src='images/icons/telegram.png'
                      style={{ marginRight: '5px' }}
                    />
                    <TextWrapper>Telegram</TextWrapper>
                  </SocialsItem>
                  <SocialsItem
                    target='_blank'
                    href='viber://chat?number=380962490430'
                  >
                    <img
                      src='images/icons/viber.png'
                      style={{ marginRight: '5px' }}
                    />
                    <TextWrapper>Viber</TextWrapper>
                  </SocialsItem>
                </Flex>
              )}
            </Flex>
          </Flex>
        </Flex>

        {!isMobile && (
          <Flex
            direction='column'
            style={{
              padding: '3rem 0 0 5rem',
              position: 'relative',
              flexBasis: '30rem',
            }}
          >
            <ImageWithFallback
              src='./images/pages/about/hire'
              style={{
                width: '710px',
                height: '320px',
                objectFit: 'cover',
                marginTop: '4rem',
              }}
            />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
