import { FunctionComponent, useState } from 'react';
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
import { useStore } from '../hooks';
import React from 'react';

export interface IDrinksComponentProps {
  handleClose: () => void;
}

const DrinksComponent: FunctionComponent<IDrinksComponentProps> = ({
  handleClose,
}) => {
  const { app } = useStore();

  const [drinkType, setDrinkType] = useState(null);
  const [drinkSize, setDrinkSize] = useState(null);
  const [drinkQuantities, setDrinkQuantities] = useState({});

  const getId = (drinkType, drinkSize) => {
    return `${drinkType}/${drinkSize}`;
  };

  const getCountByDrinkType = drinkType => {
    let result = 0;
    for (const key in drinkQuantities) {
      if (key.split('/')[0] === drinkType) {
        result += drinkQuantities[key];
      }
    }
    return result;
  };

  const handleBack = () => {
    setDrinkType(null);
  };

  const handleDrinkSelect = drink => {
    const drinkSizes = DrinksDict[drink];

    if (drinkSizes && drinkSizes.length === 1) {
      const id = getId(drink, drinkSizes[0]);
      if (!drinkQuantities[id]) {
        drinkQuantities[id] = 1;
      } else {
        drinkQuantities[id] += 1;
      }
      setDrinkQuantities(drinkQuantities);
    } else {
      setDrinkType(drink);
    }
  };

  const handleApply = async () => {
    for (const key in drinkQuantities) {
      const drinkType: any = key.split('/')[0];
      const drinkSize = key.split('/')[1];
      const qty = drinkQuantities[key];
      if (qty) {
        await app.addDrink({
          type: drinkType,
          size: drinkSize,
          quantity: qty || 0,
        });
      }
    }

    handleClose();
  };

  const handleDrinkIncrease = (drinkSize, qty = 1) => {
    const id = getId(drinkType, drinkSize);
    if (!drinkQuantities[id]) {
      drinkQuantities[id] = qty;
    } else {
      drinkQuantities[id] += qty;
    }
    setDrinkQuantities(drinkQuantities);
  };

  const handleDrinkDecrease = (drinkType, size?) => {
    let id;
    if (!size) {
      const drinkSizes = DrinksDict[drinkType];
      id = getId(drinkType, drinkSizes[0]);
    } else {
      id = getId(drinkType, size);
    }

    if (drinkQuantities[id]) {
      drinkQuantities[id] -= 1;
    }

    setDrinkQuantities(drinkQuantities);
  };

  const countTotalDrinkQuantity = () => {
    let result = 0;
    for (const key in drinkQuantities) {
      result += drinkQuantities[key];
    }
    return result;
  };

  const renderDrinks = () => {
    const drinkKeys = Object.keys(DrinksType);
    const drinks = drinkKeys.map(d => {
      return {
        id: d,
        value: DrinksType[d],
      };
    });

    return (
      <div className='drinksWrapper'>
        <div className='buttonApplyWraper'>
          <Button
            variant='contained'
            color='primary'
            title='Check Out'
            onClick={handleApply}
          >
            Применить
          </Button>
        </div>
        <List className='drinksListWrapper'>
          {drinks.map(d => (
            <ListItem
              divider
              button
              onClick={() => handleDrinkSelect(d.value)}
              key={d.id}
            >
              <ListItemAvatar>
                <Avatar className='drinkAvatar'>
                  {d.value.charAt(0).toUpperCase()}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${d.value}(${getCountByDrinkType(d.value)})`}
              />
              <ListItemSecondaryAction>
                <IconButton
                  aria-label='Add'
                  classes={{ root: 'decreaseButton' }}
                  onClick={() => handleDrinkDecrease(d.value)}
                >
                  {'\u2014'}
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <div className='buttonApplyWraper'>
          <Button variant='contained' color='secondary' onClick={handleClose}>
            Отмена
          </Button>
        </div>
      </div>
    );
  };

  const renderDrinkSizes = drinkType => {
    const drinkSizes = DrinksDict[drinkType];

    return (
      <div>
        <div className='buttonApplyWraper'>
          <Button
            variant='contained'
            color='primary'
            title='Check Out'
            onClick={handleApply}
          >
            Применить
          </Button>
        </div>
        <List>
          {drinkSizes.map(d => (
            <ListItem
              divider
              button
              onClick={() => handleDrinkIncrease(d)}
              key={d}
            >
              <ListItemAvatar>
                <Avatar className='drinkAvatar'>
                  {d.charAt(0).toUpperCase()}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${d}(${drinkQuantities[getId(drinkType, d)] || 0})`}
              />
              <ListItemSecondaryAction>
                <IconButton
                  aria-label='Add'
                  classes={{ root: 'decreaseButton' }}
                  onClick={() => handleDrinkDecrease(drinkType, d)}
                >
                  {'\u2014'}
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <div className='buttonApplyWraper'>
          <Button
            classes={{ root: 'button' }}
            variant='contained'
            color='default'
            title='Back'
            onClick={handleBack}
          >
            Назад
          </Button>
          <Button variant='contained' color='secondary' onClick={handleClose}>
            Отмена
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby='simple-dialog-title'
      open
      fullScreen
    >
      <DialogTitle id='simple-dialog-title'>
        {!drinkType
          ? `Выберите напиток (${countTotalDrinkQuantity()})`
          : 'Выберите размер'}
      </DialogTitle>
      {!drinkType ? renderDrinks() : renderDrinkSizes(drinkType)}
    </Dialog>
  );
};

export default DrinksComponent;
