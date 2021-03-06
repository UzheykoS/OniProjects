﻿import { Component } from 'react';
import * as React from 'react';
import Button from '@material-ui/core/Button';
import { PaymentTypeEnum, Payment } from '../utils/types';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Helper from '../utils/helper';
import { useStore } from '../hooks';

export interface IOtherComponentProps {}

export interface IOtherComponentState {
  paymentType: PaymentTypeEnum;
  payment: Payment;
  price: string;
  notes: string;
}

class OtherComponent extends Component<
  IOtherComponentProps,
  IOtherComponentState
> {
  constructor(props) {
    super(props);

    this.state = {
      paymentType: PaymentTypeEnum.Other,
      payment: Payment.Cash,
      price: '',
      notes: '',
    };
  }

  handlePaymentTypeSelect = ev => {
    const paymentType = ev.target.value;
    this.setState({ paymentType });
  };

  handlePaymentSelect = ev => {
    const payment = ev.target.value;
    this.setState({ payment });
  };

  handlePriceChange = ev => {
    this.setState({
      price: ev.target.value,
    });
  };

  handleNotesChange = ev => {
    this.setState({
      notes: ev.target.value,
    });
  };

  handleNextClick = () => {
    const { paymentType, price, notes, payment } = this.state;
    const { app, router } = useStore();
    app.otherPayment({
      notes,
      payment,
      paymentType,
      price: Number(price),
    });
    router.push('/');
  };

  render() {
    const { paymentType, price, notes, payment } = this.state;
    const paymentTypes = Helper.getArrayFromEnum(PaymentTypeEnum);
    const payments = Helper.getArrayFromEnum(Payment);

    return (
      <div>
        <Typography gutterBottom variant='headline' component='h2'>
          Другие расходы
        </Typography>
        <FormControl className='partnerSelectWrapper'>
          <InputLabel htmlFor='partner-select'>Вид расходов</InputLabel>
          <Select
            value={paymentType}
            onChange={this.handlePaymentTypeSelect}
            inputProps={{
              name: 'partner',
              id: 'partner-select',
            }}
          >
            {paymentTypes.map(p => {
              return (
                <MenuItem key={p.id} value={p.value}>
                  {p.value}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl className='partnerSelectWrapper'>
          <InputLabel htmlFor='partner-select'>Тип оплаты</InputLabel>
          <Select
            value={payment}
            onChange={this.handlePaymentSelect}
            inputProps={{
              name: 'payment-type',
              id: 'payment-type-select',
            }}
          >
            {payments.map(p => {
              return (
                <MenuItem key={p.id} value={p.value}>
                  {p.value}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <TextField
          label='Сумма'
          value={price}
          onChange={this.handlePriceChange}
          type='number'
          InputLabelProps={{
            shrink: true,
          }}
          margin='normal'
          fullWidth
          disabled={!paymentType}
          placeholder='Введите сумму'
        />
        <TextField
          label='Заметки'
          value={notes}
          onChange={this.handleNotesChange}
          InputLabelProps={{
            shrink: true,
          }}
          margin='normal'
          fullWidth
          multiline
        />
        <div className={'buttonsWraper'}>
          <Button
            disabled={!paymentType}
            variant='contained'
            size='large'
            color='primary'
            onClick={this.handleNextClick}
          >
            Готово
          </Button>
        </div>
      </div>
    );
  }
}

export default OtherComponent;
