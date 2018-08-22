import { Component } from 'react';
import * as React from 'react'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Payment, OrderType, Check } from '../utils/types';
import { ProcessCheckout, SetPaymentType, SetOrderType, LogData, Cancel } from '../actions';
import { withRouter } from 'react-router-dom'
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const mapStateToProps = (state) => {
    return {
        check: state.check
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleCheckout: () => dispatch(ProcessCheckout()),
        setPaymentType: (type: Payment) => dispatch(SetPaymentType(type)),
        setOrderType: (type: OrderType) => dispatch(SetOrderType(type)),
        logData: (text: string) => dispatch(LogData(text)),
        handleCancel: () => dispatch(Cancel())
    };
};

export interface ICheckoutPageProps {
    history?: any;
    check?: Check;

    setPaymentType?: (type: Payment) => void;
    setOrderType?: (type: OrderType) => void;
    handleCheckout?: () => void;
    handleCancel?: () => void;
    logData?: (text: string) => void;
}

class CheckoutPage extends Component<ICheckoutPageProps, any>{
    handleCheckout = () => {
        this.props.handleCheckout();
        this.props.history.push('/');
        this.props.logData('checkoutPage->checkout');
    }

    handleCancel = () => {
        this.props.handleCancel();
        this.props.history.push('/');
        this.props.logData('checkoutPage->cancel');
    }

    handlePaymentTypeChange = (type: Payment) => {
        this.props.setPaymentType(type);
        this.props.logData('checkoutPage->paymentTypeChanged->' + type);
    }

    handleOrderTypeChange = (type: OrderType) => {
        this.props.setOrderType(type);
        this.props.logData('checkoutPage->orderTypeChanged->' + type);
    }

    render() {
        const { check } = this.props;

        if (!check) {
            return <div className="container">
                Please create new check first
            </div>;
        }

        return <div className="container">
            Check out Page
            <Divider />
            <div>
                Payment Type:
                <FormControlLabel
                    control={
                        <Radio
                            checked={check.payment === Payment.Card}
                            onChange={() => this.handlePaymentTypeChange(Payment.Card)}
                            value={Payment.Card.toString()}
                        />
                    }
                    label="Card"
                />
                <FormControlLabel
                    control={
                        <Radio
                            checked={check.payment === Payment.Cash}
                            onChange={() => this.handlePaymentTypeChange(Payment.Cash)}
                            value={Payment.Cash.toString()}
                        />
                    }
                    label="Cash"
                />
            </div>
            <Divider />
            <div>
                Order Type:
                <FormControlLabel
                    control={
                        <Radio
                            checked={check.type === OrderType.PreOrder}
                            onChange={() => this.handleOrderTypeChange(OrderType.PreOrder)}
                            value={OrderType.PreOrder.toString()}
                        />
                    }
                    label="Pre Order"
                />
                <FormControlLabel
                    control={
                        <Radio
                            checked={check.type === OrderType.Shop}
                            onChange={() => this.handleOrderTypeChange(OrderType.Shop)}
                            value={OrderType.Shop.toString()}
                        />
                    }
                    label="Shop"
                />
            </div>
            <Divider />
            <Button variant="contained" color="primary" title="Check Out" onClick={this.handleCheckout}>
                Check Out
            </Button>
            <Button variant="contained" color="secondary" title="Cancel" onClick={this.handleCancel}>
                Cancel
            </Button>
        </div>;
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckoutPage))
