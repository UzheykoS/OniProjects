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
import { routes, Pages, ProductPages } from '@constants/routes';
import { Link } from 'react-router-dom';
import { Grid, useMediaQuery } from '@material-ui/core';
import { BREAKPOINT } from '@constants';
import PhoneIcon from '@icons/phone.svg';
import EnvelopeIcon from '@icons/envelope.svg';
import LocationIcon from '@icons/location.svg';
import { Flex } from '@styles/styled';

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
                      <Link to={route.path}>{route.label}</Link>
                    </ListItem>
                  );
                })}
              </List>
            </FlexColumnWrapper>

            <FlexColumnWrapper>
              <Title>Продукция</Title>
              <List>
                {Object.keys(productRoutes).map(key => {
                  const page = key as ProductPages;
                  const route = productRoutes[page];
                  if (!route) {
                    return null;
                  }
                  return (
                    <ListItem key={page}>
                      <Link to={route.path}>{route.label}</Link>
                    </ListItem>
                  );
                })}
              </List>
            </FlexColumnWrapper>
          </Flex>

          <Flex justifyEvenly>
            <FlexColumnWrapper>
              <Title>Контакты</Title>
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
            </FlexColumnWrapper>
            <FlexColumnWrapper>
              <Title>{'\u00a0'}</Title>
              <TextWrapper>
                <IconWrapper>
                  <LocationIcon />
                </IconWrapper>
                Киев, бульвар
              </TextWrapper>
              <TextWrapper>Вацлава Гавела, 9А</TextWrapper>
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
                <SocialsItem target='_blank' href='https://www.facebook.com/'>
                  <img
                    className='social_network'
                    src='images/icons/facebook.png'
                  />
                </SocialsItem>
                <SocialsItem target='_blank' href='https://www.instagram.com'>
                  <img
                    className='social_network'
                    src='images/icons/instagram.png'
                  />
                </SocialsItem>
                <SocialsItem target='_blank' href='https://www.telegram.com'>
                  <img
                    className='social_network'
                    src='images/icons/twitter.png'
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
                  <Link to={route.path}>{route.label}</Link>
                </ListItem>
              );
            })}
          </List>
        </Grid>

        <Grid item md={2}>
          <Title>Продукция</Title>
          <List>
            {Object.keys(productRoutes).map(key => {
              const page = key as ProductPages;
              const route = productRoutes[page];
              if (!route) {
                return null;
              }
              return (
                <ListItem key={page}>
                  <Link to={route.path}>{route.label}</Link>
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
            +38 096 249 04 30
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
            Киев, бульвар Вацлава Гавела, 9А
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
                <SocialsItem target='_blank' href='https://www.facebook.com/'>
                  <img
                    className='social_network'
                    src='images/icons/facebook.png'
                  />
                </SocialsItem>
                <SocialsItem target='_blank' href='https://www.instagram.com'>
                  <img
                    className='social_network'
                    src='images/icons/instagram.png'
                  />
                </SocialsItem>
                <SocialsItem target='_blank' href='https://www.telegram.com'>
                  <img
                    className='social_network'
                    src='images/icons/twitter.png'
                  />
                </SocialsItem>
              </div>
            </FlexColumnWrapper>
          </Grid>
        </Grid>
      </Grid>
    </FooterWrapper>
  );
};
