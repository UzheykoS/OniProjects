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

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addDessert: (type: DessertType, taste: string, size: string) => dispatch(AddDessert(type, taste, size)),
    logData: (text: string) => dispatch(LogData(text))
  };
};

export interface IDessertsComponentProps {
  addDessert?: (type: DessertType, taste: string, size: string) => void;
  handleClose?: () => void;
  logData?: (text: string) => void;
}

export interface IDessertsComponentState {
  dessertType?: DessertType;
  dessertTaste?: string;
  dessertSize?: string;
}

class DessertsComponent extends Component<IDessertsComponentProps, IDessertsComponentState>{
  constructor(props) {
    super(props);

    this.state = {
      dessertType: null,
      dessertTaste: null
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
    await this.props.addDessert(dessertType, dessertTaste, size);
    this.props.handleClose();
    this.props.logData('desserts->dessertSizeSelected->' + size);
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
              <Avatar className='avatar'>
                <AddIcon />
              </Avatar>
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
    const { dessertType } = this.state;

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
      <List>
        {dessertTastes.map(d => (
          <ListItem button onClick={() => this.handleDessertTasteSelect(d.value)} key={d.id} >
            <ListItemAvatar>
              <Avatar className='avatar'>
                <AddIcon />
              </Avatar>
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
      <DialogTitle id="simple-dialog-title">{!dessertType ? 'Select dessert' : 'Select taste'}</DialogTitle>
      {!dessertType ? this.renderDesserts() : (!dessertTaste ? this.renderDessertTastes() : this.renderDessertSizes())}
    </Dialog>;
  }
}

export default (connect(mapStateToProps, mapDispatchToProps)(DessertsComponent))
