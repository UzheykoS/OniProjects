declare var require: any;
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { GridLoader } from 'react-spinners';

const api = {
    "web":
    {
        "client_id":"33106821238-ivfuqpga4eouo8528gs7plngcrqcjsaa.apps.googleusercontent.com",
        "project_id":"metal-arc-206715",
        "auth_uri":"https://accounts.google.com/o/oauth2/auth",
        "token_uri":"https://accounts.google.com/o/oauth2/token",
        "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
        "client_secret":"UhwqorXD5Bj50eTPaE4VWW4N",
        "redirect_uris":["http://127.0.0.1:9040/oauthcallback"],
        "javascript_origins":["http://127.0.0.1:9040"]
    }
};

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

    render() {
        const { loading } = this.state;

        return <div className="app">
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