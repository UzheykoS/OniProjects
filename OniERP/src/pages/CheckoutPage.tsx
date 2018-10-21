import { Component } from 'react';
import * as React from 'react'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Payment, OrderType, Check, SaleType } from '../utils/types';
import { ProcessCheckout, SetPaymentType, SetOrderType, LogData, Cancel, SelectSale } from '../actions';
import { withRouter } from 'react-router-dom'
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Helper from '../utils/helper';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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
        selectSale: (sale: SaleType) => dispatch(SelectSale(sale)),
        logData: (text: string) => dispatch(LogData(text)),
        handleCancel: () => dispatch(Cancel())
    };
};

export interface ICheckoutPageProps {
    history?: any;
    check?: Check;

    setPaymentType?: (type: Payment) => void;
    setOrderType?: (type: OrderType) => void;
    selectSale?: (sale: SaleType) => void;
    handleCheckout?: () => void;
    handleCancel?: () => void;
    logData?: (text: string) => void;
}

export class CheckoutPage extends Component<ICheckoutPageProps, any>{
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

    handleSaleSelect = (ev) => {
        const sale = ev.target.value;
        this.props.selectSale(sale);
        this.props.logData('checkoutPage->handleSaleSelect->' + sale);
    }

    calculatePrice() {
        const { check } = this.props;
        return Helper.calculatePrice(check);
    }

    render() {
        const { check } = this.props;

        if (!check) {
            return <div className="container">
                Пожалуйста, создайте сначала чек
            </div>;
        }
        const saleTypes = Helper.getArrayFromEnum(SaleType);

        return <div className="container">
            <Card className={'cardContainer'} raised>
                <CardContent>
                    <Typography gutterBottom variant="title" >
                        Параметры чека
                    </Typography>
                    <Divider />
                    <div className="checkoutControlGroup">
                        <Typography gutterBottom variant="subheading">
                            Итого: {this.calculatePrice()} грн.
                        </Typography>
                    </div>
                    <Divider />
                    <div className="checkoutControlGroup">
                        <Typography gutterBottom variant="subheading">
                            Тип платежа:
                        </Typography>
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
                        <Typography gutterBottom variant="subheading">
                            Тип заказа:
                        </Typography>
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
                    <div className="saleContainer">
                        <Typography gutterBottom variant="subheading" style={{ paddingRight: '2rem' }}>
                            Скидка:
                        </Typography>
                        <FormControl className='partnerSelectWrapper'>
                            <Select
                                value={check.sale}
                                onChange={this.handleSaleSelect}
                                inputProps={{
                                    name: 'sale',
                                    id: 'sale-select',
                                }}
                            >
                                {
                                    saleTypes.map(p => {
                                        return <MenuItem key={p.id} value={p.value}>{p.value}</MenuItem>;
                                    })
                                }
                            </Select>
                        </FormControl>
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
