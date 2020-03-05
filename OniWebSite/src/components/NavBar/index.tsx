import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
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
  BadgeStyled,
  useStyles,
  NavBarWrapperMobile,
} from './styled';
import BinIcon from '@icons/bin.svg';
import IconButton from '@common/IconButton';
import { useBasket } from '@hooks/useBasket';
import { useMediaQuery } from '@material-ui/core';
import { BREAKPOINT } from '@constants';

export function NavBar() {
  const location = useLocation();
  const history = useHistory();
  const { items } = useBasket();
  let currentPage = Pages.Main;

  Object.keys(routes).forEach(key => {
    const value = routes[key as Pages];
    if (value && location.pathname.startsWith(value.path)) {
      currentPage = key as Pages;
    }
  });

  const handleBinClick = () => {
    history.push('/checkout');
  };

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
            if (!route || page === Pages.Checkout) {
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
          <IconButton
            disableFocusRipple
            onClick={handleBinClick}
            style={{ width: '58px' }}
          >
            <BadgeStyled
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              badgeContent={items.length > 0 ? items.length : undefined}
              color={'primary'}
            >
              <BinIcon />
            </BadgeStyled>
          </IconButton>
        </RightSide>
      </RoutesList>
    </NavBarWrapper>
  );

  const classes = useStyles();

  const navBarMobile = (
    <NavBarWrapperMobile>
      <Menu
        width={'400px'}
        customBurgerIcon={<img src='/images/icons/menu-button.png' />}
        customCrossIcon={<img src='/images/icons/close.png' />}
        burgerButtonClassName={classes.burgerMenuIcon}
        crossButtonClassName={classes.burgerMenuCloseIcon}
        menuClassName={classes.burderMenu}
        overlayClassName={classes.burgerMenuOverlay}
        itemListClassName={classes.burgerMenuItems}
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
        {/* <div className='bm-socials'>
          <a target='_blank' href='https://www.facebook.com/'>
            <img className='social_network' src='images/icons/facebook.png' />
          </a>
          <a target='_blank' href='https://www.instagram.com'>
            <img className='social_network' src='images/icons/instagram.png' />
          </a>
          <a target='_blank' href='https://www.telegram.com'>
            <img className='social_network' src='images/icons/twitter.png' />
          </a>
        </div> */}
      </Menu>

      <LogoLink>
        <Link to={routes[Pages.Main]!.path}>
          <Logo
            src='/images/icons/Oni_w_black.png'
            whiteMode={currentPage === Pages.Main}
          />
        </Link>
      </LogoLink>

      <IconButton
        disableFocusRipple
        onClick={handleBinClick}
        // style={{ width: '58px' }}
      >
        <BadgeStyled
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          badgeContent={items.length > 0 ? items.length : undefined}
          color={'primary'}
        >
          <BinIcon />
        </BadgeStyled>
      </IconButton>
    </NavBarWrapperMobile>
  );

  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);

  return <>{isMobile ? navBarMobile : navBar}</>;
}
