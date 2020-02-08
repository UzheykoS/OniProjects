import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { Pages, ProductPages, routes } from '@constants/routes';
import {
  NavBarWrapper,
  NavBarMain,
  RoutesList,
  LogoLink,
  Logo,
  RoutesListItem,
} from './styled';

export function ProductsNavBar() {
  const match = useRouteMatch();
  let currentProductPage: ProductPages;
  const productRoutes = routes[Pages.Products]!.nestedRoutes!;
  Object.keys(productRoutes).forEach(key => {
    const value = productRoutes[key as ProductPages];
    debugger;
    if (value && value.path === match.path) {
      currentProductPage = key as ProductPages;
    }
  });

  const productsNavBar = (
    <NavBarWrapper>
      <NavBarMain>
        <RoutesList>
          <LogoLink>
            <Link to={routes[Pages.Main]!.path}>
              <Logo src='/images/icons/Oni_w_black.png' />
            </Link>
          </LogoLink>
          {Object.keys(productRoutes).map(key => {
            const page = key as ProductPages;
            const route = productRoutes[page];
            if (!route) {
              return null;
            }
            return (
              <RoutesListItem
                active={currentProductPage == page ? 'active' : ''}
              >
                <Link to={route.path}>{route.label}</Link>
              </RoutesListItem>
            );
          })}
        </RoutesList>
      </NavBarMain>
    </NavBarWrapper>
  );

  const productsNavBarMobile = (
    <div className='nav-bar'>
      <img src='/images/icons/Oni_w_black.png' className={'logo logo-small'} />
      <Menu
        right
        width={'100%'}
        customBurgerIcon={<img src='/images/icons/menu-button.png' />}
        customCrossIcon={<img src='/images/icons/close.png' />}
      >
        {Object.keys(productRoutes).map(key => {
          const page = key as ProductPages;
          const route = productRoutes[page];
          if (!route) {
            return null;
          }
          return (
            <span className='menu-item'>
              <Link
                to={route.path}
                className={currentProductPage == page ? 'active' : ''}
              >
                {route.label}
              </Link>
            </span>
          );
        })}
        <div className='bm-socials'>
          <a target='_blank' href='https://www.facebook.com/'>
            <img className='social_network' src='images/icons/facebook.png' />
          </a>
          <a target='_blank' href='https://www.instagram.com'>
            <img className='social_network' src='images/icons/instagram.png' />
          </a>
          <a target='_blank' href='https://www.telegram.com'>
            <img className='social_network' src='images/icons/twitter.png' />
          </a>
        </div>
      </Menu>
    </div>
  );

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <>{isTabletOrMobile ? { productsNavBarMobile } : { productsNavBar }}</>
  );
}
