import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import {
  DessertType,
  MacaronsEnum,
  CakesEnum,
  ZephyrEnum,
  ChouxEnum,
  CheesecakeEnum,
  MIX_MACARONS_6,
  MIX_MACARONS_12,
  MIX_MACARONS_24,
  MIX_ZEPHYR_8,
  MIX_ZEPHYR_16,
} from '../utils/types';
import {
  DessertsDict,
  MacaronsColors,
  ZephyrColors,
} from '../utils/dictionaries';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Helper from '../utils/helper';
import { useStore } from '../hooks';

export interface IDessertsComponentProps {
  handleClose: () => void;
}

const DessertsComponent: FunctionComponent<IDessertsComponentProps> = ({
  handleClose,
}) => {
  const [dessertType, setDessertType] = useState<DessertType>(
    DessertType.Macaron
  );
  const [dessertTaste, setDessertTaste] = useState<string>('');
  const [dessertQuantities, setDessertQuantities] = useState<{
    [id: string]: number;
  }>({});
  const { app, router } = useStore();

  const handleDessertSelect = dessert => {
    setDessertType(dessert);
  };

  const handleDessertTasteSelect = taste => {
    if (dessertType === DessertType.Cake) {
      if (taste === CakesEnum.Cake_2019) {
        app.addDessert({
          type: dessertType,
          taste,
          size: '18 см',
          quantity: 1,
        });
        handleClose();
      }
      setDessertTaste(taste);
    } else {
      handleDessertIncrease(taste);
    }
  };

  const handleDessertMixSelect = async mixType => {
    switch (mixType) {
      case MIX_MACARONS_6:
        handleDessertIncrease(mixType, 6);
        break;
      case MIX_MACARONS_12:
        handleDessertIncrease(mixType, 12);
        break;
      case MIX_MACARONS_24:
        handleDessertIncrease(mixType, 24);
        break;
      case MIX_ZEPHYR_8:
        handleDessertIncrease(mixType, 8);
        break;
      case MIX_ZEPHYR_16:
        handleDessertIncrease(mixType, 16);
        break;
      default:
        break;
    }
  };

  const handleDessertMixDecrease = mixType => {
    switch (mixType) {
      case MIX_MACARONS_6:
        handleDessertDecrease(mixType, 6);
        break;
      case MIX_MACARONS_12:
        handleDessertDecrease(mixType, 12);
        break;
      case MIX_MACARONS_24:
        handleDessertDecrease(mixType, 24);
        break;
      case MIX_ZEPHYR_8:
        handleDessertDecrease(mixType, 8);
        break;
      case MIX_ZEPHYR_16:
        handleDessertDecrease(mixType, 16);
        break;
      default:
        break;
    }
  };

  const handleDessertSizeOrQuantitySelect = sizeOrQty => {
    if (dessertType === DessertType.Cake) {
      app.addDessert({
        type: dessertType,
        taste: dessertTaste,
        size: sizeOrQty,
        quantity: 1,
      });
      handleClose();
    } else {
      app.addDessert({
        type: dessertType,
        taste: dessertTaste,
        size: null,
        quantity: sizeOrQty,
      });
      handleClose();
    }
  };

  const handleFinish = async () => {
    for (const key in dessertQuantities) {
      const dessertTaste = key.split('/')[1];
      const qty = dessertQuantities[key];
      if (qty) {
        await app.addDessert({
          type: dessertType,
          taste: dessertTaste,
          size: null,
          quantity: qty || 0,
        });
      }
    }

    handleClose();
  };

  const getId = (dessertType, dessertTaste) => {
    return `${dessertType}/${dessertTaste}`;
  };

  const handleDessertIncrease = (taste, qty = 1) => {
    const id = getId(dessertType, taste);
    if (!dessertQuantities[id]) {
      dessertQuantities[id] = qty;
    } else {
      dessertQuantities[id] += qty;
    }

    setDessertQuantities(dessertQuantities);
  };

  const handleDessertDecrease = (taste, qty = 1) => {
    const id = getId(dessertType, taste);
    if (dessertQuantities[id]) {
      dessertQuantities[id] -= qty;
    }

    setDessertQuantities(dessertQuantities);
  };

  const countTotalDessertQuantity = () => {
    let result = 0;
    for (const key in dessertQuantities) {
      if (key.startsWith(dessertType)) {
        result += dessertQuantities[key];
      }
    }
    return result;
  };

  const getDessertMixQty = value => {
    let result = 0;
    switch (value) {
      case MIX_MACARONS_6:
        result = dessertQuantities[getId(dessertType, value)] / 6;
        break;
      case MIX_MACARONS_12:
        result = dessertQuantities[getId(dessertType, value)] / 12;
        break;
      case MIX_MACARONS_24:
        result = dessertQuantities[getId(dessertType, value)] / 24;
        break;
      case MIX_ZEPHYR_8:
        result = dessertQuantities[getId(dessertType, value)] / 8;
        break;
      case MIX_ZEPHYR_16:
        result = dessertQuantities[getId(dessertType, value)] / 16;
        break;
      default:
        break;
    }
    return isNaN(result) ? 0 : result;
  };

  const renderDesserts = () => {
    const dessertKeys = Object.keys(DessertType);
    const desserts = dessertKeys.map(d => {
      return {
        id: d,
        value: DessertType[d],
      };
    });

    return (
      <div>
        <List>
          {desserts.map(d => (
            <ListItem
              divider
              button
              onClick={() => handleDessertSelect(d.value)}
              key={d.id}
            >
              <ListItemAvatar>
                <Avatar
                  className='macaronAvatar'
                  style={{ backgroundColor: '#dd73e2' }}
                >
                  {d.value.charAt(0).toUpperCase()}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={d.value} />
            </ListItem>
          ))}
          <div className='buttonApplyWraper'>
            <Button variant='contained' color='secondary' onClick={handleClose}>
              Отмена
            </Button>
          </div>
        </List>
      </div>
    );
  };

  const renderDessertTastes = () => {
    let dessertTastes;
    const extraOptions: Array<{
      value: string;
      title: string;
      avatar: number;
    }> = [];
    switch (dessertType) {
      case DessertType.Cake:
        dessertTastes = Helper.getArrayFromEnum(CakesEnum);
        break;
      case DessertType.Macaron:
        dessertTastes = Helper.getArrayFromEnum(MacaronsEnum);
        extraOptions.push({
          value: MIX_MACARONS_6,
          title: MIX_MACARONS_6,
          avatar: 6,
        });
        extraOptions.push({
          value: MIX_MACARONS_12,
          title: MIX_MACARONS_12,
          avatar: 12,
        });
        extraOptions.push({
          value: MIX_MACARONS_24,
          title: MIX_MACARONS_24,
          avatar: 24,
        });
        break;
      case DessertType.Zephyr:
        dessertTastes = Helper.getArrayFromEnum(ZephyrEnum);
        extraOptions.push({
          value: MIX_ZEPHYR_8,
          title: MIX_ZEPHYR_8,
          avatar: 8,
        });
        extraOptions.push({
          value: MIX_ZEPHYR_16,
          title: MIX_ZEPHYR_16,
          avatar: 16,
        });
        break;
      case DessertType.Choux:
        dessertTastes = Helper.getArrayFromEnum(ChouxEnum);
        break;
      case DessertType.Cheesecake:
        dessertTastes = Helper.getArrayFromEnum(CheesecakeEnum);
        break;
      default:
        dessertTastes = [];
        break;
    }

    return (
      <div className='dessertsTastesWrapper'>
        {dessertType !== DessertType.Cake && (
          <div className='buttonApplyWraper'>
            <Button
              variant='contained'
              color='primary'
              title='Check Out'
              onClick={handleFinish}
            >
              Применить
            </Button>
          </div>
        )}
        <List className='dessertsTastesListWrapper'>
          {dessertTastes.map(d => (
            <ListItem
              divider
              button
              onClick={() => handleDessertTasteSelect(d.value)}
              key={d.id}
            >
              <ListItemAvatar>
                <Avatar
                  className='macaronAvatar'
                  style={{
                    backgroundColor:
                      dessertType === DessertType.Macaron
                        ? MacaronsColors[d.value]
                        : ZephyrColors[d.value],
                  }}
                >
                  {d.value.charAt(0).toUpperCase()}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  d.value +
                  (dessertType !== DessertType.Cake
                    ? `(${dessertQuantities[getId(dessertType, d.value)] || 0})`
                    : '')
                }
              />
              {dessertType !== DessertType.Cake && (
                <ListItemSecondaryAction>
                  <IconButton
                    aria-label='Add'
                    classes={{ root: 'decreaseButton' }}
                    onClick={() => handleDessertDecrease(d.value)}
                  >
                    {'\u2014'}
                  </IconButton>
                </ListItemSecondaryAction>
              )}
            </ListItem>
          ))}
          {extraOptions.map(o => (
            <ListItem
              divider
              button
              onClick={() => handleDessertMixSelect(o.value)}
              key={o.value}
            >
              <ListItemAvatar>
                <Avatar
                  className='macaronAvatar'
                  style={{ backgroundColor: '#B3B3B3' }}
                >
                  {o.avatar}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${o.title}(${getDessertMixQty(o.value)})`}
              />
              <ListItemSecondaryAction>
                <IconButton
                  aria-label='Add'
                  classes={{ root: 'decreaseButton' }}
                  onClick={() => handleDessertMixDecrease(o.value)}
                >
                  {'\u2014'}
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <div className='buttonCancelWraper'>
          <Button variant='contained' color='secondary' onClick={handleClose}>
            Отмена
          </Button>
        </div>
      </div>
    );
  };

  const renderDessertSize = () => {
    const dessertSizes = DessertsDict[dessertType];

    return (
      <div>
        <List>
          {dessertSizes.map(d => (
            <ListItem
              divider
              button
              onClick={() => handleDessertSizeOrQuantitySelect(d)}
              key={d}
            >
              <ListItemAvatar>
                <Avatar className='avatar'>+</Avatar>
              </ListItemAvatar>
              <ListItemText primary={d} />
            </ListItem>
          ))}
          <div className='buttonApplyWraper'>
            <Button variant='contained' color='secondary' onClick={handleClose}>
              Отмена
            </Button>
          </div>
        </List>
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
        {!dessertType
          ? 'Выберите Десерт'
          : !dessertTaste
          ? `Выберите вкус (${countTotalDessertQuantity()})`
          : 'Выберите размер'}
      </DialogTitle>
      {!dessertType
        ? renderDesserts()
        : !dessertTaste
        ? renderDessertTastes()
        : renderDessertSize()}
    </Dialog>
  );
};

export default DessertsComponent;
