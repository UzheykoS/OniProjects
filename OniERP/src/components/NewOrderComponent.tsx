﻿import { Component } from 'react';
import * as React from 'react'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Check } from '../utils/types';
import { Link } from 'react-router-dom';
import DrinksComponent from './DrinksComponent';
import DessertsComponent from './DessertsComponent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const mapStateToProps = (state) => {
    return {
        check: state.check
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export interface INewOrderComponentProps {
    check?: Check
}

export interface INewOrderComponentState {
    showDrinks?: boolean;
    showDesserts?: boolean;
}

class NewOrderComponent extends Component<INewOrderComponentProps, INewOrderComponentState>{
    constructor(props) {
        super(props);

        this.state = {
            showDrinks: false,
            showDesserts: false
        }
    }

    addDrinkClick = () => {
        this.setState({
            showDrinks: true
        })
    }

    addDessertClick = () => {
        this.setState({
            showDesserts: true
        })
    }

    renderCheckContent() {
        const { check } = this.props;

        return <List component="nav">
            {check.drinks.map(d => {
                return <ListItem button key={d.id}>
                    <ListItemText inset primary={`${d.type} - ${d.size}`} />
                </ListItem>
            })}
            <br />
            {check.desserts.map(d => {
                return <ListItem button key={d.id}>
                    <ListItemText inset primary={`${d.type} - ${d.taste}`} />
                </ListItem>
            })}
        </List>;
    }

    render() {
        const { showDrinks, showDesserts } = this.state;
        const { check } = this.props;

        if (!check) {
            return <div className="container">
                Please create new check first
            </div>;
        }

        return <div className="container">
            {`Check #${check.id}`}
            <br />
            {this.renderCheckContent()}
            <br />
            <Button variant="contained" color="primary" title="Desserts" onClick={this.addDessertClick} >
                Desserts
            </Button>
            <Button variant="contained" color="primary" title="Drinks" onClick={this.addDrinkClick}>
                Drinks
            </Button>
            <br />
            <Button variant="contained" color="secondary" title="Checkout" >
                <Link to='/checkOut'>Check Out</Link>
            </Button>
            {showDrinks && <DrinksComponent handleClose={() => this.setState({ showDrinks: false })} />}
            {showDesserts && <DessertsComponent handleClose={() => this.setState({ showDesserts: false })} />}
        </div>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)
    (NewOrderComponent)
