import { Component } from 'react';
import * as React from 'react'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { PaymentTypeEnum } from '../utils/types';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { ProcessCashboxSubmit } from '../actions'
import TextField from '@material-ui/core/TextField';
import Helper from '../utils/helper';
import { DatePicker } from '@material-ui/pickers';
import * as moment from 'moment';

const mapStateToProps = (state) => {
    return {
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        processCashboxSubmit: (cash: number, date?: moment.Moment) => dispatch(ProcessCashboxSubmit(cash, date))
    };
};

export interface ICashboxComponentProps {
    history?: any;
    processCashboxSubmit?: (cash: number, date?: moment.Moment) => void;
}

export interface ICashboxComponentState {
    cash?: string;
    selectedDate?: moment.Moment;
}

class CashboxComponent extends Component<ICashboxComponentProps, ICashboxComponentState>{
    constructor(props) {
        super(props);

        this.state = {
            cash: '',
            selectedDate: moment(new Date())
        }
    }

    handleCashChange = (ev) => {
        this.setState({
            cash: ev.target.value
        });
    }

    handleDateChange = date => {
        this.setState({
            selectedDate: date
        });
    };

    handleNextClick = () => {
        const { processCashboxSubmit, history } = this.props;
        const { cash, selectedDate } = this.state;
        processCashboxSubmit(Number(cash), selectedDate);
        history.push('/');
    }

    render() {
        const { cash, selectedDate } = this.state;
        const paymentTypes = Helper.getArrayFromEnum(PaymentTypeEnum);

        return <div>
            <Typography gutterBottom variant="h5" component="h2">
                Касса
            </Typography>
            <DatePicker
                autoOk
                label="Дата"
                value={selectedDate}
                className={'date-picker'}
                onChange={this.handleDateChange}
            />
            <TextField
                label="Сумма"
                value={cash}
                onChange={this.handleCashChange}
                type="number"
                InputLabelProps={{
                    shrink: true
                }}
                margin="normal"
                fullWidth
                placeholder="Введите сумму"
            />
            <div className={'buttonsWraper'}>
                <Button
                    disabled={!cash}
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
    (CashboxComponent));
