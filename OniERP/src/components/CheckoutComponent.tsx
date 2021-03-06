﻿import { Component } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import Helper from '../utils/helper';
import { Payment, OrderType, Check, SaleType, Staff } from '../utils/types';
import {
  ProcessCheckout,
  SetPaymentType,
  SetOrderType,
  // LogData,
  Cancel,
  SelectSale,
  SetIsPaid,
  SelectStaff,
} from '../actions';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ButtonWithProgress from './ButtonWithProgress';
import TextField from '@material-ui/core/TextField';

const mapStateToProps = state => {
  return {
    check: state.check,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleCheckout: callback => dispatch(ProcessCheckout(callback)),
    setPaymentType: (type: Payment) => dispatch(SetPaymentType(type)),
    setOrderType: (type: OrderType) => dispatch(SetOrderType(type)),
    selectSale: (sale: SaleType) => dispatch(SelectSale(sale)),
    setIsPaid: (isPaid: boolean) => dispatch(SetIsPaid(isPaid)),
    selectStaff: (staff: Staff) => dispatch(SelectStaff(staff)),
    // logData: (text: string) => dispatch(LogData(text)),
    handleCancel: () => dispatch(Cancel()),
  };
};

export interface ICheckoutComponentProps {
  history?: any;
  check?: Check;

  setPaymentType?: (type: Payment) => void;
  setOrderType?: (type: OrderType) => void;
  selectSale?: (sale: SaleType) => void;
  setIsPaid?: (isPaid: boolean) => void;
  selectStaff?: (staff: Staff) => void;
  handleCheckout?: (callback: any) => void;
  handleCancel?: () => void;
  // logData?: (text: string) => void;
}

export interface ICheckoutComponentState {
  isLoading?: boolean;
  cash: string;
}

class CheckoutComponent extends Component<
  ICheckoutComponentProps,
  ICheckoutComponentState
