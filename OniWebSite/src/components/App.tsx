declare var require: any;
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, IndexRedirect, Redirect, browserHistory, hashHistory } from 'react-router';
import { GridLoader } from 'react-spinners';

// import { Cakes } from "./Cakes";
import { Macaroons } from "./Macaroons";
import { About } from "./About";
import { Contacts } from "./Contacts";
// import { Stub } from "./Stub";
import { Main } from "./Main";
import { Bundle } from "./Bundle";
import { preloadImages, loadMainPageImage } from "../Helper"

var loadCakes = require('bundle-loader?lazy&name=[name]!./Cakes');

const CakesWrapper = (props) => (
    <Bundle load={loadCakes}>
        {(Cakes) => <Cakes {...props} />}
    </Bundle>
)

interface IAppState {
    loading?: any;
}

export class App extends React.Component<any, IAppState>{
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        // preloads the rest
        // loadCakes(() => { })
        loadMainPageImage("./images/cake1.jpg").then(() => {
            this.setState({
                loading: false
            });
            preloadImages([
                "./images/cake1.jpg",
                "./images/cake2.jpg",
                "./images/cake3.jpg",
                "./images/cake4.jpg",
                "./images/cake5.jpg",
                "./images/cut1.jpg",
                "./images/cut2.jpg",
                "./images/cut3.jpg",
                "./images/cut4.jpg",
                "./images/cut5.jpg",
                "./images/macaron1.jpg",
                "./images/macaron2.jpg",
                "./images/macaron3.jpg",
                "./images/macaron4.jpg",
                "./images/macaron5.jpg",
                "./images/macaron6.jpg",
                "./images/macaron7.jpg",
                "./images/macaron8.jpg",])
        });
    }

    render() {
        const { loading } = this.state;

        return <div className="app">
            <Router history={hashHistory}>
                <Route exact path="/" component={Main} />
                <Route path="about" component={About} />
                <Route path="cakes" component={CakesWrapper} />
                <Route path="macaroons" component={Macaroons} />
                {/* <Route path="stub/:id" component={Stub} /> */}
                <Route path="contacts" component={Contacts} />
            </Router>
            <div className={"busy-container" + (loading ? "" : " invisible")}>
                <div className="busy">
                <GridLoader
                    color={'#d0006f'}
                    loading={loading}
                />
            </div>
            </div>
        </div>;
    }
};