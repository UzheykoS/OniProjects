import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { Pages, routes } from '@constants/routes';
import {
  NavBarWrapper,
  RoutesList,
  LogoLink,
  Logo,
  RoutesListItem,
  MenuItem,
  RoutesWrapper,
  RightSide,
} from './styled';
import BinIcon from '@icons/bin.svg';

export function NavBar() {
  const location = useLocation();
  let currentPage = Pages.Main;

  Object.keys(routes).forEach(key => {
    const value = routes[key as Pages];
    if (value && location.pathname.startsWith(value.path)) {
      currentPage = key as Pages;
    }
  });

  const navBar = (
    <NavBarWrapper>
      <RoutesList>
        <LogoLink>
          <Link to={routes[Pages.Main]!.path}>
            <Logo
              src='/images/icons/Oni_w_black.png'
              whiteMode={currentPage === Pages.Main}
            />
          </Link>
        </LogoLink>
        <RoutesWrapper>
          {Object.keys(routes).map(key => {
            const page = key as Pages;
            const route = routes[page];
            if (!route) {
              return null;
            }

            return (
              <RoutesListItem
                whiteMode={currentPage === Pages.Main}
                key={page}
                active={currentPage == page ? 'active' : ''}
              >
                <Link to={route.path}>{route.label}</Link>
              </RoutesListItem>
            );
          })}
        </RoutesWrapper>
        <RightSide>
          <BinIcon />
        </RightSide>
      </RoutesList>
    </NavBarWrapper>
  );

  const navBarMobile = (
    <NavBarWrapper>
      <Logo src='/images/icons/Oni_w_black.png' />
      <Menu
        right
        width={'100%'}
        customBurgerIcon={<img src='/images/icons/menu-button.png' />}
        customCrossIcon={<img src='/images/icons/close.png' />}
      >
        {Object.keys(routes).map(key => {
          const page = key as Pages;
          const route = routes[page];
          if (!route) {
            return null;
          }
          return (
            <MenuItem key={route.path}>
              <Link
                to={route.path}
                className={currentPage == page ? 'active' : ''}
              >
                {route.label}
              </Link>
            </MenuItem>
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
    </NavBarWrapper>
  );

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return <>{isTabletOrMobile ? navBarMobile : navBar}</>;
}
