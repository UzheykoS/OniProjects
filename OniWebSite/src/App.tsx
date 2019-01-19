import * as React from 'react';
import { Switch, Route } from 'react-router';

import { Main } from './pages/Main';
import { Products } from './pages/Products';
import { CorporateClients } from './pages/CorporateClients';
import { DeliveryAndPayment } from './pages/DeliveryAndPayment';
import { About } from './pages/About';
import { News } from './pages/News';

import { Cakes } from './pages/products/Cakes';
import { Macarons } from './pages/products/Macarons';

import { Stub } from './pages/Stub';
import { Bundle } from './components/Bundle';

var loadCakes = require('bundle-loader?lazy&name=[name]!./pages/products/Cakes');

const CakesWrapper = (props) => (
    <Bundle load={loadCakes}>
        {() => <Cakes {...props} />}
    </Bundle>
)

export class App extends React.Component<any, any>{

    render() {
        return <div className='app'>
            <Switch>
                <Route exact path='/products' component={Products} />
                <Route path='/clients' component={CorporateClients} />
                <Route exact path='/' component={Main} />
                <Route path='/delivery' component={DeliveryAndPayment} />
                <Route path='/about' component={About} />
                <Route path='/news' component={News} />

                <Route path='/products/macarons' component={Macarons} />
                <Route path='/products/zephyr' component={CakesWrapper} />
                <Route path='/products/cakes' component={CakesWrapper} />
                <Route path='/products/choux' component={CakesWrapper} />
            </Switch>
        </div>;
    }
};