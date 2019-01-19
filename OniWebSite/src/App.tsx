import * as React from 'react';
import { Switch, Route } from 'react-router';

import { Cakes } from './pages/Cakes';
import { Macarons } from './pages/Macarons';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import { Stub } from './pages/Stub';
import { Main } from './pages/Main';
import { Bundle } from './components/Bundle';

var loadCakes = require('bundle-loader?lazy&name=[name]!./pages/Cakes');

const CakesWrapper = (props) => (
    <Bundle load={loadCakes}>
        {() => <Cakes {...props} />}
    </Bundle>
)

export class App extends React.Component<any, any>{

    render() {
        return <div className='app'>
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/about' component={About} />
                <Route path='/cakes' component={CakesWrapper} />
                <Route path='/macarons' component={Macarons} />
                <Route path='/stub/:id' component={Stub} />
                <Route path='/contacts' component={Contacts} />
            </Switch>
        </div>;
    }
};