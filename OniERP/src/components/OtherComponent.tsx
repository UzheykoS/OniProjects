import { Component } from 'react';
import * as React from 'react'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { PaymentTypeEnum } from '../utils/types';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { ProcessOtherPaymentSubmit } from '../actions'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Helper from '../utils/helper';

const mapStateToProps = (state) => {
    return {
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        processOtherPaymentSubmit: (paymentType: PaymentTypeEnum, price: number, notes: string) => dispatch(ProcessOtherPaymentSubmit(paymentType, price, notes))
    };
};

export interface IOtherComponentProps {
    history?: any;
    processOtherPaymentSubmit?: (paymentType: PaymentTypeEnum, price: number, notes: string) => void;
}

export interface IOtherComponentState {
    paymentType?: PaymentTypeEnum;
    price?: string;
    notes?: string;
}

class OtherComponent extends Component<IOtherComponentProps, IOtherComponentState>{
    constructor(props) {
        super(props);

        this.state = {
            paymentType: PaymentTypeEnum.Other,
            price: '',
            notes: ''
        }
    }

    handlePaymentTypeSelect = (ev) => {
        const paymentType = ev.target.value;
        this.setState({ paymentType });
    }

    handlePriceChange = (ev) => {
        this.setState({
            price: ev.target.value
        });
    }

    handleNotesChange = (ev) => {
        this.setState({
            notes: ev.target.value
        });
    }

    handleNextClick = () => {
        const { processOtherPaymentSubmit, history } = this.props;
        const { paymentType, price, notes } = this.state;
        processOtherPaymentSubmit(paymentType, Number(price), notes);
        history.push('/');
    }

    render() {
        const { paymentType, price, notes } = this.state;
        const paymentTypes = Helper.getArrayFromEnum(PaymentTypeEnum);

        return <div>
            <Typography gutterBottom variant="headline" component="h2">
                Другие расходы
            </Typography>
            <FormControl className='partnerSelectWrapper'>
                <InputLabel htmlFor="partner-select">Вид расходов</InputLabel>
                <Select
                    value={paymentType}
                    onChange={this.handlePaymentTypeSelect}
                    inputProps={{
                        name: 'partner',
                        id: 'partner-select',
                    }}
                >
                    {
                        paymentTypes.map(p => {
                            return <MenuItem key={p.id} value={p.value}>{p.value}</MenuItem>;
                        })
                    }
                </Select>
            </FormControl>
            <TextField
                label="Сумма"
                value={price}
                onChange={this.handlePriceChange}
                type="number"
                InputLabelProps={{
                    shrink: true
                }}
                margin="normal"
                fullWidth
                disabled={!paymentType}
                placeholder="Введите сумму"
            />
            <TextField
                label="Заметки"
                value={notes}
                onChange={this.handleNotesChange}
                InputLabelProps={{
                    shrink: true
                }}
                margin="normal"
                fullWidth
                multiline
            />
            <div className={'buttonsWraper'}>
                <Button
                    disabled={!paymentType}
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
    (OtherComponent));
