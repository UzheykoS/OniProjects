import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { AddDrink, LogData } from '../actions';
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

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addDrink: (type: DrinksType, size: string) => dispatch(AddDrink(type, size)),
        logData: (text: string) => dispatch(LogData(text))
    };
};

export interface IDrinksComponentProps {
    addDrink?: (type: DrinksType, size: string) => void;
    handleClose?: () => void;
    logData?: (text: string) => void;
}

export interface IDrinksComponentState {
    drinkType?: DrinksType;
    drinkSize?: string;
}

export class DrinksComponent extends Component<IDrinksComponentProps, IDrinksComponentState>{
    constructor(props) {
        super(props);

        this.state = {
            drinkType: null,
            drinkSize: null
        }
    }

    handleClose = () => {
        this.props.handleClose();
        this.props.logData('drinks->close');
    }

    handleBack = () => {
        this.setState({
            drinkType: null
        });
    }

    handleDrinkSelect = async (drink) => {
        const drinkSizes = DrinksDict[drink];
        if (drinkSizes && drinkSizes.length === 1) {
            this.setState({
                drinkType: drink,
                drinkSize: drinkSizes[0]
            });

            await this.props.addDrink(drink, drinkSizes[0]);
            this.props.handleClose();
            this.props.logData(`drinks->drinkSelected->${drink}->drinkSizeSelected->${drinkSizes[0]}`);
        } else {
            this.setState({
                drinkType: drink
            });
            this.props.logData('drinks->drinkSelected->' + drink);
        }
    }

    handleDrinkSizeSelect = async (drinkSize) => {
        this.setState({
            drinkSize
        });

        const { drinkType } = this.state;
        await this.props.addDrink(drinkType, drinkSize);
        this.props.handleClose();
        this.props.logData('drinks->drinkSizeSelected->' + drinkSize);
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
            <List className='drinksListWrapper'>
                {drinks.map(d => (
                    <ListItem classes={{ container: 'listItemContainer' }} button onClick={() => this.handleDrinkSelect(d.value)} key={d.id} >
                        <ListItemAvatar>
                            <Avatar className='drinkAvatar'>
                                {d.value.charAt(0).toUpperCase()}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={d.value} />
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
        const { drinkType } = this.state;
        const drinkSizes = DrinksDict[drinkType];

        return <div>
            <List>
                {drinkSizes.map(d => (
                    <ListItem classes={{ container: 'listItemContainer' }} button onClick={() => this.handleDrinkSizeSelect(d)} key={d} >
                        <ListItemAvatar>
                            <Avatar className='drinkAvatar'>
                                {d.charAt(0).toUpperCase()}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={d} />
                    </ListItem>
                ))}
                <div className='buttonApplyWraper'>
                    <Button classes={{ root: 'button' }} variant="contained" color="default" title="Back" onClick={this.handleBack}>
                        Назад
                    </Button>
                    <Button variant="contained" color="secondary" onClick={this.handleClose}>
                        Отмена
                    </Button>
                </div>
            </List>
        </div>;
    };

    render() {
        const { drinkType } = this.state;

        return <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open fullScreen >
            <DialogTitle id="simple-dialog-title">{!drinkType ? 'Выберите напиток' : 'Выберите размер'}</DialogTitle>
            {!drinkType ? this.renderDrinks() : this.renderDrinkSizes()}
        </Dialog>;
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(DrinksComponent))
