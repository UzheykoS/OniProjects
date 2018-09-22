import { Component } from 'react';
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
import Divider from '@material-ui/core/Divider';
import LargeButton from './LargeButton';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const dessertsImage = require('../../public/images/desserts_icon.jpg');
const drinksImage = require('../../public/images/drinks_icon.jpg');

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
    check?: Check;
    history?: any;
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

    handleNextClick = () => {
        const { history } = this.props;
        history.push('/checkOut');
    }

    renderCheckContent() {
        const { check } = this.props;

        return <List component="nav">
            {check.drinks.map((d, index) => {
                return <ListItem button key={index}>
                    <ListItemText inset primary={`${d.id} - ${d.size}`} />
                </ListItem>
            })}
            {check.desserts.map((d, index) => {
                return <ListItem button key={index}>
                    <ListItemText inset primary={`${d.type} - ${d.taste} - ${d.quantity}${d.size ? (' - ' + d.size) : ''}`} />
                </ListItem>
            })}
        </List>;
    }

    render() {
        const { showDrinks, showDesserts } = this.state;
        const { check } = this.props;

        if (!check) {
            return <div className="container">
                Пожалуйста, создайте сначала чек
            </div>;
        }

        return <div>
            <Typography gutterBottom variant="headline" component="h2">
                Новый заказ
            </Typography>
            {`Чек #${check.id}`}
            {this.renderCheckContent()}
            <Divider />
            <div className='newOrderButtonsWrapper'>
                <div className='newOrderButton'>
                    <LargeButton title={'Дессерты'} imageUrl={dessertsImage} onClick={this.addDessertClick} />
                </div>
                <div className='newOrderButton'>
                    <LargeButton title={'Напитки'} imageUrl={drinksImage} onClick={this.addDrinkClick} />
                </div>
            </div>
            <div className={'buttonsWraper'}>
                <Button
                    disabled={check.desserts.length === 0 && check.drinks.length === 0}
                    variant="contained"
                    size="large"
                    color="primary"
                    onClick={this.handleNextClick}
                >
                    Продолжить
            </Button>
            </div>
            {showDrinks && <DrinksComponent handleClose={() => this.setState({ showDrinks: false })} />}
            {showDesserts && <DessertsComponent handleClose={() => this.setState({ showDesserts: false })} />}
        </div>;
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)
    (NewOrderComponent));
