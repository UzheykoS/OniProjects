import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { Pages, ProductPages, routes } from '@constants/routes';
import {
  ProductsNavBarWrapper,
  ProductsNavBarMain,
  RoutesList,
  RoutesListItem,
} from './styled';
import { useMobile } from '@hooks/useMobile';

export function ProductsNavBar() {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsSticky(true);
    } else if (window.scrollY < 200) {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!location.pathname.startsWith(routes[Pages.Products]!.path)) {
    return null;
  }
  let currentProductPage: ProductPages;
  const productRoutes = routes[Pages.Products]!.nestedRoutes!;
  Object.keys(productRoutes).forEach(key => {
    const value = productRoutes[key as ProductPages];
    if (value && value.path === location.pathname) {
      currentProductPage = key as ProductPages;
    }
  });

  const productsNavBar = (
    <ProductsNavBarWrapper isSticky={isSticky}>
      <ProductsNavBarMain>
        <RoutesList>
          {Object.keys(productRoutes).map(key => {
            const page = key as ProductPages;
            const route = productRoutes[page];
            if (!route) {
              return null;
            }

            return (
              <RoutesListItem
                key={route.path}
                active={currentProductPage == page ? 'active' : ''}
              >
                <Link to={route.path}>{route.label}</Link>
              </RoutesListItem>
            );
          })}
        </RoutesList>
      </ProductsNavBarMain>
    </ProductsNavBarWrapper>
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
        {Object.keys(productRoutes).map((key, i) => {
          const page = key as ProductPages;
          const route = productRoutes[page];
          if (!route) {
            return null;
          }
          return (
            <span className='menu-item' key={i}>
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

  const { isMobile } = useMobile();

  return <>{isMobile ? productsNavBarMobile : productsNavBar}</>;
}
