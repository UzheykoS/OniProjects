import React from 'react';
import {
  FooterWrapper,
  LogoWrapper,
  ColumnWrapper,
  SocialsWrapper,
  Logo,
  Title,
  List,
  ListItem,
  TextWrapper,
  SocialsItem,
} from './styled';
import { routes, Pages, ProductPages } from '@constants/routes';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const productRoutes = routes[Pages.Products]!.nestedRoutes!;

  return (
    <FooterWrapper>
      <LogoWrapper>
        <Logo src='/images/icons/Oni_w_black.png' />
        <TextWrapper>C ONI Desserts, 2019</TextWrapper>
      </LogoWrapper>
      <ColumnWrapper>
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
      </ColumnWrapper>
      <ColumnWrapper>
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
      </ColumnWrapper>
      <ColumnWrapper>
        <Title>Контакты</Title>
        <TextWrapper>+38 096 249 04 30</TextWrapper>
        <TextWrapper>info@oni.ua</TextWrapper>
        <TextWrapper>Киев, бульвар Вацлава Гавела, 9А</TextWrapper>
      </ColumnWrapper>
      <SocialsWrapper>
        <Title>Соцсети</Title>
        <div>
          <SocialsItem target='_blank' href='https://www.facebook.com/'>
            <img className='social_network' src='images/icons/facebook.png' />
          </SocialsItem>
          <SocialsItem target='_blank' href='https://www.instagram.com'>
            <img className='social_network' src='images/icons/instagram.png' />
          </SocialsItem>
          <SocialsItem target='_blank' href='https://www.telegram.com'>
            <img className='social_network' src='images/icons/twitter.png' />
          </SocialsItem>
        </div>
      </SocialsWrapper>
    </FooterWrapper>
  );
};
