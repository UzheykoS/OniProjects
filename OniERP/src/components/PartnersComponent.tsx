import { Component } from 'react';
import * as React from 'react'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Check, DessertType, DrinksType, PartnersEnum } from '../utils/types';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { DeleteDessert, DeleteDrink } from '../actions';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export interface IPartnersComponentProps {
}

export interface IPartnersComponentState {
    partner?: string;
    macaronsQty?: number;
    zephyrQty?: number;
}

class PartnersComponent extends Component<IPartnersComponentProps, IPartnersComponentState>{
    constructor(props) {
        super(props);

        this.state = {
            partner: '',
            macaronsQty: undefined,
            zephyrQty: undefined
        }
    }

    getArrayFromEnum(en: any) {
        const keys = Object.keys(en);
        const values = keys.map(d => {
            return {
                id: d,
                value: en[d]
            }
        })
        return values;
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
        // const { history } = this.props;
        // history.push('/checkOut');
    }

    render() {
        const { partner, macaronsQty, zephyrQty } = this.state;
        const partners = this.getArrayFromEnum(PartnersEnum);

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
