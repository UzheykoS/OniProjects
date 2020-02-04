import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { useRefMounted } from '@hooks/useRefMounted';
import { Pages, ProductPages } from '@constants/routes';

interface INavProps {
  tab: Pages;
  subTab?: ProductPages;
}

export function Nav({ tab, subTab }: INavProps) {
  const [isSmallHeader, setIsSmallHeader] = useState(false);
  const refMounted = useRefMounted();

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', handleScroll, true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (!refMounted.current) {
      return;
    }
    if (window.scrollY > 100 && !isSmallHeader) {
      setIsSmallHeader(true);
    } else if (window.scrollY <= 100 && isSmallHeader) {
      setIsSmallHeader(false);
    }
  };

  const logo = (
    <img
      src='/images/icons/Oni_w_black.png'
      className={isSmallHeader ? 'logo-small' : 'logo'}
    />
  );

  let mainClassName =
    tab == Pages.Products ? 'nav-bar-main' : 'nav-bar-main with-space';
  if (isSmallHeader) {
    mainClassName = mainClassName + ' small-nav-bar';
  }

  const subNavBar = (
    <div className={mainClassName}>
      <ul>
        <li>
          <Link
            to='/products/macarons'
            className={subTab == ProductPages.Macarons ? 'active' : ''}
          >
            {ProductPages.Macarons}
          </Link>
        </li>
        <li>
          <Link
            to='/products/zephyr'
            className={subTab == ProductPages.Zephyr ? 'active' : ''}
          >
            {ProductPages.Zephyr}
          </Link>
        </li>
        <li>
          <Link
            to='/products/choux'
            className={subTab == ProductPages.Choux ? 'active' : ''}
          >
            {ProductPages.Choux}
          </Link>
        </li>
        <li>
          <Link
            to='/products/cakes'
            className={subTab == ProductPages.Cakes ? 'active' : ''}
          >
            {ProductPages.Cakes}
          </Link>
        </li>
      </ul>
    </div>
  );

  const navBar = (
    <div className={mainClassName}>
      <ul>
        <li>
          <Link
            to='/products/macarons'
            className={tab == Pages.Products ? 'active' : ''}
          >
            {Pages.Products}
          </Link>
        </li>
        <li>
          <Link to='/clients' className={tab == Pages.Clients ? 'active' : ''}>
            {Pages.Clients}
          </Link>
        </li>
        <li className={'logolink'}>
          <Link to='/' className={tab == Pages.Main ? 'active' : ''}>
            {logo}
          </Link>
        </li>
        <li>
          <Link
            to='/delivery'
            className={tab == Pages.Delivery ? 'active' : ''}
          >
            {Pages.Delivery}
          </Link>
        </li>
        <li>
          <Link to='/about' className={tab == Pages.About ? 'active' : ''}>
            {Pages.About}
          </Link>
        </li>
      </ul>
      {tab === Pages.Products && subNavBar}
    </div>
  );

  mainClassName =
    tab == Pages.Products ? 'nav-bar-sub with-nav-bar-space' : 'nav-bar-sub';
  if (isSmallHeader) {
    mainClassName = mainClassName + ' small-sub-nav-bar';
  }

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <>
      {isTabletOrMobile ? (
        <div className='nav-bar'>
          <img
            src='/images/icons/Oni_w_black.png'
            className={tab == Pages.Main ? 'logo' : 'logo logo-small'}
          />
          <Menu
            right
            width={'100%'}
            customBurgerIcon={<img src='/images/icons/menu-button.png' />}
            customCrossIcon={<img src='/images/icons/close.png' />}
          >
            {tab !== Pages.Main ? (
              <span className='menu-item'>
                <Link to='/'>{Pages.Main}</Link>
              </span>
            ) : null}
            <span className='menu-item'>
              <Link
                to='/products/macarons'
                className={tab == Pages.Products ? 'active' : ''}
              >
                {Pages.Products}
              </Link>
            </span>
            <span className='menu-item'>
              <Link
                to='/clients'
                className={tab == Pages.Clients ? 'active' : ''}
              >
                {Pages.Clients}
              </Link>
            </span>
            <span className='menu-item'>
              <Link
                to='/delivery'
                className={tab == Pages.Delivery ? 'active' : ''}
              >
                {Pages.Delivery}
              </Link>
            </span>
            <span className='menu-item'>
              <Link to='/about' className={tab == Pages.About ? 'active' : ''}>
                {Pages.About}
              </Link>
            </span>
            <div className='bm-socials'>
              <a target='_blank' href='https://www.facebook.com/'>
                <img
                  className='social_network'
                  src='images/icons/facebook.png'
                />
              </a>
              <a target='_blank' href='https://www.instagram.com'>
                <img
                  className='social_network'
                  src='images/icons/instagram.png'
                />
              </a>
              <a target='_blank' href='https://www.telegram.com'>
                <img
                  className='social_network'
                  src='images/icons/twitter.png'
                />
              </a>
            </div>
          </Menu>
        </div>
      ) : (
        <div
          className={
            isSmallHeader
              ? tab === Pages.Products
                ? 'nav-bar small-nav-bar-container-with-subbar'
                : 'nav-bar small-nav-bar-container'
              : 'nav-bar'
          }
        >
          {navBar}
        </div>
      )}
    </>
  );
}
