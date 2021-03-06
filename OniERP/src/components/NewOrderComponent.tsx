﻿import { Component } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import {
  Check,
  Dessert,
  Drink,
  DessertType,
  DrinksType,
  MIX_MACARONS_6,
  MIX_MACARONS_12,
  MIX_MACARONS_24,
  MIX_ZEPHYR_8,
  MIX_ZEPHYR_16,
  SPECIAL_MIX_MACARONS_2,
} from '../utils/types';
import DrinksComponent from './DrinksComponent';
import DessertsComponent from './DessertsComponent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import LargeButton from './LargeButton';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import { DeleteDessert, DeleteDrink } from '../actions';
import Helper from '../utils/helper';

const mapStateToProps = (state) => {
  return {
    check: state.check,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteDessert: (type: DessertType, taste: string, size: string) =>
      dispatch(DeleteDessert(type, taste, size)),
    deleteDrink: (type: DrinksType, size: string) =>
      dispatch(DeleteDrink(type, size)),
  };
};

export interface INewOrderComponentProps {
  check?: Check;
  history?: any;

  deleteDessert?: (type: DessertType, taste: string, size: string) => void;
  deleteDrink?: (type: DrinksType, size: string) => void;
}

export interface INewOrderComponentState {
  showDrinks?: boolean;
  showDesserts?: boolean;
}

class NewOrderComponent extends Component<
  INewOrderComponentProps,
  INewOrderComponentState
> {
  constructor(props) {
    super(props);

    this.state = {
      showDrinks: false,
      showDesserts: false,
    };
  }

  calculatePrice() {
    const { check } = this.props;
    return Helper.calculatePrice(check);
  }

  addDrinkClick = () => {
    this.setState({
      showDrinks: true,
    });
  };

  addDessertClick = () => {
    this.setState({
      showDesserts: true,
    });
  };

  handleNextClick = () => {
    const { history } = this.props;
    history.push('/checkOut');
  };

  handleDeleteDrink = (drink: Drink) => {
    this.props.deleteDrink(drink.id, drink.size);
  };

  handleDeleteDessert = (dessert: Dessert) => {
    this.props.deleteDessert(dessert.type, dessert.taste, dessert.size);
  };

  getContentItemText(dessert: Dessert) {
    if (dessert.type === DessertType.Cake) {
      return `${dessert.type}, ${dessert.taste} - ${dessert.quantity} шт.(${dessert.size})`;
    }

    switch (dessert.taste) {
      case MIX_MACARONS_6:
        return `${dessert.type}, ${dessert.taste} (${dessert.quantity / 6})`;
      case MIX_MACARONS_12:
        return `${dessert.type}, ${dessert.taste} (${dessert.quantity / 12})`;
      case MIX_MACARONS_24:
        return `${dessert.type}, ${dessert.taste} (${dessert.quantity / 24})`;
      case MIX_ZEPHYR_8:
        return `${dessert.type}, ${dessert.taste} (${dessert.quantity / 8})`;
      case MIX_ZEPHYR_16:
        return `${dessert.type}, ${dessert.taste} (${dessert.quantity / 16})`;
      case SPECIAL_MIX_MACARONS_2:
        return `${dessert.type}, ${dessert.taste} (${dessert.quantity / 1})`;
      default:
        return `${dessert.type}, ${dessert.taste} (${dessert.quantity})`;
    }
  }

  renderCheckContent() {
    const { check } = this.props;

    return (
      <>
        <div className='checkoutControlGroup'>
          Итого: {this.calculatePrice()} грн.
        </div>
        <List component='nav'>
          {check.drinks.map((d, index) => {
            return (
              <ListItem button key={index}>
                <ListItemText primary={`${d.id} - ${d.size}`} />
                <ListItemSecondaryAction>
                  <IconButton
                    aria-label='Delete'
                    onClick={() => this.handleDeleteDrink(d)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
          {check.desserts.map((d, index) => {
            return (
              <ListItem button key={index}>
                <ListItemText primary={this.getContentItemText(d)} />
                <ListItemSecondaryAction>
                  <IconButton
                    aria-label='Delete'
                    onClick={() => this.handleDeleteDessert(d)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </>
    );
  }

  render() {
    const { showDrinks, showDesserts } = this.state;
    const { check } = this.props;

    if (!check) {
      return <div className='container'>Пожалуйста, создайте сначала чек</div>;
    }

    return (
      <div>
        <Typography gutterBottom variant='h5' component='h2'>
          Новый заказ
        </Typography>
        {`Чек #${check.id}`}
        <div className='newOrderButtonsWrapper'>
          <div className='newOrderButton'>
            <LargeButton
              title={'ДЕСЕРТЫ'}
              imageUrl={'/images/desserts_icon.jpg'}
              onClick={this.addDessertClick}
            />
          </div>
          <div className='newOrderButton'>
            <LargeButton
              title={'НАПИТКИ'}
              imageUrl={'/images/drinks_icon.jpg'}
              onClick={this.addDrinkClick}
            />
          </div>
        </div>
        <Divider />
        <div className={'buttonsWraper'}>
          <Button
            disabled={check.desserts.length === 0 && check.drinks.length === 0}
            variant='contained'
            size='large'
            color='primary'
            onClick={this.handleNextClick}
          >
            Продолжить
          </Button>
        </div>
        {this.renderCheckContent()}
        {showDrinks && (
          <DrinksComponent
            handleClose={() => this.setState({ showDrinks: false })}
          />
        )}
        {showDesserts && (
          <DessertsComponent
            handleClose={() => this.setState({ showDesserts: false })}
          />
        )}
      </div>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NewOrderComponent)
);
