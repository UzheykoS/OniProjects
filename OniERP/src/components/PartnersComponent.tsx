import { Component } from 'react';
import * as React from 'react'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { PartnersEnum } from '../utils/types';
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
        processPartnersOrderSubmit: (partner: string, macQty: number, zepQty: number) => dispatch(ProcessPartnersOrderSubmit(partner, macQty, zepQty))
    };
};

export interface IPartnersComponentProps {
    history?: any;
    processPartnersOrderSubmit?: (partner: string, macQty: number, zepQty: number) => void;
}

export interface IPartnersComponentState {
    partner?: string;
    macaronsQty?: string;
    zephyrQty?: string;
}

class PartnersComponent extends Component<IPartnersComponentProps, IPartnersComponentState>{
    constructor(props) {
        super(props);

        this.state = {
            partner: '',
            macaronsQty: '',
            zephyrQty: ''
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

    handleNextClick = () => {
        const { processPartnersOrderSubmit, history } = this.props;
        const { partner, macaronsQty, zephyrQty} = this.state;
        processPartnersOrderSubmit(partner, Number(macaronsQty), Number(zephyrQty));
        history.push('/');
    }

    calculateTotalPrice() {
        const { partner, macaronsQty, zephyrQty } = this.state;
        let totalPrice = 0;
        if (!partner) {
            return totalPrice;
        }

        const macaronPrice = CaffeePrices[partner];
        totalPrice += Number(macaronsQty) * macaronPrice;

        totalPrice += ZEPHYR_PARTNERS_PRICE * Number(zephyrQty);

        return totalPrice;
    }

    render() {
        const { partner, macaronsQty, zephyrQty } = this.state;
        const partners = Helper.getArrayFromEnum(PartnersEnum);

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
                    disabled={!partner}
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
