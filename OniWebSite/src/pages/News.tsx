import * as React from 'react';
import { Nav } from '../components/Nav';
import { Tabs } from '../utils/Helper'
import { Busy } from '../components/Busy';
import { Footer } from '../components/Footer';
const Instafeed = require('instafeed.js');
const keys = require('../../config/keys');

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

    componentDidMount() {
        var userFeed = new Instafeed({
            get: 'user',
            userId: keys.userId,
            clientId: keys.clientId,
            accessToken: keys.accessToken,
            resolution: 'standard_resolution',
            template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
            sortBy: 'most-recent',
            limit: 20,
            links: false
          });
          userFeed.run();
    }

    render() {
        const { loading } = this.state;

        return <div className='news-container'>
            <Nav tab={Tabs.News} />
            <div id='instafeed'></div>
            <Footer />
            <Busy loading={loading} />
        </div>;
    }
};