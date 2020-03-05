import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Pages, ProductPages, routes } from '@constants/routes';
import {
  ProductsNavBarWrapper,
  ProductsNavBarMain,
  RoutesList,
  RoutesListItem,
  ProductsNavBarWrapperMobile,
} from './styled';
import { useMediaQuery } from '@material-ui/core';
import { BREAKPOINT } from '@constants';

const STICKY_LIMIT = 200;
const STICKY_LIMIT_MOBILE = 0;

export function ProductsNavBar() {
  const location = useLocation();
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);
  const [isSticky, setIsSticky] = useState(isMobile);
  const limit = isMobile ? STICKY_LIMIT_MOBILE : STICKY_LIMIT;
  const [scrollTop, setScrollTop] = useState(window.scrollY);

  const handleScroll = () => {
    setScrollTop(window.scrollY);
  };

  useEffect(() => {
    if (scrollTop > limit) {
      setIsSticky(true);
    } else if (scrollTop < limit) {
      setIsSticky(false);
    }
  }, [scrollTop]);

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
    <ProductsNavBarWrapperMobile isSticky={isSticky}>
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
    </ProductsNavBarWrapperMobile>
  );

  return isMobile ? productsNavBarMobile : productsNavBar;
}
