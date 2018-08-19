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
import { DrinksType, Drink } from '../utils/types';
import { DrinksDict } from '../utils/dictionaries';
import { AddIcon } from 'mdi-react';
import Avatar from '@material-ui/core/Avatar';

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addDrink: (type: DrinksType, size: string) => dispatch(AddDrink(type, size))
    };
};

export interface IDrinksComponentProps {
    addDrink?: (type: DrinksType, size: string) => void;
    handleClose?: () => void;
}

export interface IDrinksComponentState {
    drinkType?: DrinksType;
    drinkSize?: string;
}

class DrinksComponent extends Component<IDrinksComponentProps, IDrinksComponentState>{
    constructor(props) {
        super(props);

        this.state = {
            drinkType: null,
            drinkSize: null
        }
    }

    handleClose = () => {
        this.props.handleClose();
    }

    handleDrinkSelect = (drink) => {
        this.setState({
            drinkType: drink
        });
    }

    handleDrinkSizeSelect = async (drinkSize) => {
        this.setState({
            drinkSize
        });

        const { drinkType } = this.state;
        await this.props.addDrink(drinkType, drinkSize);
        this.props.handleClose();
    }

    renderDrinks() {
        const drinkKeys = Object.keys(DrinksType);
        const drinks = drinkKeys.map(d => {
            return {
                id: d,
                value: DrinksType[d]
            }
        })

        return <div>
            <List>
                {drinks.map(d => (
                    <ListItem button onClick={() => this.handleDrinkSelect(d.value)} key={d.id} >
                        <ListItemAvatar>
                            <Avatar className='avatar'>
                                <AddIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={d.value} />
                    </ListItem>
                ))}
                <ListItem button onClick={this.handleClose}>
                    <ListItemText primary="Cancel" />
                </ListItem>
            </List>
        </div>;
    };

    renderDrinkSizes() {
        const { drinkType } = this.state;
        const drinkSizes = DrinksDict[drinkType];

        return <div>
            <List>
                {drinkSizes.map(d => (
                    <ListItem button onClick={() => this.handleDrinkSizeSelect(d)} key={d} >
                        <ListItemAvatar>
                            <Avatar className='avatar'>
                                <AddIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={d} />
                    </ListItem>
                ))}
                <ListItem button onClick={this.handleClose}>
                    <ListItemText primary="Cancel" />
                </ListItem>
            </List>
        </div>;
    };

    render() {
        const { drinkType } = this.state;

        return <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={true} >
            <DialogTitle id="simple-dialog-title">{!drinkType ? 'Select drink' : 'Select size'}</DialogTitle>
            {!drinkType ? this.renderDrinks() : this.renderDrinkSizes()}
        </Dialog>;
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(DrinksComponent))
