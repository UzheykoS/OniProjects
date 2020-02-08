import React from 'react';
import { Switch, Route } from 'react-router';

import { Products } from './pages/Products';
import { CorporateClients } from './pages/CorporateClients';
import { DeliveryAndPayment } from './pages/DeliveryAndPayment';
import { About } from './pages/About';

import { Cakes } from './pages/products/Cakes';
import { Macarons } from './pages/products/Macarons';
import { Choux } from './pages/products/Choux';
import { Zephyr } from './pages/products/Zephyr';
import { Main } from '@pages/Main';
import { hot } from 'react-hot-loader';
import { AppStyled } from '@styles/styled';
import { NavBar } from '@components/NavBar';

@hot(module)
export class App extends React.Component<any, any> {
  render() {
    return (
      <AppStyled>
         <NavBar />
        <Switch>
          <Route exact path='/products' component={Products} />
          <Route path='/clients' component={CorporateClients} />
          <Route exact path='/' component={Main} />
          <Route path='/delivery' component={DeliveryAndPayment} />
          <Route path='/about' component={About} />

          <Route path='/products/macarons' component={Macarons} />
          <Route path='/products/zephyr' component={Zephyr} />
          <Route path='/products/cakes' component={Cakes} />
          <Route path='/products/choux' component={Choux} />
        </Switch>
      </AppStyled>
    );
  }
}
