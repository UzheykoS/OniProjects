import { Component } from 'react';
import * as React from 'react'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Payment } from '../utils/types';
import { ProcessCheckout} from '../actions';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleCheckout: (type) => dispatch(ProcessCheckout(type))
    };
};

export interface ICheckoutPageProps {
    history?: any;

    handleCheckout?: (type: Payment) => void;
}

class CheckoutPage extends Component<ICheckoutPageProps, any>{
    handleCheckout = (type) => {
        this.props.handleCheckout(type);
        this.props.history.push('/');
    }

    render() {
        const { } = this.props;

        return <div className="container">
            Check out Page
            <br/>
            <Button variant="contained" color="primary" title="Pay By Check" onClick={() => this.handleCheckout(Payment.Cash)}>
                Pay By Check
            </Button>
            <br/>
            <Button variant="contained" color="primary" title="Pay By Card" onClick={() => this.handleCheckout(Payment.Card)}>
                Pay By Card
            </Button>
        </div>;
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckoutPage))
