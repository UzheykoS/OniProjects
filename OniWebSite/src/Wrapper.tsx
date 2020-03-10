import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { CorporateClients } from './pages/CorporateClients';
import { DeliveryAndPayment } from './pages/DeliveryAndPayment';
import { About } from './pages/About';
import { Cakes } from './pages/products/Cakes';
import { Macarons } from './pages/products/Macarons';
import { Choux } from './pages/products/Choux';
import { Zephyr } from './pages/products/Zephyr';
import { Main } from '@pages/Main';
import { AppStyled } from '@styles/styled';
import { NavBar } from '@components/NavBar';
import { Footer } from '@components/Footer';
import { useLoading } from '@hooks/useLoading';
import { Busy } from '@common/Busy';
import NotFoundPage from '@pages/NotFound';
import { ProductsNavBar } from '@components/ProductsNavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Checkout } from '@pages/Checkout';

export function Wrapper() {
  const { loading } = useLoading();
  return (
    <AppStyled>
      <Router>
        <NavBar />
        <ProductsNavBar />
        <Switch>
          <Route
            exact
            path='/products'
            component={() => <Redirect to='/products/macarons' />}
          />
          <Route path='/clients' component={CorporateClients} />
          <Route exact path='/' component={Main} />
          <Route path='/delivery' component={DeliveryAndPayment} />
          <Route path='/about' component={About} />
          <Route path='/checkout' component={Checkout} />

          <Route path='/products/macarons' component={Macarons} />
          <Route path='/products/zephyr' component={Zephyr} />
          <Route path='/products/cakes' component={Cakes} />
          <Route path='/products/choux' component={Choux} />
          <Route path='/404' component={NotFoundPage} />
          <Route path='*' component={() => <Redirect to='/404' />} />
        </Switch>
        <Footer />
        <Busy loading={loading} />
      </Router>
    </AppStyled>
  );
}