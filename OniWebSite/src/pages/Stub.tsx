import * as React from 'react'
import { Nav } from '../components/Nav';
import { Tabs } from '../utils/Helper'
import { Footer } from '../components/Footer';

export class Stub extends React.Component<any, any>{
    render() {
        const { match } = this.props;

        return (
            <div>
                <Nav tab={Tabs.CorporateClients}/>
                Stub for {match.params.id}
                <Footer />
            </div>
        );
    }
};