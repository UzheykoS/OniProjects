import { Switch, Route, Redirect } from 'react-router-dom';
import { Component } from 'react';
import * as React from 'react';
import MainPage from './pages/MainPage';
import CheckPage from './pages/CheckPage';
import CheckoutPage from './pages/CheckoutPage';
import NotFoundPage from './pages/NotFoundPage';
import TestComponent from './components/TestComponent';
import scriptLoader from 'react-async-script-loader';
import { DISCOVERY_DOCS, SCOPES, CLIENT_ID, API_KEY, SPREADSHEET_ID } from './config';
import AppBar from './components/AppBar';

const Main = () => (
    <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/check' component={CheckPage} />
        <Route path='/checkOut' component={CheckoutPage} />

        <Route path='/test' component={TestComponent} />
        <Route component={NotFoundPage} />
    </Switch>
)

export interface IAppProps {
    isScriptLoaded?: boolean;
}

export interface IAppState {
    isSignedIn?: boolean;
}

class App extends Component<IAppProps, IAppState>{
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
        // const auth2 = window['gapi'].auth2.init({
        //     client_id: CLIENT_ID,
        //     scope: SCOPES,
        //     discoveryDocs: DISCOVERY_DOCS,
        //     apiKey: API_KEY,
        // });
        // auth2.isSignedIn.listen(this.signinChanged);

        window['gapi'].client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
        }).then(() => {
            window['gapi'].auth2.getAuthInstance().isSignedIn.listen(this.signinChanged);
            this.setState({
                isSignedIn: window['gapi'].auth2.getAuthInstance().isSignedIn.get()
            });
            // this.props.fetchData(SPREADSHEET_ID);
        });
    }

    signinChanged = (isSignedIn) => {
        this.setState({
            isSignedIn: isSignedIn
        });
    }

    handleAuthClick = () => {
        window['gapi'].auth2.getAuthInstance().signIn();
    }

    handleSignoutClick = () => {
        window['gapi'].auth2.getAuthInstance().signOut();
    }

    isSignedIn = () => {
        if (!window['gapi'] || !window['gapi'].auth2 || !window['gapi'].auth2.getAuthInstance()) {
            return false;
        }
        return window['gapi'].auth2.getAuthInstance().isSignedIn.get();
    }

    render() {
        const { isSignedIn } = this.state;

        return <>
            <AppBar title={'Главная'} isSignedIn={isSignedIn} onLoginClick={this.handleAuthClick} onLogoutClick={this.handleSignoutClick} />
            <Main />
            {/* <button id="authorize_button" onClick={this.handleAuthClick} style={{ display: isSignedIn ? 'none' : 'block' }}>Authorize</button>
            <button id="signout_button" onClick={this.handleSignoutClick} style={{ display: isSignedIn ? 'block' : 'none' }}>Sign Out</button> */}
        </>;
    }
}

export default scriptLoader(
    'https://apis.google.com/js/api.js'
)(App);
