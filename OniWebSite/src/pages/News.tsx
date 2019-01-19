import * as React from 'react';
import { Nav } from '../components/Nav';
import { Tabs } from '../utils/Helper'
import { Busy } from '../components/Busy';
import { Footer } from '../components/Footer';

interface INewsState {
    loading?: boolean;
}

export class News extends React.Component<any, INewsState>{
    constructor(props) {
        super(props);

        this.state = {
            loading: false
        }
    }

    render() {
        const { loading } = this.state;

        return <div className='news-container'>
            <Nav tab={Tabs.News} />
            NEWS
            <Footer />
            <Busy loading={loading} />
        </div>;
    }
};