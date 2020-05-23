import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { AddDrink } from '../actions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { DrinksType } from '../utils/types';
import { DrinksDict } from '../utils/dictionaries';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addDrink: (type: DrinksType | string, size: string, quantity: number) => dispatch(AddDrink(type, size, quantity)),
        // logData: (text: string) => dispatch(LogData(text))
    };
};

export interface IDrinksComponentProps {
    addDrink?: (type: DrinksType | string , size: string, quantity: number) => void;
    handleClose?: () => void;
    // logData?: (text: string) => void;
}

export interface IDrinksComponentState {
    drinkType?: DrinksType;
    drinkSize?: string;
    drinkQuantities?: { [id: string]: number; };
}

export class DrinksComponent extends Component<IDrinksComponentProps, IDrinksComponentState>{
    constructor(props) {
        super(props);

        this.state = {
            drinkType: null,
            drinkSize: null,
            drinkQuantities: {}
        }
    }

    getId(drinkType, drinkSize) {
        return `${drinkType}/${drinkSize}`;
    }

    getCountByDrinkType(drinkType) {
        const { drinkQuantities } = this.state;

        let result = 0;
        for (const key in drinkQuantities) {
            if (key.split('/')[0] === drinkType) {
                result += drinkQuantities[key];
            }
        }
        return result;
    }

    handleClose = () => {
        this.props.handleClose();
        // this.props.logData('drinks->close');
    }

    handleBack = () => {
        this.setState({
            drinkType: null
        });
    }

    handleDrinkSelect = async (drink) => {
        const { drinkQuantities } = this.state;
        const drinkSizes = DrinksDict[drink];

        if (drinkSizes && drinkSizes.length === 1) {
            const id = this.getId(drink, drinkSizes[0]);
            if (!drinkQuantities[id]) {
                drinkQuantities[id] = 1;
            } else {
                drinkQuantities[id] += 1;
            }

            this.setState({
                drinkQuantities
            });
        } else {
            this.setState({
                drinkType: drink
            });
        }
    }

    handleApply = async () => {
        const { drinkQuantities } = this.state;

        for (const key in drinkQuantities) {
            const drinkType = key.split('/')[0];
            const drinkSize = key.split('/')[1];
            const qty = drinkQuantities[key];
            if (qty) {
                await this.props.addDrink(drinkType, drinkSize,  qty || 0);
            }
        }

        this.props.handleClose();
        // this.props.logData('drinks->handleApply');
    }

    handleDrinkIncrease = (drinkSize, qty = 1) => {
        const { drinkQuantities, drinkType } = this.state;

        const id = this.getId(drinkType, drinkSize);
        if (!drinkQuantities[id]) {
            drinkQuantities[id] = qty;
        } else {
            drinkQuantities[id] += qty;
        }

        this.setState({
            drinkQuantities
        });
    }

    handleDrinkDecrease = (drinkType, size = null) => {
        const { drinkQuantities } = this.state;

        let id;
        if (!size) {
            const drinkSizes = DrinksDict[drinkType];
            id = this.getId(drinkType, drinkSizes[0]);
        } else {
            id = this.getId(drinkType, size);
        }
        
        if (drinkQuantities[id]) {
            drinkQuantities[id] -= 1;
        }

        this.setState({
            drinkQuantities
        });
    }

    countTotalDrinkQuantity() {
        const { drinkQuantities } = this.state;

        let result = 0;
        for (const key in drinkQuantities) {
            result += drinkQuantities[key];
        }
        return result;
    }

    renderDrinks() {
        const drinkKeys = Object.keys(DrinksType);
        const drinks = drinkKeys.map(d => {
            return {
                id: d,
                value: DrinksType[d]
            }
        })

        return <div className='drinksWrapper'>
            <div className='buttonApplyWraper'>
                <Button variant="contained" color="primary" title="Check Out" onClick={this.handleApply}>
                    Применить
                </Button>
            </div>
            <List className='drinksListWrapper'>
                {drinks.map(d => (
                    <ListItem divider button onClick={() => this.handleDrinkSelect(d.value)} key={d.id} >
                        <ListItemAvatar>
                            <Avatar className='drinkAvatar'>
                                {d.value.charAt(0).toUpperCase()}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={`${d.value}(${this.getCountByDrinkType(d.value)})`} />
                        <ListItemSecondaryAction>
                            <IconButton aria-label="Add" classes={{ root: 'decreaseButton' }} onClick={() => this.handleDrinkDecrease(d.value)}>
                                {'\u2014'}
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
            <div className='buttonApplyWraper'>
                <Button variant="contained" color="secondary" onClick={this.handleClose}>
                    Отмена
                </Button>
            </div>
        </div>;
    };

    renderDrinkSizes() {
        const { drinkType, drinkQuantities } = this.state;
        const drinkSizes = DrinksDict[drinkType];

        return <div>
            <div className='buttonApplyWraper'>
                <Button variant="contained" color="primary" title="Check Out" onClick={this.handleApply}>
                    Применить
                </Button>
            </div>
            <List>
                {drinkSizes.map(d => (
                    <ListItem divider button onClick={() => this.handleDrinkIncrease(d)} key={d} >
                        <ListItemAvatar>
                            <Avatar className='drinkAvatar'>
                                {d.charAt(0).toUpperCase()}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={`${d}(${drinkQuantities[this.getId(drinkType, d)] || 0})`} />
                        <ListItemSecondaryAction >
                            <IconButton aria-label="Add" classes={{ root: 'decreaseButton' }} onClick={() => this.handleDrinkDecrease(drinkType, d)}>
                                {'\u2014'}
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
            <div className='buttonApplyWraper'>
                <Button classes={{ root: 'button' }} variant="contained" color="default" title="Back" onClick={this.handleBack}>
                    Назад
                </Button>
                <Button variant="contained" color="secondary" onClick={this.handleClose}>
                    Отмена
                </Button>
            </div>
        </div>;
    };

    render() {
        const { drinkType } = this.state;

        return <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open fullScreen >
            <DialogTitle id="simple-dialog-title">
                {!drinkType ? `Выберите напиток (${this.countTotalDrinkQuantity()})` : 'Выберите размер'}
            </DialogTitle>
            {!drinkType ? this.renderDrinks() : this.renderDrinkSizes()}
        </Dialog>;
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(DrinksComponent))
