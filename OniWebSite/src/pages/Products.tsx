import * as React from 'react';
import { Nav } from '../components/Nav';
import { Tabs } from '../utils/Helper'
import { Busy } from '../components/Busy';
import { Footer } from '../components/Footer';

interface IProductsState {
    loading?: boolean;
}

export class Products extends React.Component<any, IProductsState>{
    constructor(props) {
        super(props);

        this.state = {
            loading: false
        }
    }

    render() {
        const { loading } = this.state;

        return <div className='products-container'>
            <Nav tab={Tabs.Products} />
            Products
            <Footer />
            <Busy loading={loading} />
        </div>;
    }
};