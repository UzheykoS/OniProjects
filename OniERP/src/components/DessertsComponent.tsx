import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { AddDessert, LogData } from '../actions';
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
  EasterCakeEnum,
  IceCreamEnum,
  SorbetEnum,
  SmallCakeEnum,
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

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addDessert: (
      type: DessertType,
      taste: string,
      size: string,
      quantity: number
    ) => dispatch(AddDessert(type, taste, size, quantity)),
    logData: (text: string) => dispatch(LogData(text)),
  };
};

export interface IDessertsComponentProps {
  addDessert?: (
    type: DessertType,
    taste: string,
    size: string,
    quantity: number
  ) => void;
  handleClose?: () => void;
  logData?: (text: string) => void;
}

export interface IDessertsComponentState {
  dessertType?: DessertType;
  dessertTaste?: string;
  dessertQuantities?: { [id: string]: number };
}

export class DessertsComponent extends Component<
  IDessertsComponentProps,
  IDessertsComponentState
> {
  constructor(props) {
    super(props);

    this.state = {
      dessertType: null,
      dessertTaste: null,
      dessertQuantities: {},
    };
  }

  handleClose = () => {
    this.props.handleClose();
    this.props.logData('desserts->close');
  };

  handleDessertSelect = dessert => {
    this.setState({
      dessertType: dessert,
    });
    this.props.logData('desserts->dessertSelected->' + dessert);
  };

  handleDessertTasteSelect = async taste => {
    const { dessertType } = this.state;

    if (dessertType === DessertType.Cake) {
      if (taste === CakesEnum.Cake_2020) {
        await this.props.addDessert(dessertType, taste, '18 см', 1);
        this.props.handleClose();
      }
      this.setState({
        dessertTaste: taste,
      });
      this.props.logData('desserts->dessertTasteSelected->' + taste);
    } else {
      this.handleDessertIncrease(taste);
    }
  };

  handleDessertMixSelect = async mixType => {
    switch (mixType) {
      case MIX_MACARONS_6:
        this.handleDessertIncrease(mixType, 6);
        break;
      case MIX_MACARONS_12:
        this.handleDessertIncrease(mixType, 12);
        break;
      case MIX_MACARONS_24:
        this.handleDessertIncrease(mixType, 24);
        break;
      case MIX_ZEPHYR_8:
        this.handleDessertIncrease(mixType, 8);
        break;
      case MIX_ZEPHYR_16:
        this.handleDessertIncrease(mixType, 16);
        break;
      default:
        break;
    }
    this.props.logData('desserts->handleDessertMixSelect->' + mixType);
  };

  handleDessertMixDecrease = mixType => {
    switch (mixType) {
      case MIX_MACARONS_6:
        this.handleDessertDecrease(mixType, 6);
        break;
      case MIX_MACARONS_12:
        this.handleDessertDecrease(mixType, 12);
        break;
      case MIX_MACARONS_24:
        this.handleDessertDecrease(mixType, 24);
        break;
      case MIX_ZEPHYR_8:
        this.handleDessertDecrease(mixType, 8);
        break;
      case MIX_ZEPHYR_16:
        this.handleDessertDecrease(mixType, 16);
        break;
      default:
        break;
    }
    this.props.logData('desserts->handleDessertMixDecrease->' + mixType);
  };

  handleDessertSizeOrQuantitySelect = async sizeOrQty => {
    const { dessertType, dessertTaste } = this.state;

    if (dessertType === DessertType.Cake) {
      await this.props.addDessert(dessertType, dessertTaste, sizeOrQty, 1);
      this.props.handleClose();
      this.props.logData('desserts->dessertSizeSelected->' + sizeOrQty);
    } else {
      await this.props.addDessert(dessertType, dessertTaste, null, sizeOrQty);
      this.props.handleClose();
      this.props.logData('desserts->dessertQuantitySelected->' + sizeOrQty);
    }
  };

  handleFinish = async () => {
    const { dessertType, dessertQuantities } = this.state;

    for (const key in dessertQuantities) {
      const dessertTaste = key.split('/')[1];
      const qty = dessertQuantities[key];
      if (qty) {
        await this.props.addDessert(dessertType, dessertTaste, null, qty || 0);
      }
    }

    this.props.handleClose();
    this.props.logData('desserts->handleFinish');
  };

  getId(dessertType, dessertTaste) {
    return `${dessertType}/${dessertTaste}`;
  }

  handleDessertIncrease = (taste, qty = 1) => {
    const { dessertQuantities, dessertType } = this.state;

    const id = this.getId(dessertType, taste);
    if (!dessertQuantities[id]) {
      dessertQuantities[id] = qty;
    } else {
      dessertQuantities[id] += qty;
    }

    this.setState({
      dessertQuantities,
    });
    this.props.logData('desserts->dessertQtyIncrease->' + id);
  };

  handleDessertDecrease = (taste, qty = 1) => {
    const { dessertQuantities, dessertType } = this.state;

    const id = this.getId(dessertType, taste);
    if (dessertQuantities[id]) {
      dessertQuantities[id] -= qty;
    }

    this.setState({
      dessertQuantities,
    });
    this.props.logData('desserts->handleDessertDecrease->' + id);
  };

  countTotalDessertQuantity() {
    const { dessertQuantities, dessertType } = this.state;

    let result = 0;
    for (const key in dessertQuantities) {
      if (key.startsWith(dessertType)) {
        result += dessertQuantities[key];
      }
    }
    return result;
  }

  getDessertMixQty(value) {
    const { dessertType, dessertQuantities } = this.state;
    let result = 0;
    switch (value) {
      case MIX_MACARONS_6:
        result = dessertQuantities[this.getId(dessertType, value)] / 6;
        break;
      case MIX_MACARONS_12:
        result = dessertQuantities[this.getId(dessertType, value)] / 12;
        break;
      case MIX_MACARONS_24:
        result = dessertQuantities[this.getId(dessertType, value)] / 24;
        break;
      case MIX_ZEPHYR_8:
        result = dessertQuantities[this.getId(dessertType, value)] / 8;
        break;
      case MIX_ZEPHYR_16:
        result = dessertQuantities[this.getId(dessertType, value)] / 16;
        break;
      default:
        break;
    }
    return isNaN(result) ? 0 : result;
  }

  renderDesserts() {
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
              onClick={() => this.handleDessertSelect(d.value)}
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
            <Button
              variant='contained'
              color='secondary'
              onClick={this.handleClose}
            >
              Отмена
            </Button>
          </div>
        </List>
      </div>
    );
  }

  renderDessertTastes() {
    const { dessertType, dessertQuantities } = this.state;

    let dessertTastes;
    let extraOptions = [];
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
      case DessertType.EasterCake:
        dessertTastes = Helper.getArrayFromEnum(EasterCakeEnum);
        break;
      case DessertType.IceCream:
        dessertTastes = Helper.getArrayFromEnum(IceCreamEnum);
        break;
      case DessertType.Sorbet:
        dessertTastes = Helper.getArrayFromEnum(SorbetEnum);
        break;
      case DessertType.SmallCake:
        dessertTastes = Helper.getArrayFromEnum(SmallCakeEnum);
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
              onClick={this.handleFinish}
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
              onClick={() => this.handleDessertTasteSelect(d.value)}
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
                    ? `(${dessertQuantities[this.getId(dessertType, d.value)] ||
                        0})`
                    : '')
                }
              />
              {dessertType !== DessertType.Cake && (
                <ListItemSecondaryAction>
                  <IconButton
                    aria-label='Add'
                    classes={{ root: 'decreaseButton' }}
                    onClick={() => this.handleDessertDecrease(d.value)}
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
              onClick={() => this.handleDessertMixSelect(o.value)}
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
                primary={`${o.title}(${this.getDessertMixQty(o.value)})`}
              />
              <ListItemSecondaryAction>
                <IconButton
                  aria-label='Add'
                  classes={{ root: 'decreaseButton' }}
                  onClick={() => this.handleDessertMixDecrease(o.value)}
                >
                  {'\u2014'}
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <div className='buttonCancelWraper'>
          <Button
            variant='contained'
            color='secondary'
            onClick={this.handleClose}
          >
            Отмена
          </Button>
        </div>
      </div>
    );
  }

  renderDessertSize() {
    const { dessertType } = this.state;
    const dessertSizes = DessertsDict[dessertType];

    return (
      <div>
        <List>
          {dessertSizes.map(d => (
            <ListItem
              divider
              button
              onClick={() => this.handleDessertSizeOrQuantitySelect(d)}
              key={d}
            >
              <ListItemAvatar>
                <Avatar className='avatar'>+</Avatar>
              </ListItemAvatar>
              <ListItemText primary={d} />
            </ListItem>
          ))}
          <div className='buttonApplyWraper'>
            <Button
              variant='contained'
              color='secondary'
              onClick={this.handleClose}
            >
              Отмена
            </Button>
          </div>
        </List>
      </div>
    );
  }

  render() {
    const { dessertType, dessertTaste } = this.state;

    return (
      <Dialog
        onClose={this.handleClose}
        aria-labelledby='simple-dialog-title'
        open
        fullScreen
      >
        <DialogTitle id='simple-dialog-title'>
          {!dessertType
            ? 'Выберите Десерт'
            : !dessertTaste
            ? `Выберите вкус (${this.countTotalDessertQuantity()})`
            : 'Выберите размер'}
        </DialogTitle>
        {!dessertType
          ? this.renderDesserts()
          : !dessertTaste
          ? this.renderDessertTastes()
          : this.renderDessertSize()}
      </Dialog>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DessertsComponent);
