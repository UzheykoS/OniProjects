import { Component } from 'react';
import * as React from 'react'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Payment, OrderType, Check, Dessert, Drink } from '../utils/types';
import { ProcessCheckout, SetPaymentType, SetOrderType, LogData, Cancel } from '../actions';
import { withRouter } from 'react-router-dom'
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { MACARONS_PRICE, ZEPHYR_PRICE, DrinkPricesDict, DrinksDict, CakesPricesDict } from '../utils/dictionaries';
import { DessertType } from '../utils/types';

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

    handleBack = () => {
        this.props.history.push('/check');
        this.props.logData('checkoutPage->back');
    }

    handlePaymentTypeChange = (type: Payment) => {
        this.props.setPaymentType(type);
        this.props.logData('checkoutPage->paymentTypeChanged->' + type);
    }

    handleOrderTypeChange = (type: OrderType) => {
        this.props.setOrderType(type);
        this.props.logData('checkoutPage->orderTypeChanged->' + type);
    }

    calculatePrice() {
        const { check } = this.props;
        let totalPrice = 0;
        check.desserts.forEach((d: Dessert) => {
            switch (d.type) {
                case DessertType.Cake:
                    const cakePrices = CakesPricesDict[d.taste];
                    if (d.size === '18 см') {
                        totalPrice += cakePrices[0];
                    } else if (d.size === '22 см') {
                        totalPrice += cakePrices[1];
                    }
                    break;
                case DessertType.Macaron:
                    totalPrice += MACARONS_PRICE * d.quantity;
                    break;
                case DessertType.Zephyr:
                    totalPrice += ZEPHYR_PRICE * d.quantity;
                    break;
                default:
                    break;
            }
        });

        check.drinks.forEach((d: Drink) => {
            const prices = DrinkPricesDict[d.id];
            if (prices.length === 1) {
                totalPrice += prices[0];
            } else {
                const index = DrinksDict[d.id].findIndex(x => x === d.size);
                totalPrice += prices[index];
            }
        });

        return totalPrice;
    }

    render() {
        const { check } = this.props;

        if (!check) {
            return <div className="container">
                Пожалуйста, создайте сначала чек
            </div>;
        }

        return <div className="container">
            <Card className={'cardContainer'} raised>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        Страница выбора параметров чека
                    </Typography>
                    <Divider />
                    <div className="checkoutControlGroup">
                        Итого: {this.calculatePrice()} грн.
                    </div>
                    <Divider />
                    <div className="checkoutControlGroup">
                        Тип платежа:
                        <FormControlLabel
                            control={
                                <Radio
                                    checked={check.payment === Payment.Card}
                                    onChange={() => this.handlePaymentTypeChange(Payment.Card)}
                                    value={Payment.Card.toString()}
                                />
                            }
                            label="Карта"
                        />
                        <FormControlLabel
                            control={
                                <Radio
                                    checked={check.payment === Payment.Cash}
                                    onChange={() => this.handlePaymentTypeChange(Payment.Cash)}
                                    value={Payment.Cash.toString()}
                                />
                            }
                            label="Наличные"
                        />
                    </div>
                    <Divider />
                    <div className="checkoutControlGroup">
                        Тип заказа:
                        <FormControlLabel
                            control={
                                <Radio
                                    checked={check.type === OrderType.PreOrder}
                                    onChange={() => this.handleOrderTypeChange(OrderType.PreOrder)}
                                    value={OrderType.PreOrder.toString()}
                                />
                            }
                            label="Предзаказ"
                        />
                        <FormControlLabel
                            control={
                                <Radio
                                    checked={check.type === OrderType.Shop}
                                    onChange={() => this.handleOrderTypeChange(OrderType.Shop)}
                                    value={OrderType.Shop.toString()}
                                />
                            }
                            label="Витрина"
                        />
                    </div>
                    <Divider />
                    <div className={'buttonsWraper'}>
                        <Button classes={{ root: 'button' }} variant="contained" color="primary" title="Check Out" onClick={this.handleCheckout}>
                            Продолжить
                        </Button>
                        <Button classes={{ root: 'button' }} variant="contained" color="default" title="Back" onClick={this.handleBack}>
                            Назад
                        </Button>
                        <Button classes={{ root: 'button' }} variant="contained" color="secondary" title="Cancel" onClick={this.handleCancel}>
                            Отмена
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>;
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckoutPage))
