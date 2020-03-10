import { Component } from 'react';
import * as React from 'react';
import Button from '@material-ui/core/Button';
import { PaymentTypeEnum } from '../utils/types';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Helper from '../utils/helper';
// import { InlineDatePicker } from './core/material-ui-pickers';
import moment from 'moment';
import { useStore } from '../hooks';

export interface ICashboxComponentProps {}

export interface ICashboxComponentState {
  cash?: string;
  notes: string;
  selectedDate?: moment.Moment;
}

class CashboxComponent extends Component<
  ICashboxComponentProps,
  ICashboxComponentState
> {
  constructor(props) {
    super(props);

    this.state = {
      cash: '',
      notes: '',
      selectedDate: moment(new Date()),
    };
  }

  handleCashChange = ev => {
    this.setState({
      cash: ev.target.value,
    });
  };

  handleNotesChange = ev => {
    this.setState({
      notes: ev.target.value,
    });
  };

  handleDateChange = date => {
    this.setState({
      selectedDate: date,
    });
  };

  handleNextClick = () => {
    const { cash, notes, selectedDate } = this.state;
    const { app, router } = useStore();
    app.cashboxSubmit({ cash: Number(cash), notes, date: selectedDate });
    router.push('/');
  };

  render() {
    const { cash, notes, selectedDate } = this.state;
    const paymentTypes = Helper.getArrayFromEnum(PaymentTypeEnum);

    return (
      <div>
        <Typography gutterBottom variant='headline' component='h2'>
          Касса
        </Typography>
        {/* <InlineDatePicker
          onlyCalendar
          label='Дата'
          value={selectedDate}
          className={'date-picker'}
          onChange={this.handleDateChange}
        /> */}
        <TextField
          label='Сумма'
          value={cash}
          onChange={this.handleCashChange}
          type='number'
          InputLabelProps={{
            shrink: true,
          }}
          margin='normal'
          fullWidth
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
            disabled={!cash}
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

export default CashboxComponent;
