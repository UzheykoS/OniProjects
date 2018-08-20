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
import { DessertsDict } from '../utils/dictionaries';
import { AddIcon } from 'mdi-react';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
const Macaron = require('../../public/images/macaron.jpg');

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
  dessertSize?: string;
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

  handleDessertTasteSelect = (taste) => {
    this.setState({
      dessertTaste: taste
    });
    this.props.logData('desserts->dessertTasteSelected->' + taste);
  }

  handleDessertSizeSelect = async (size) => {
    this.setState({
      dessertSize: size
    });

    const { dessertType, dessertTaste } = this.state;
    await this.props.addDessert(dessertType, dessertTaste, size, 0);
    this.props.handleClose();
    this.props.logData('desserts->dessertSizeSelected->' + size);
  }

  handleFinish = async () => {
    const { dessertType, dessertTaste, dessertQuantities, dessertSize } = this.state;
debugger;
    const id = this.getId(dessertType, dessertTaste);
    const qty = dessertQuantities[id];

    await this.props.addDessert(dessertType, dessertTaste, dessertSize, qty || 0);
    this.props.handleClose();
    this.props.logData('desserts->handleFinish');
  }

  getId(dessertType, dessertTaste) {
    return `${dessertType}-${dessertTaste}`;
  }

  handleDessertIncrease = (taste) => {
    const { dessertQuantities, dessertType } = this.state;

    const id = this.getId(dessertType, taste);
    if (!dessertQuantities[id]) {
      dessertQuantities[id] = 1;
    } else {
      dessertQuantities[id]++;
    }

    this.setState({
      dessertQuantities
    });
    this.props.logData('desserts->dessertQtyIncrease->' + id);
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
              <Avatar className='avatar' src={Macaron} />
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

  renderDessertTastes() {
    const { dessertType, dessertQuantities } = this.state;

    let dessertTastes;
    switch (dessertType) {
      case DessertType.Cake:
        dessertTastes = this.getArrayFromEnum(CakesEnum);
        break;
      case DessertType.Macaron:
        dessertTastes = this.getArrayFromEnum(MacaronsEnum);
        break;
      case DessertType.Zephyr:
        dessertTastes = this.getArrayFromEnum(ZephyrEnum);
        break;
      default:
        dessertTastes = [];
        break;
    };

    return <div>
      <Button variant="contained" color="primary" title="Check Out" onClick={this.handleFinish}>
        Finish
      </Button>

      <List>
        {dessertTastes.map(d => (
          <ListItem button onClick={() => this.handleDessertTasteSelect(d.value)} key={d.id} >
            <ListItemAvatar>
              <Avatar className='avatar' src={Macaron} />
            </ListItemAvatar>
            <ListItemText primary={`${d.value} (${dessertQuantities[this.getId(dessertType, d.value)] || 0})`} />
            <ListItemSecondaryAction >
              <IconButton aria-label="Add" onClick={() => this.handleDessertIncrease(d.value)}>
                <AddIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
        <ListItem button onClick={this.handleClose}>
          <ListItemText primary="Cancel" />
        </ListItem>
      </List>
    </div>;
  };

  renderDessertSizes() {
    const { dessertType } = this.state;
    const dessertSizes = DessertsDict[dessertType];

    return <div>
      <List>
        {dessertSizes.map(d => (
          <ListItem button onClick={() => this.handleDessertSizeSelect(d)} key={d} >
            <ListItemAvatar>
              <Avatar className='avatar'>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={d} />
          </ListItem>
        ))}
        <ListItem button onClick={this.handleClose}>
          <ListItemText primary="Cancel" />
        </ListItem>
      </List>
    </div>;
  };

  render() {
    const { dessertType, dessertTaste } = this.state;

    return <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={true} >
      <DialogTitle id="simple-dialog-title">
        {!dessertType ? 'Select dessert' : (!dessertTaste ? 'Select taste' : 'Select size')}
      </DialogTitle>
      {!dessertType ? this.renderDesserts() : (!dessertTaste ? this.renderDessertTastes() : this.renderDessertSizes())}
    </Dialog>;
  }
}

export default (connect(mapStateToProps, mapDispatchToProps)(DessertsComponent))
