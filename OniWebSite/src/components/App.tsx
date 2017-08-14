declare var require: any;
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, IndexRedirect, Redirect, browserHistory, hashHistory } from 'react-router';

// import { Cakes } from "./Cakes";
import { Macaroons } from "./Macaroons";
import { About } from "./About";
import { Contacts } from "./Contacts";
import { Stub } from "./Stub";
import { Main } from "./Main";
import { Bundle } from "./Bundle";

var loadCakes = require('bundle-loader?lazy&name=[name]!./Cakes');

const CakesWrapper = (props) => (
    <Bundle load={loadCakes}>
        {(Cakes) => <Cakes {...props} />}
    </Bundle>
)

export class App extends React.Component<any, any>{
    preloadImages(urls: string[]) {
        urls.forEach(url => {
            let img = new Image();
            img.src = url;
        });
    }

    componentDidMount() {
        // preloads the rest
        // loadCakes(() => { })
        this.preloadImages(["./images/cake1_b.jpg"]);
    }

    render() {
        return <div className="app">
            <Router history={hashHistory}>
                <Route exact path="/" component={Main} />
                <Route path="about" component={About} />
                <Route path="cakes" component={CakesWrapper} />
                <Route path="macaroons" component={Macaroons} />
                <Route path="stub/:id" component={Stub} />
                <Route path="contacts" component={Contacts} />
            </Router>
        </div>;
    }
};