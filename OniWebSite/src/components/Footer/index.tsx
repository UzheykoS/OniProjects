import React from 'react';
import {
  FooterWrapper,
  LogoWrapper,
  Logo,
  Title,
  List,
  ListItem,
  TextWrapper,
  SocialsItem,
  FlexColumnWrapper,
  IconWrapper,
  SocialsWrapper,
} from './styled';
import { routes, Pages } from '@constants/routes';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, useMediaQuery, Link } from '@material-ui/core';
import { BREAKPOINT } from '@constants';
import PhoneIcon from '@icons/phone.svg';
import EnvelopeIcon from '@icons/envelope.svg';
import LocationIcon from '@icons/location.svg';
import { Flex } from '@styles/styled';
import { ProductType } from '@constants/products';

export const Footer = () => {
  const productRoutes = routes[Pages.Products]!.nestedRoutes!;
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);

  if (isMobile) {
    return (
      <FooterWrapper>
        <Flex justifyCenter direction='column'>
          <Flex justifyCenter>
            <LogoWrapper>
              <Logo src='/images/icons/Oni_w_black.png' />
            </LogoWrapper>
          </Flex>

          <Flex justifyEvenly>
            <FlexColumnWrapper>
              <Title>Меню</Title>
              <List>
                {Object.keys(routes).map(key => {
                  const page = key as Pages;
                  const route = routes[page];
                  if (!route) {
                    return null;
                  }
                  return (
                    <ListItem key={page}>
                      <RouterLink to={route.path}>{route.label}</RouterLink>
                    </ListItem>
                  );
                })}
              </List>
            </FlexColumnWrapper>

            <FlexColumnWrapper>
              <Title>Десерты</Title>
              <List>
                {Object.keys(productRoutes).map(key => {
                  const page = key as ProductType;
                  const route = productRoutes[page];
                  if (!route) {
                    return null;
                  }
                  return (
                    <ListItem key={page}>
                      <RouterLink to={route.path}>{route.label}</RouterLink>
                    </ListItem>
                  );
                })}
              </List>
            </FlexColumnWrapper>
          </Flex>

          <Flex justifyEvenly>
            <FlexColumnWrapper>
              <Title>Контакты</Title>
              <Flex>
                {' '}
                <TextWrapper>
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
                <TextWrapper style={{ paddingLeft: 40 }}>
                  <IconWrapper>
                    <EnvelopeIcon />
                  </IconWrapper>
                  info@oni.ua
                </TextWrapper>
              </Flex>
              <Flex>
                <TextWrapper>
                  <IconWrapper>
                    <LocationIcon />
                  </IconWrapper>
                  <Link
                    style={{ textDecoration: 'underline' }}
                    color='inherit'
                    href={'https://goo.gl/maps/61G5oKAfPiXo6cU18'}
                  >
                    <TextWrapper>Киев, б-р Вацлава Гавела, 9А</TextWrapper>
                  </Link>
                </TextWrapper>
              </Flex>
            </FlexColumnWrapper>
          </Flex>

          <Flex justifyCenter>
            <FlexColumnWrapper>
              <Title
                style={{ textAlign: 'center', padding: '40px 0px 10px 0px' }}
              >
                Соцсети
              </Title>
              <SocialsWrapper>
                <SocialsItem
                  target='_blank'
                  href='https://www.facebook.com/oni.desserts/'
                >
                  <img
                    className='social_network'
                    src='images/icons/facebook.png'
                  />
                </SocialsItem>
                <SocialsItem
                  target='_blank'
                  href='https://www.instagram.com/oni.desserts/'
                >
                  <img
                    className='social_network'
                    src='images/icons/instagram.png'
                  />
                </SocialsItem>
                <SocialsItem target='_blank' href='https://t.me/oni_desserts'>
                  <img
                    className='social_network'
                    src='images/icons/telegram.png'
                  />
                </SocialsItem>
              </SocialsWrapper>
              <TextWrapper style={{ marginTop: 10 }}>
                © ONI Desserts, 2019
              </TextWrapper>
            </FlexColumnWrapper>
          </Flex>
        </Flex>
      </FooterWrapper>
    );
  }

  return (
    <FooterWrapper>
      <Grid container>
        <Grid item md={3}>
          <Grid container direction='column' alignItems='center'>
            <LogoWrapper>
              <Logo src='/images/icons/Oni_w_black.png' />
              <TextWrapper>© ONI Desserts, 2019</TextWrapper>
            </LogoWrapper>
          </Grid>
        </Grid>

        <Grid item md={2}>
          <Title>Меню</Title>
          <List>
            {Object.keys(routes).map(key => {
              const page = key as Pages;
              const route = routes[page];
              if (!route) {
                return null;
              }
              return (
                <ListItem key={page}>
                  <RouterLink to={route.path}>{route.label}</RouterLink>
                </ListItem>
              );
            })}
          </List>
        </Grid>

        <Grid item md={2}>
          <Title>Наши десерты</Title>
          <List>
            {Object.keys(productRoutes).map(key => {
              const page = key as ProductType;
              const route = productRoutes[page];
              if (!route) {
                return null;
              }
              return (
                <ListItem key={page}>
                  <RouterLink to={route.path}>{route.label}</RouterLink>
                </ListItem>
              );
            })}
          </List>
        </Grid>

        <Grid item md={2}>
          <Title>Контакты</Title>
          <TextWrapper>
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
            info@oni.ua
          </TextWrapper>
          <TextWrapper>
            <IconWrapper>
              <LocationIcon />
            </IconWrapper>
            <Link
              style={{ textDecoration: 'underline' }}
              color='inherit'
              href={'https://goo.gl/maps/61G5oKAfPiXo6cU18'}
            >
              <TextWrapper>Киев, б-р Вацлава Гавела, 9А</TextWrapper>
            </Link>
          </TextWrapper>
        </Grid>

        <Grid item md={3}>
          <Grid
            container
            direction='column'
            alignItems='center'
            justify='center'
          >
            <FlexColumnWrapper>
              <Title>Соцсети</Title>
              <div>
                <SocialsItem
                  target='_blank'
                  href='https://www.facebook.com/oni.desserts/'
                >
                  <img
                    className='social_network'
                    src='images/icons/facebook.png'
                  />
                </SocialsItem>
                <SocialsItem
                  target='_blank'
                  href='https://www.instagram.com/oni.desserts/'
                >
                  <img
                    className='social_network'
                    src='images/icons/instagram.png'
                  />
                </SocialsItem>
                <SocialsItem target='_blank' href='https://t.me/oni_desserts'>
                  <img
                    className='social_network'
                    src='images/icons/telegram.png'
                  />
                </SocialsItem>
                {/* <SocialsItem rel='import' href='./wheelOfFortune.html'>
                  <img
                    className='social_network'
                    src='images/icons/twitter.png'
                  />
                </SocialsItem> */}
              </div>
            </FlexColumnWrapper>
          </Grid>
        </Grid>
      </Grid>
    </FooterWrapper>
  );
};
