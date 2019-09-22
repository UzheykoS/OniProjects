import { Component } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { ProcessWriteOffSubmit } from '../actions';
import TextField from '@material-ui/core/TextField';
import { DatePicker } from '@material-ui/pickers';
import * as moment from 'moment';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    processWriteOffSubmit: (
      macarons: number,
      choux: number,
      zephyr: number,
      iceCream: number,
      cakes: number,
      coffee: number,
      notes: string,
      date?: moment.Moment
    ) =>
      dispatch(
        ProcessWriteOffSubmit(
          macarons,
          choux,
          zephyr,
          iceCream,
          cakes,
          coffee,
          notes,
          date
        )
      ),
  };
};

export interface IWriteOffComponentProps {
  history?: any;
  processWriteOffSubmit?: (
    macarons: number,
    choux: number,
    zephyr: number,
    iceCream: number,
    cakes: number,
    coffee: number,
    notes: string,
    date?: moment.Moment
  ) => void;
}

export interface IWriteOffComponentState {
  macarons?: string;
  choux?: string;
  zephyr?: string;
  iceCream?: string;
  cakes?: string;
  coffee?: string;
  notes?: string;
  selectedDate?: moment.Moment;
}

class WriteOffComponent extends Component<
  IWriteOffComponentProps,
  IWriteOffComponentState
> {
  constructor(props) {
    super(props);

    this.state = {
      macarons: '',
      choux: '',
      zephyr: '',
      iceCream: '',
      cakes: '',
      coffee: '',
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
    const { processWriteOffSubmit, history } = this.props;
    const {
      macarons,
      choux,
      zephyr,
      iceCream,
      cakes,
      coffee,
      notes,
      selectedDate,
    } = this.state;
    processWriteOffSubmit(
      Number(macarons),
      Number(choux),
      Number(zephyr),
      Number(iceCream),
      Number(cakes),
      Number(coffee),
      notes,
      selectedDate
    );
    history.push('/');
  };

  render() {
    const {
      macarons,
      zephyr,
      choux,
      iceCream,
      cakes,
      coffee,
      notes,
      selectedDate,
    } = this.state;

    return (
      <div>
        <Typography gutterBottom variant='h5' component='h2'>
          Списание
        </Typography>
        <DatePicker
          autoOk
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
          label='Кофе'
          value={coffee}
          onChange={ev => this.handleQuanityChange(ev, 'coffee')}
          type='number'
          InputLabelProps={{
            shrink: true,
          }}
          margin='normal'
          fullWidth
          placeholder='Введите количество, г'
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
            disabled={
              !macarons && !choux && !zephyr && !cakes && !iceCream && !coffee
            }
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
  )(WriteOffComponent)
);
