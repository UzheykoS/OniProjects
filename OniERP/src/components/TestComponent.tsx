import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { ProcessFetchData, ProcessFetchDataFake } from '../actions';
import scriptLoader from 'react-async-script-loader';

var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";
const CLIENT_ID = '842417198767-7k42pt9ecgtu5f7oopng1oqu3a79i5i9.apps.googleusercontent.com';
const API_KEY = 'AIzaSyAlI5i8OOtw8aEEMS48E9pouEptq8tEg2M';
const SPREADSHEET_ID = '1ObMh87dNmizXbdWkH9TiqfrCfApk_rqxPGuQ_zNgJIM';

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.hasErrored,
        isLoading: state.isLoading,
        label: state.label
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(ProcessFetchData(url))
    };
};

export interface ITestComponentProps {
    label?: string;
    items?: any;
    hasErrored?: boolean;
    isLoading?: boolean;

    isScriptLoaded?: boolean;
    isScriptLoadSucceed?: boolean;

    fetchData?: (url: string) => void;
}

export interface ITestComponentState {
    isSignedIn?: boolean;
}

class TestComponent extends Component<ITestComponentProps, ITestComponentState>{
    constructor(props) {
        super(props);

        this.state = {
            isSignedIn: null
        }
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
            this.props.fetchData(SPREADSHEET_ID);
        });
    }

    componentDidMount() {
        // this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    }

    render() {
        const { label, hasErrored, isLoading, items } = this.props;
        const { isSignedIn } = this.state;

        let result;
        if (hasErrored) {
            result = <p>Sorry! There was an error loading the items</p>;
        }
        if (isLoading) {
            result = <p>Loading…</p>;
        }
        else {
            result = <>
                <div className="hello-world">
                    <div className="hello-world-child">
                        {label}
                    </div>
                </div>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            {item[0] + item[1]}
                        </li>
                    ))}
                </ul>
            </>;
        }

        return <>
            {result}
            <button id="authorize_button" onClick={this.handleAuthClick} style={{ display: isSignedIn ? 'none' : 'block' }}>Authorize</button>
            <button id="signout_button" onClick={this.handleSignoutClick} style={{ display: isSignedIn ? 'block' : 'none' }}>Sign Out</button>
        </>;
    }
}

export default scriptLoader(
    'https://apis.google.com/js/api.js'
)(connect(mapStateToProps, mapDispatchToProps)(TestComponent))
