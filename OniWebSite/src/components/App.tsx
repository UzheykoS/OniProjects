declare var require: any;
import * as React from 'react';
import { Switch, Route, hashHistory } from 'react-router';

import { Cakes } from "./Cakes";
import { Macaroons } from "./Macaroons";
import { About } from "./About";
import { Contacts } from "./Contacts";
import { Stub } from "./Stub";
import { Main } from "./Main";
import { Bundle } from "./Bundle";

var loadCakes = require('bundle-loader?lazy&name=[name]!./Cakes');

const CakesWrapper = (props) => (
    <Bundle load={loadCakes}>
        {() => <Cakes {...props} />}
    </Bundle>
)

export class App extends React.Component<any, any>{

    render() {
        return <div className="app">
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/about" component={About} />
                <Route path="/cakes" component={CakesWrapper} />
                <Route path="/macaroons" component={Macaroons} />
                <Route path="/stub/:id" component={Stub} />
                <Route path="/contacts" component={Contacts} />
            </Switch>
        </div>;
    }
};