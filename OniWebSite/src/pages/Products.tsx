import React from 'react';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { Pages } from '@constants/routes';

export function Products() {
  return (
    <div className='products-container'>
      <Nav tab={Pages.Products} />
      Products
      <Footer />
    </div>
  );
}
