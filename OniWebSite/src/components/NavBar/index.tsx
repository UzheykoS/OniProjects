import React from 'react';
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
} from './styled';
import BinIcon from '@icons/bin.svg';
import IconButton from '@common/IconButton';
import { useBasket } from '@hooks/useBasket';
import {
  useMediaQuery,
  SwipeableDrawer,
  List,
  Divider,
} from '@material-ui/core';
import { BREAKPOINT } from '@constants';
import MenuIcon from '@material-ui/icons/Menu';

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
                active={currentPage === page}
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
    <NavBarWrapperMobile>
      <SwipeableDrawer
        anchor={'left'}
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
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
            <img className='social_network' src='images/icons/facebook.png' />
          </a>
          <a target='_blank' href='https://www.instagram.com'>
            <img className='social_network' src='images/icons/instagram.png' />
          </a>
          <a target='_blank' href='https://www.telegram.com'>
            <img className='social_network' src='images/icons/twitter.png' />
          </a>
        </SocialMedia>
      </SwipeableDrawer>

      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon style={{ fontSize: 36 }} />
      </IconButton>

      <LogoLink style={{ padding: '10px 0' }}>
        <Link to={routes[Pages.Main]!.path}>
          <Logo
            src='/images/icons/Oni_w_black.png'
            whiteMode={currentPage === Pages.Main}
          />
        </Link>
      </LogoLink>

      <IconButton disableFocusRipple onClick={handleBinClick}>
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
