import { Switch, Route, Redirect } from 'react-router-dom';
import { Component } from 'react';
import * as React from 'react';
import MainPage from './pages/MainPage';
import CheckPage from './pages/CheckPage';
import CheckoutPage from './pages/CheckoutPage';
import NotFoundPage from './pages/NotFoundPage';
import { Link } from 'react-router-dom';
import TestComponent from './components/TestComponent';
import scriptLoader from 'react-async-script-loader';
import { DISCOVERY_DOCS, SCOPES, CLIENT_ID, API_KEY, SPREADSHEET_ID } from './config';

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/test'>Test</Link></li>
            </ul>
        </nav>
    </header>
)

const Main = () => (
    <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/check' component={CheckPage} />
        <Route path='/checkOut' component={CheckoutPage} />

        <Route path='/test' component={TestComponent} />
        <Route component={NotFoundPage} />
    </Switch>
)

export interface IAppState {
    isSignedIn?: boolean;
}

class App extends Component<any, IAppState>{
    constructor(props) {
        super(props);

        this.state = {
            isSignedIn: null
        }
    }

    componentWillReceiveProps(nextProps) {
        const { isScriptLoaded } = nextProps;

        if (isScriptLoaded && !this.props.isScriptLoaded) {
            window['gapi'].load('client:auth2', this.initClient);
        }
    }

    initClient = () => {
        window['gapi'].client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
        }).then(() => {
            // this.props.fetchData(SPREADSHEET_ID);
        });
    }

    handleAuthClick = (event) => {
        window['gapi'].auth2.getAuthInstance().signIn();
        this.setState({
            isSignedIn: true
        })
    }

    handleSignoutClick = (event) => {
        window['gapi'].auth2.getAuthInstance().signOut();
        this.setState({
            isSignedIn: false
        })
    }

    render() {
        const { isSignedIn } = this.state;

        return <div>
            <Header />
            <Main />
            <button id="authorize_button" onClick={this.handleAuthClick} style={{ display: isSignedIn ? 'none' : 'block' }}>Authorize</button>
            <button id="signout_button" onClick={this.handleSignoutClick} style={{ display: isSignedIn ? 'block' : 'none' }}>Sign Out</button>
        </div>;
    }
}

export default scriptLoader(
    'https://apis.google.com/js/api.js'
)(App)
