import { Component } from 'react';
import * as React from 'react'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { PartnersEnum, Payment } from '../utils/types';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { ProcessPartnersOrderSubmit } from '../actions'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import { CaffeePrices, ZEPHYR_PARTNERS_PRICE } from '../utils/dictionaries';
import Helper from '../utils/helper';

const mapStateToProps = (state) => {
    return {
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        processPartnersOrderSubmit: (partner: string, macQty: number, zepQty: number, buyer?: string, macaronsPrice?: number, zephyrPrice?: number, payment?: Payment) =>
            dispatch(ProcessPartnersOrderSubmit(partner, macQty, zepQty, buyer, macaronsPrice, zephyrPrice, payment))
    };
};

export interface IPartnersComponentProps {
    history?: any;
    processPartnersOrderSubmit?: (partner: string,
        macQty: number,
        zepQty: number,
        buyer?: string,
        macaronsPrice?: number,
        zephyrPrice?: number,
        payment?: Payment) => void;
}

export interface IPartnersComponentState {
    partner?: string;
    macaronsQty?: string;
    zephyrQty?: string;
    buyer?: string;
    macaronsPrice?: string;
    zephyrPrice?: string;
    payment?: Payment;
}

class PartnersComponent extends Component<IPartnersComponentProps, IPartnersComponentState>{
    constructor(props) {
        super(props);

        this.state = {
            partner: '',
            macaronsQty: '',
            zephyrQty: '',
            buyer: '',
            macaronsPrice: '',
            zephyrPrice: '',
            payment: Payment.Card
        }
    }

    handlePartnerSelect = (ev) => {
        const partner = ev.target.value;
        this.setState({ partner });
    }

    handleMacaronsQtyChange = (ev) => {
        this.setState({
            macaronsQty: ev.target.value
        });
    }

    handleZephyrQtyChange = (ev) => {
        this.setState({
            zephyrQty: ev.target.value
        });
    }

    handleBuyerChange = (ev) => {
        this.setState({
            buyer: ev.target.value
        });
    }

    handleMacaronPriceChange = (ev) => {
        this.setState({
            macaronsPrice: ev.target.value
        });
    }
    handleZephyrPriceChange = (ev) => {
        this.setState({
            zephyrPrice: ev.target.value
        });
    }

    handlePaymentSelect = (ev) => {
        const payment = ev.target.value;
        this.setState({ payment });
    }

    handleNextClick = () => {
        const { processPartnersOrderSubmit, history } = this.props;
        const { partner, macaronsQty, zephyrQty, buyer, macaronsPrice, zephyrPrice, payment } = this.state;
        processPartnersOrderSubmit(partner,
            Number(macaronsQty),
            Number(zephyrQty),
            buyer,
            Number(macaronsPrice),
            Number(zephyrPrice),
            payment);
        history.push('/');
    }

    calculateTotalPrice() {
        const { partner, macaronsQty, zephyrQty, buyer, macaronsPrice, zephyrPrice } = this.state;
        let totalPrice = 0;
        if (!partner || partner === PartnersEnum.Other && !buyer) {
            return totalPrice;
        }

        if (!buyer) {
            const macaronPrice = CaffeePrices[partner];
            totalPrice += Number(macaronsQty) * macaronPrice;
            totalPrice += ZEPHYR_PARTNERS_PRICE * Number(zephyrQty);
            return totalPrice;
        }

        if (macaronsQty && macaronsPrice) {
            totalPrice += Number(macaronsQty) * Number(macaronsPrice);
        };
        if (zephyrQty && zephyrPrice) {
            totalPrice += Number(zephyrQty) * Number(zephyrPrice);
        };
        return totalPrice;
    }

    render() {
        const { partner, macaronsQty, zephyrQty, buyer, macaronsPrice, zephyrPrice, payment } = this.state;
        const partners = Helper.getArrayFromEnum(PartnersEnum);
        const submitEnabled = (!!partner && partner !== PartnersEnum.Other) ||
            (partner && buyer && (macaronsPrice || zephyrPrice) && (macaronsQty || zephyrQty));
        const payments = Helper.getArrayFromEnum(Payment);

        return <div>
            <Typography gutterBottom variant="headline" component="h2">
                Оптовый заказ
            </Typography>
            <FormControl className='partnerSelectWrapper'>
                <InputLabel htmlFor="partner-select">Кофейня</InputLabel>
                <Select
                    value={partner}
                    onChange={this.handlePartnerSelect}
                    inputProps={{
                        name: 'partner',
                        id: 'partner-select',
                    }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {
                        partners.map(p => {
                            return <MenuItem key={p.id} value={p.value}>{p.value}</MenuItem>;
                        })
                    }
                </Select>
            </FormControl>
            {
                partner === PartnersEnum.Other && <TextField
                    label="Покупатель"
                    value={buyer}
                    onChange={this.handleBuyerChange}
                    InputLabelProps={{
                        shrink: true
                    }}
                    margin="normal"
                    fullWidth
                    disabled={!partner}
                    placeholder="Введите имя покупателя"
                />
            }
            {
                partner === PartnersEnum.Other && <TextField
                    label="Цена макаронс"
                    value={macaronsPrice}
                    onChange={this.handleMacaronPriceChange}
                    type="number"
                    InputLabelProps={{
                        shrink: true
                    }}
                    margin="normal"
                    fullWidth
                    disabled={!partner}
                    placeholder="Введите цену макаронс"
                />
            }            
            <TextField
                label="Макароны"
                value={macaronsQty}
                onChange={this.handleMacaronsQtyChange}
                type="number"
                InputLabelProps={{
                    shrink: true
                }}
                margin="normal"
                fullWidth
                disabled={!partner}
                placeholder="Введите количество макаронс"
            />
            {
                partner === PartnersEnum.Other && <TextField
                    label="Цена зефира"
                    value={zephyrPrice}
                    onChange={this.handleZephyrPriceChange}
                    type="number"
                    InputLabelProps={{
                        shrink: true
                    }}
                    margin="normal"
                    fullWidth
                    disabled={!partner}
                    placeholder="Введите цену зефира"
                />
            }
            <TextField
                label="Зефир"
                value={zephyrQty}
                onChange={this.handleZephyrQtyChange}
                type="number"
                InputLabelProps={{
                    shrink: true
                }}
                margin="normal"
                fullWidth
                disabled={!partner}
                placeholder="Введите количество зефира"
            />
            <FormControl className='partnerSelectWrapper'>
                <InputLabel htmlFor="partner-select">Тип оплаты</InputLabel>
                <Select
                    value={payment}
                    onChange={this.handlePaymentSelect}
                    inputProps={{
                        name: 'payment-type',
                        id: 'payment-type-select',
                    }}
                >
                    {
                        payments.map(p => {
                            return <MenuItem key={p.id} value={p.value}>{p.value}</MenuItem>;
                        })
                    }
                </Select>
            </FormControl>
            <Divider />
            <TextField
                label="Итого"
                value={`${this.calculateTotalPrice()} грн.`}
                InputLabelProps={{
                    shrink: true
                }}
                margin="normal"
                fullWidth
            />
            <div className={'buttonsWraper'}>
                <Button
                    disabled={!submitEnabled}
                    variant="contained"
                    size="large"
                    color="primary"
                    onClick={this.handleNextClick}
                >
                    Готово
                </Button>
            </div>
        </div>;
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)
    (PartnersComponent));
