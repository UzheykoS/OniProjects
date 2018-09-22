import { Component } from 'react';
import * as React from 'react'
import { connect } from 'react-redux';
import { Check } from '../utils/types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const mapStateToProps = (state) => {
    return {
        history: state.history
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export interface IHistoryComponentProps {
    history?: Array<Check>;
}

export interface IHistoryComponentState {
}

class HistoryComponent extends Component<IHistoryComponentProps, IHistoryComponentState>{
    render() {
        const { history } = this.props;

        return <List component="nav">
            {history.map(h => {
                return <ListItem key={h.id}>
                    <ListItemText inset primary={`Чек #${h.id}, дессерты: ${h.desserts.length}, напитки: ${h.drinks.length}, оплата: ${h.payment}, тип заказа: ${h.type}`} />
                </ListItem>
            })}
        </List>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryComponent);
