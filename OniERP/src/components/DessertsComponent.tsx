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
import { DessertType, MacaronsEnum, CakesEnum, ZephyrEnum } from '../utils/types';
import { DessertsDict, MacaronsColors, ZephyrColors } from '../utils/dictionaries';
import { AddIcon } from 'mdi-react';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

const MIX_TASTE_NAME = 'Набор';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addDessert: (type: DessertType, taste: string, size: string, quantity: number) => dispatch(AddDessert(type, taste, size, quantity)),
    logData: (text: string) => dispatch(LogData(text))
  };
};

export interface IDessertsComponentProps {
  addDessert?: (type: DessertType, taste: string, size: string, quantity: number) => void;
  handleClose?: () => void;
  logData?: (text: string) => void;
}

export interface IDessertsComponentState {
  dessertType?: DessertType;
  dessertTaste?: string;
  dessertQuantities?: { [id: string]: number; };
}

class DessertsComponent extends Component<IDessertsComponentProps, IDessertsComponentState>{
  constructor(props) {
    super(props);

    this.state = {
      dessertType: null,
      dessertTaste: null,
      dessertQuantities: {}
    }
  }

  handleClose = () => {
    this.props.handleClose();
    this.props.logData('desserts->close');
  }

  handleDessertSelect = (dessert) => {
    this.setState({
      dessertType: dessert
    });
    this.props.logData('desserts->dessertSelected->' + dessert);
  }

  handleDessertTasteSelect = async (taste) => {
    const { dessertType } = this.state;

    if (dessertType === DessertType.Cake) {
      this.setState({
        dessertTaste: taste
      });
      this.props.logData('desserts->dessertTasteSelected->' + taste);
    } else {
      this.handleDessertIncrease(taste);
    }
  }

  handleDessertMixSelect = async (qty) => {
    this.handleDessertIncrease(MIX_TASTE_NAME, qty);
    // await this.props.addDessert(dessertType, MIX_TASTE_NAME, null, qty);
    this.props.logData('desserts->handleDessertMixSelect->' + qty);
  }

  handleDessertSizeOrQuantitySelect = async (sizeOrQty) => {
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
  }

  handleFinish = async () => {
    const { dessertType, dessertQuantities } = this.state;

    for (const key in dessertQuantities) {
      const dessertTaste = key.split('/')[1];
      const qty = dessertQuantities[key];
      await this.props.addDessert(dessertType, dessertTaste, null, qty || 0);
    }

    this.props.handleClose();
    this.props.logData('desserts->handleFinish');
  }

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
      dessertQuantities
    });
    this.props.logData('desserts->dessertQtyIncrease->' + id);
  }

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

  getArrayFromEnum(en: any) {
    const keys = Object.keys(en);
    const values = keys.map(d => {
      return {
        id: d,
        value: en[d]
      }
    })
    return values;
  }

  renderDesserts() {
    const dessertKeys = Object.keys(DessertType);
    const desserts = dessertKeys.map(d => {
      return {
        id: d,
        value: DessertType[d]
      }
    });

    return <div>
      <List>
        {desserts.map(d => (
          <ListItem button onClick={() => this.handleDessertSelect(d.value)} key={d.id} >
            <ListItemAvatar>
              <Avatar className='macaronAvatar' style={{ backgroundColor: '#dd73e2' }}>
                {d.value.charAt(0).toUpperCase()}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={d.value} />
          </ListItem>
        ))}
        <div className='buttonApplyWraper'>
          <Button variant="contained" color="secondary" onClick={this.handleClose}>
            Отмена
          </Button>
        </div>
      </List>
    </div>;
  };

  renderDessertTastes() {
    const { dessertType, dessertQuantities } = this.state;

    let dessertTastes;
    let extraOptions = [];
    switch (dessertType) {
      case DessertType.Cake:
        dessertTastes = this.getArrayFromEnum(CakesEnum);
        break;
      case DessertType.Macaron:
        dessertTastes = this.getArrayFromEnum(MacaronsEnum);
        extraOptions.push({
          value: 6,
          title: 'Набор на 6 шт.'
        });
        extraOptions.push({
          value: 12,
          title: 'Набор на 12 шт.'
        });
        extraOptions.push({
          value: 24,
          title: 'Набор на 24 шт.'
        });
        break;
      case DessertType.Zephyr:
        dessertTastes = this.getArrayFromEnum(ZephyrEnum);
        extraOptions.push({
          value: 8,
          title: 'Набор на 8 шт.'
        });
        extraOptions.push({
          value: 16,
          title: 'Набор на 16 шт.'
        });
        break;
      default:
        dessertTastes = [];
        break;
    };

    return <div>
      {dessertType !== DessertType.Cake && (
        <div className='buttonApplyWraper'>
          <Button variant="contained" color="primary" title="Check Out" onClick={this.handleFinish}>
            Применить
          </Button>
        </div>
      )}
      <List>
        {
          dessertTastes.map(d => (
            <ListItem button onClick={() => this.handleDessertTasteSelect(d.value)} key={d.id} >
              <ListItemAvatar>
                <Avatar className='macaronAvatar' style={{ backgroundColor: dessertType === DessertType.Macaron ? MacaronsColors[d.value] : ZephyrColors[d.value] }}>
                  {d.value.charAt(0).toUpperCase()}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={d.value + (dessertType !== DessertType.Cake ? `(${dessertQuantities[this.getId(dessertType, d.value)] || 0})` : '')} />
              {dessertType !== DessertType.Cake && (
                <ListItemSecondaryAction >
                  <IconButton aria-label="Add" onClick={() => this.handleDessertIncrease(d.value)}>
                    <AddIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              )}
            </ListItem>
          ))
        }
        {
          extraOptions.map(o => (
            <ListItem button onClick={() => this.handleDessertMixSelect(o.value)} key={o.value} >
              <ListItemAvatar>
                <Avatar className='macaronAvatar' style={{ backgroundColor: '#dd73e2' }}>
                  {o.value}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={`${o.title}(${dessertQuantities[this.getId(dessertType, MIX_TASTE_NAME)] || 0})`} />
            </ListItem>
          ))
        }
        <div className='buttonApplyWraper'>
          <Button variant="contained" color="secondary" onClick={this.handleClose}>
            Отмена
          </Button>
        </div>
      </List>
    </div>;
  };

  renderDessertSize() {
    const { dessertType } = this.state;
    const dessertSizes = DessertsDict[dessertType];

    return <div>
      <List>
        {dessertSizes.map(d => (
          <ListItem button onClick={() => this.handleDessertSizeOrQuantitySelect(d)} key={d} >
            <ListItemAvatar>
              <Avatar className='avatar'>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={d} />
          </ListItem>
        ))}
        <div className='buttonApplyWraper'>
          <Button variant="contained" color="secondary" onClick={this.handleClose}>
            Отмена
          </Button>
        </div>
      </List>
    </div>;
  };

  render() {
    const { dessertType, dessertTaste } = this.state;

    return <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open fullScreen >
      <DialogTitle id="simple-dialog-title">
        {!dessertType ? 'Выберите Десерт' : (!dessertTaste ? `Выберите вкус (${this.countTotalDessertQuantity()})` : 'Выберите размер')}
      </DialogTitle>
      {!dessertType ? this.renderDesserts() : (!dessertTaste ? this.renderDessertTastes() : this.renderDessertSize())}
    </Dialog>;
  }
}

export default (connect(mapStateToProps, mapDispatchToProps)(DessertsComponent))
