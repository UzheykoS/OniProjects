import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { ProcessFetchData, ProcessAppendData, ProcessUpdateData } from '../actions';
import scriptLoader from 'react-async-script-loader';

var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
var SCOPES = "https://www.googleapis.com/auth/spreadsheets";
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
        fetchData: (url) => dispatch(ProcessFetchData(url)),
        appendData: (url, range, data) => dispatch(ProcessAppendData(url, range, data)),
        updateData: (url, data) => dispatch(ProcessUpdateData(url, data))
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
    appendData?: (url: string, range: string, data: any[]) => void;
    updateData?: (url: string, data: any[]) => void;
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

    handleAppendClick = (event) => {
        const dateTime = new Date();
        const data = [
            ["Item1", "XL", "1", "0", dateTime.toUTCString()]
        ];
        const range = "RawData!A:E";
        this.props.appendData(SPREADSHEET_ID, range, data);
    }

    handleUpdateClick = (event) => {
        const data = [
            ["Item1", "Cost", "Stocked", "Ship Date"],
            ["Wheel1", "$20.50", "4", "3/1/2016"],
            ["Door1", "$15", "2", "3/15/2016"],
            ["Engine1", "$100", "1", "30/20/2016"],
            ["Totals1", "=SUM(B2:B4)", "=SUM(C2:C4)", "=MAX(D2:D4)"]
        ];
        this.props.updateData(SPREADSHEET_ID, data);
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
                <div className="container">
                    <div className="container-child">
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
            <button onClick={this.handleAppendClick} style={{ display: isSignedIn ? 'block' : 'none' }}>Append Data</button>
            <br />
            <button onClick={this.handleUpdateClick} style={{ display: isSignedIn ? 'block' : 'none' }}>Update Data</button>
            <br />
            <button id="authorize_button" onClick={this.handleAuthClick} style={{ display: isSignedIn ? 'none' : 'block' }}>Authorize</button>
            <button id="signout_button" onClick={this.handleSignoutClick} style={{ display: isSignedIn ? 'block' : 'none' }}>Sign Out</button>
        </>;
    }
}

export default scriptLoader(
    'https://apis.google.com/js/api.js'
)(connect(mapStateToProps, mapDispatchToProps)(TestComponent))
