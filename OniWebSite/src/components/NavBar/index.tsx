import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Pages, routes } from '@constants/routes';
import {
  NavBarWrapper,
  RoutesList,
  LogoLink,
  Logo,
  RoutesListItem,
  ListItemStyled,
  RoutesWrapper,
  RightSide,
  BadgeStyled,
  NavBarWrapperMobile,
  SocialMedia,
  ListWrapper,
  TooltipStyled,
  SwipeableDrawerStyled,
} from './styled';
import BinIcon from '@icons/bin.svg';
import IconButton from '@common/IconButton';
import { useBasket } from '@hooks/useBasket';
import { useMediaQuery, List, Divider } from '@material-ui/core';
import { BREAKPOINT } from '@constants';
import MenuIcon from '@material-ui/icons/Menu';
import Zoom from '@material-ui/core/Zoom';
import colors from '@constants/colors';
import { usePrevious } from '@hooks/usePrevious';

export function NavBar() {
  const location = useLocation();
  const history = useHistory();
  const { items } = useBasket();
  let currentPage = Pages.Main;
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);

  Object.keys(routes).forEach(key => {
    const value = routes[key as Pages];
    if (value && location.pathname.startsWith(value.path)) {
      currentPage = key as Pages;
    }
  });

  const [tooltipOpen, setTooltipOpen] = useState(false);
  let prevBasketLength = usePrevious(items.length);
  useEffect(() => {
    if (items.length > (prevBasketLength || 0)) {
      setTooltipOpen(true);
      setTimeout(() => {
        setTooltipOpen(false);
      }, 3000);
    }
    prevBasketLength = items.length;
  }, [items.length]);

  const handleBinClick = () => {
    history.push('/checkout');
  };

  const navBar = (
    <NavBarWrapper transparent={currentPage === Pages.Main}>
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
                active={currentPage === page}
              >
                <Link to={route.path}>{route.label}</Link>
              </RoutesListItem>
            );
          })}
        </RoutesWrapper>
        <RightSide>
          <TooltipStyled
            TransitionComponent={Zoom}
            title='Товар добавлен в корзину'
            arrow
            placement={'bottom'}
            open={tooltipOpen}
          >
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
          </TooltipStyled>
        </RightSide>
      </RoutesList>
    </NavBarWrapper>
  );

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  const iOS =
    (process as any).browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const navBarMobile = (
    <NavBarWrapperMobile transparent={currentPage === Pages.Main}>
      <SwipeableDrawerStyled
        anchor={'left'}
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        style={{ width: '40%' }}
      >
        <ListWrapper onClick={toggleDrawer(false)}>
          <List>
            {Object.keys(routes).map(key => {
              const page = key as Pages;
              const route = routes[page];
              if (!route || page === Pages.Checkout) {
                return null;
              }

              return (
                <ListItemStyled key={route.path} active={currentPage === page}>
                  <Link to={route.path}>{route.label}</Link>
                </ListItemStyled>
              );
            })}
          </List>
        </ListWrapper>
        <Divider />
        <SocialMedia>
          <a target='_blank' href='https://www.facebook.com/'>
            <img src='images/icons/facebook.png' />
          </a>
          <a target='_blank' href='https://www.instagram.com'>
            <img src='images/icons/instagram.png' />
          </a>
          <a target='_blank' href='https://www.telegram.com'>
            <img src='images/icons/twitter.png' />
          </a>
          <a target='_blank' href='viber://chat?number=380962490430'>
            <img src='images/icons/viber.png' />
          </a>
        </SocialMedia>
      </SwipeableDrawerStyled>

      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon style={{ fontSize: 36, color: colors.secondary.gold }} />
      </IconButton>

      <LogoLink style={{ padding: '10px 0' }}>
        <Link to={routes[Pages.Main]!.path}>
          <Logo
            src='/images/icons/Oni_w_black.png'
            height={50}
            whiteMode={currentPage === Pages.Main}
          />
        </Link>
      </LogoLink>

      <IconButton
        style={{ marginRight: 10 }}
        disableFocusRipple
        onClick={handleBinClick}
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

  return <>{isMobile ? navBarMobile : navBar}</>;
}
