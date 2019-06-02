import { Component } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { ProcessProductSubmit } from '../actions';
import TextField from '@material-ui/core/TextField';
import { InlineDatePicker } from './material-ui-pickers';
import * as moment from 'moment';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    processProductSubmit: (
      macarons: number,
      choux: number,
      zephyr: number,
      iceCream: number,
      cakes: number,      
      notes: string,
      date?: moment.Moment
    ) =>
      dispatch(
        ProcessProductSubmit(macarons, choux, zephyr, iceCream, cakes, notes, date)
      ),
  };
};

export interface IProductComponentProps {
  history?: any;
  processProductSubmit?: (
    macarons: number,
    choux: number,
    zephyr: number,
    iceCream: number,
    cakes: number,
    notes: string,
    date?: moment.Moment
  ) => void;
}

export interface IProductComponentState {
  macarons?: string;
  choux?: string;
  zephyr?: string;
  iceCream?: string;
  cakes?: string;
  notes?: string;
  selectedDate?: moment.Moment;
}

class ProductComponent extends Component<
  IProductComponentProps,
  IProductComponentState
> {
  constructor(props) {
    super(props);

    this.state = {
      macarons: '',
      choux: '',
      zephyr: '',
      iceCream: '',
      cakes: '',
      notes: '',
      selectedDate: moment(new Date()),
    };
  }

  handleQuanityChange = (ev, key) => {
    this.setState({
      [key]: ev.target.value,
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
    const { processProductSubmit, history } = this.props;
    const { macarons, choux, zephyr, iceCream, cakes, notes, selectedDate } = this.state;
    processProductSubmit(
      Number(macarons),
      Number(choux),
      Number(zephyr),
      Number(iceCream),
      Number(cakes),
      notes,
      selectedDate
    );
    history.push('/');
  };

  render() {
    const { macarons, zephyr, choux, iceCream, cakes, notes, selectedDate } = this.state;

    return (
      <div>
        <Typography gutterBottom variant='headline' component='h2'>
          Касса
        </Typography>
        <InlineDatePicker
          onlyCalendar
          label='Дата'
          value={selectedDate}
          className={'date-picker'}
          onChange={this.handleDateChange}
        />
        <TextField
          label='Макаронс'
          value={macarons}
          onChange={ev => this.handleQuanityChange(ev, 'macarons')}
          type='number'
          InputLabelProps={{
            shrink: true,
          }}
          margin='normal'
          fullWidth
          placeholder='Введите количество'
        />
        <TextField
          label='Шу'
          value={choux}
          onChange={ev => this.handleQuanityChange(ev, 'choux')}
          type='number'
          InputLabelProps={{
            shrink: true,
          }}
          margin='normal'
          fullWidth
          placeholder='Введите количество'
        />
        <TextField
          label='Зефир'
          value={zephyr}
          onChange={ev => this.handleQuanityChange(ev, 'zephyr')}
          type='number'
          InputLabelProps={{
            shrink: true,
          }}
          margin='normal'
          fullWidth
          placeholder='Введите количество'
        />
        <TextField
          label='Мороженое'
          value={iceCream}
          onChange={ev => this.handleQuanityChange(ev, 'iceCream')}
          type='number'
          InputLabelProps={{
            shrink: true,
          }}
          margin='normal'
          fullWidth
          placeholder='Введите количество'
        />
        <TextField
          label='Торты'
          value={cakes}
          onChange={ev => this.handleQuanityChange(ev, 'cakes')}
          type='number'
          InputLabelProps={{
            shrink: true,
          }}
          margin='normal'
          fullWidth
          placeholder='Введите количество'
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
            disabled={!macarons && !choux && !zephyr && !cakes}
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductComponent)
);
