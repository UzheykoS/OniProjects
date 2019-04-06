import { FunctionComponent, useState } from 'react';
import * as React from 'react';
import Button from '@material-ui/core/Button';
import {
  IDessert,
  IDrink,
  DessertType,
  MIX_MACARONS_6,
  MIX_MACARONS_12,
  MIX_MACARONS_24,
  MIX_ZEPHYR_8,
  MIX_ZEPHYR_16,
} from '../utils/types';
import DrinksComponent from './DrinksComponent';
import DessertsComponent from './DessertsComponent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import LargeButton from './core/LargeButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import { useStore } from '../hooks';
import { getSnapshot } from 'mobx-state-tree';

const NewOrderComponent: FunctionComponent = () => {
  const [showDrinks, setShowDrinks] = useState(false);
  const [showDesserts, setShowDesserts] = useState(false);
  const { app, router } = useStore();
  const check = getSnapshot(app.check!)!;

  if (!check) {
    return <div className='container'>Пожалуйста, создайте сначала чек</div>;
  }

  const addDrinkClick = () => {
    setShowDrinks(true);
  };

  const addDessertClick = () => {
    setShowDesserts(true);
  };

  const handleNextClick = () => {
    router.push('/checkOut');
  };

  const handleDeleteDrink = (drink) => {
    if (!drink) {
      return;
    }
    app.deleteDrink({ type: drink.id, size: drink.size });
  };

  const handleDeleteDessert = (dessert) => {
    if (!dessert) {
      return;
    }
    app.deleteDessert({
      type: dessert.type,
      taste: dessert.taste,
      size: dessert.size,
    });
  };

  const getContentItemText = (dessert) => {
    if (dessert.type === DessertType.Cake) {
      return `${dessert.type}, ${dessert.taste} - ${dessert.quantity} шт.(${
        dessert.size
      })`;
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
      default:
        return `${dessert.type}, ${dessert.taste} (${dessert.quantity})`;
    }
  };

  const renderCheckContent = () => {
    return (
      <>
        <div className='checkoutControlGroup'>Итого: {app.totalPrice} грн.</div>
        <List component='nav'>
          {check.drinks.map((d, index) => {
            return (
              <ListItem button key={index}>
                <ListItemText primary={`${d.id} - ${d.size}`} />
                <ListItemSecondaryAction>
                  <IconButton
                    aria-label='Delete'
                    onClick={() => handleDeleteDrink(d)}
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
                <ListItemText primary={getContentItemText(d)} />
                <ListItemSecondaryAction>
                  <IconButton
                    aria-label='Delete'
                    onClick={() => handleDeleteDessert(d)}
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
  };

  return (
    <div>
      <Typography gutterBottom variant='headline' component='h2'>
        Новый заказ
      </Typography>
      {`Чек #${check.id}`}
      <div className='newOrderButtonsWrapper'>
        <div className='newOrderButton'>
          <LargeButton
            title={'ДЕСЕРТЫ'}
            imageUrl={'/images/desserts_icon.jpg'}
            onClick={addDessertClick}
          />
        </div>
        <div className='newOrderButton'>
          <LargeButton
            title={'НАПИТКИ'}
            imageUrl={'/images/drinks_icon.jpg'}
            onClick={addDrinkClick}
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
          onClick={handleNextClick}
        >
          Продолжить
        </Button>
      </div>
      {renderCheckContent()}
      {showDrinks && (
        <DrinksComponent handleClose={() => setShowDrinks(false)} />
      )}
      {showDesserts && (
        <DessertsComponent handleClose={() => setShowDesserts(false)} />
      )}
    </div>
  );
};

export default NewOrderComponent;
