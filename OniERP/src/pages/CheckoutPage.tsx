import { Component } from 'react';
import * as React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CheckoutComponent from '../components/CheckoutComponent';

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export class CheckoutPage extends Component<any, any>{
    render() {
        return <div className="container">
            <Card className={'cardContainer'} raised>
                <CardContent>
                    <CheckoutComponent />
                </CardContent>
            </Card>
        </div>;
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckoutPage))
