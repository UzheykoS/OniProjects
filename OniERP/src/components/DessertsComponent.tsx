import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { AddDessert } from '../actions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { DessertType, Dessert, MacaronsEnum } from '../utils/types';
import { AddIcon } from 'mdi-react';
import Avatar from '@material-ui/core/Avatar';

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addDessert: (dessert) => dispatch(AddDessert(dessert))
    };
};

export interface IDessertsComponentProps {
    addDessert?: (dessert: Dessert) => void;
    handleClose?: () => void;
}

export interface IDessertsComponentState {
    dessertType?: DessertType;
    dessertTaste?: string;
}

class DessertsComponent extends Component<IDessertsComponentProps, IDessertsComponentState>{
    constructor(props) {
        super(props);

        this.state = {
            dessertType: null,
            dessertTaste: null
        }
    }

    handleClose = () => {
        this.props.handleClose();
    }

    handleDessertSelect = (dessert) => {
        this.setState({
            dessertType: dessert
        });
    }

    handleDessertSizeSelect = async (taste) => {
        this.setState({
            dessertTaste: taste
        });

        const { dessertType } = this.state;
        const dessert: Dessert = {
            id: 1,
            taste: taste,
            type: dessertType
        };
        await this.props.addDessert(dessert);
        this.props.handleClose();
    }

    renderDesserts() {
        const dessertKeys = Object.keys(DessertType);
        const desserts = dessertKeys.map(d => {
            return {
                id: d,
                value: DessertType[d]
            }
        })

        return <div>
            <List>
                {desserts.map(d => (
                    <ListItem button onClick={() => this.handleDessertSelect(d.value)} key={d.id} >
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

    renderDessertTastes() {
        const dessertKeys = Object.keys(MacaronsEnum);
        const dessertSizes = dessertKeys.map(d => {
            return {
                id: d,
                value: MacaronsEnum[d]
            }
        })

        return <div>
            <List>
                {dessertSizes.map(d => (
                    <ListItem button onClick={() => this.handleDessertSizeSelect(d.value)} key={d.id} >
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

    render() {
        const { dessertType } = this.state;

        return <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={true} >
            <DialogTitle id="simple-dialog-title">{!dessertType ? 'Select dessert' : 'Select taste'}</DialogTitle>
            {!dessertType ? this.renderDesserts() : this.renderDessertTastes()}
        </Dialog>;
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(DessertsComponent))