> {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      cash: '',
    };
  }

  handleCheckout = () => {
    this.setState({
      isLoading: true,
    });
    this.props.handleCheckout(() => {
      this.setState(
        {
          isLoading: false,
        },
        () => {
          this.props.history.push('/');
          // this.props.logData('checkoutPage->checkout');
        }
      );
    });
  };

  handleCancel = () => {
    this.props.handleCancel();
    this.props.history.push('/');
    // this.props.logData('checkoutPage->cancel');
  };

  handleBack = () => {
    this.props.history.push('/check');
    // this.props.logData('checkoutPage->back');
  };

  handlePaymentTypeChange = (type: Payment) => {
    this.props.setPaymentType(type);
    // this.props.logData('checkoutPage->paymentTypeChanged->' + type);
  };

  handleOrderTypeChange = (type: OrderType) => {
    this.props.setOrderType(type);
    // this.props.logData('checkoutPage->orderTypeChanged->' + type);
  };

  handleSaleSelect = ev => {
    const sale = ev.target.value;
    this.props.selectSale(sale);
    // this.props.logData('checkoutPage->handleSaleSelect->' + sale);
    if (sale !== SaleType.Staff) {
      this.props.selectStaff(null);
      this.props.setIsPaid(true);
    } else {
      this.props.setIsPaid(false);
    }
  };

  handleIsPaidChange = ev => {
    const isPaid = ev.target.checked;
    this.props.setIsPaid(isPaid);
  };

  handleStaffSelect = ev => {
    const staff = ev.target.value;
    this.props.selectStaff(staff);
  };

  handleCashSelect = ev => {
    this.setState({
      cash: ev.target.value,
    });
  };

  render() {
    const { check } = this.props;
    const { isLoading, cash } = this.state;

    if (!check) {
      return <div className='container'>Пожалуйста, создайте сначала чек</div>;
    }
    const saleTypes = Helper.getArrayFromEnum(SaleType);
    const staff = Helper.getArrayFromEnum(Staff);
    const price = Helper.calculatePrice(check);
    // const blackFridayPrice = Helper.calculateBlackFridayPrice(check);

    return (
      <>
        <Typography gutterBottom variant='h6'>
          Параметры чека
        </Typography>
        {/* <Divider />
        <div className='checkoutBlackFridayGroup'>
          <div className='blackFridayTitle'>
            <img src={'/images/black_friday.jpg'} />
          </div>
          <div className='blackFridayPrice'>: {blackFridayPrice} грн.</div>
        </div> */}
        <Divider />
        <div className='checkoutControlGroup'>
          <Typography gutterBottom variant='subtitle1'>
            Итого: {price} грн.
          </Typography>
        </div>
        <Divider />
        <div className='checkoutControlGroup'>
          <Typography
            classes={{ root: 'checkoutLabel' }}
            gutterBottom
            variant='subtitle1'
          >
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
            label='Карта'
          />
          <FormControlLabel
            control={
              <Radio
                checked={check.payment === Payment.Terminal}
                onChange={() => this.handlePaymentTypeChange(Payment.Terminal)}
                value={Payment.Terminal.toString()}
              />
            }
            label='Терминал'
          />
          <FormControlLabel
            control={
              <Radio
                checked={check.payment === Payment.Cash}
                onChange={() => this.handlePaymentTypeChange(Payment.Cash)}
                value={Payment.Cash.toString()}
              />
            }
            label='Наличные'
          />
        </div>
        <Divider />
        <div className='checkoutControlGroup'>
          <Typography
            classes={{ root: 'checkoutLabel' }}
            gutterBottom
            variant='subtitle1'
          >
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
            label='Предзаказ'
          />
          <FormControlLabel
            control={
              <Radio
                checked={check.type === OrderType.Shop}
                onChange={() => this.handleOrderTypeChange(OrderType.Shop)}
                value={OrderType.Shop.toString()}
              />
            }
            label='Витрина'
          />
        </div>
        <Divider />
        <div className='saleContainer'>
          <Typography
            gutterBottom
            variant='subtitle1'
            style={{ paddingRight: '2rem' }}
          >
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
              {saleTypes.map(p => {
                return (
                  <MenuItem key={p.id} value={p.value}>
                    {p.value}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        <Divider />
        {check.sale === SaleType.Staff && (
          <>
            <div className='saleContainer'>
              <Typography
                gutterBottom
                variant='subtitle1'
                style={{ paddingRight: '2rem' }}
              >
                Работник:
              </Typography>
              <FormControl className='partnerSelectWrapper'>
                <Select
                  value={check.staff}
                  onChange={this.handleStaffSelect}
                  inputProps={{
                    name: 'staff',
                    id: 'staff-select',
                  }}
                >
                  {staff.map(p => {
                    return (
                      <MenuItem key={p.id} value={p.value}>
                        {p.value}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
            <Divider />
          </>
        )}
        <div className='flex-box-container'>
          <FormControlLabel
            classes={{ root: 'checkboxLabel' }}
            control={
              <Checkbox
                checked={check.isPaid}
                onChange={this.handleIsPaidChange}
              />
            }
            label='Оплачено:'
            labelPlacement='start'
          />
          {check.payment === Payment.Cash && (
            <div className='flex-box-container'>
              <TextField
                //   label='Торты'
                value={cash}
                onChange={this.handleCashSelect}
                type='number'
                InputLabelProps={{
                  shrink: true,
                }}
                margin='normal'
                fullWidth
                placeholder='Введите сумму'
              />
              <div className='change-wrapper'>
                <Typography noWrap gutterBottom variant='subtitle1'>
                  Сдача: {!!cash ? Number(cash) - price : '-'} грн.
                </Typography>
              </div>
            </div>
          )}
        </div>
        <Divider />
        <div className={'buttonsWraper'}>
          <ButtonWithProgress
            loading={isLoading}
            classes={{ root: 'button' }}
            variant='contained'
            color='primary'
            title='Check Out'
            disabled={check.sale === SaleType.Staff && !check.staff}
            onClick={this.handleCheckout}
          >
            Продолжить
          </ButtonWithProgress>
          <Button
            classes={{ root: 'button' }}
            variant='contained'
            color='default'
            title='Back'
            onClick={this.handleBack}
          >
            Назад
          </Button>
          <Button
            classes={{ root: 'button' }}
            variant='contained'
            color='secondary'
            title='Cancel'
            onClick={this.handleCancel}
          >
            Отмена
          </Button>
        </div>
      </>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CheckoutComponent)
);
