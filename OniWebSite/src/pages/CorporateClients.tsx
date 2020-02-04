import React from 'react';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { Pages } from '@constants/routes';

export function CorporateClients() {
  return (
    <div>
      <Nav tab={Pages.Clients} />
      CorporateClients
      <Footer />
    </div>
  );
}
