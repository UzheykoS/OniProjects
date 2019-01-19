import * as React from 'react';
import { Nav } from '../components/Nav';
import { Tabs } from '../utils/Helper'
import { Busy } from '../components/Busy';
import { Footer } from '../components/Footer';

interface ICorporateClientsState {
    loading?: boolean;
}

export class CorporateClients extends React.Component<any, ICorporateClientsState>{
    constructor(props) {
        super(props);

        this.state = {
            loading: false
        }
    }

    render() {
        const { loading } = this.state;

        return <div className='clients-container'>
            <Nav tab={Tabs.CorporateClients} />
            CorporateClients
            <Footer />
            <Busy loading={loading} />
        </div>;
    }
};