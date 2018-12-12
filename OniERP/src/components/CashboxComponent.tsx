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

const mapStateToProps = (state) => {
    return {
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        processCashboxSubmit: (cash: number, notes: string) => dispatch(ProcessCashboxSubmit(cash, notes))
    };
};

export interface ICashboxComponentProps {
    history?: any;
    processCashboxSubmit?: (cash: number, notes: string) => void;
}

export interface ICashboxComponentState {
    cash?: string;
    notes?: string;
}

class CashboxComponent extends Component<ICashboxComponentProps, ICashboxComponentState>{
    constructor(props) {
        super(props);

        this.state = {
            cash: '',
            notes: ''
        }
    }

    handleCashChange = (ev) => {
        this.setState({
            cash: ev.target.value
        });
    }

    handleNotesChange = (ev) => {
        this.setState({
            notes: ev.target.value
        });
    }

    handleNextClick = () => {
        const { processCashboxSubmit, history } = this.props;
        const { cash, notes } = this.state;
        processCashboxSubmit(Number(cash), notes);
        history.push('/');
    }

    render() {
        const { cash, notes } = this.state;
        const paymentTypes = Helper.getArrayFromEnum(PaymentTypeEnum);

        return <div>
            <Typography gutterBottom variant="headline" component="h2">
                Касса
            </Typography>
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
