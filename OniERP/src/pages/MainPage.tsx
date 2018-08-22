import { Component } from 'react';
import * as React from 'react'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { CreateCheck, LogData } from '../actions';
import { Check, Payment, OrderType } from '../utils/types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const mapStateToProps = (state) => {
  return {
    history: state.history
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCheck: () => dispatch(CreateCheck()),
    logData: (text: string) => dispatch(LogData(text))
  };
};

export interface IMainPageProps {
  history?: Array<Check>;

  createCheck?: () => void;
  logData?: (text: string) => void;
}

class MainPage extends Component<IMainPageProps, any>{
  onNewCheckClick = () => {
    this.props.createCheck();
    this.props.logData('mainPage->newCheck');
  }

  renderHistory() {
    const { history } = this.props;

    return <List component="nav">
      {history.map(h => {
        return <ListItem button key={h.id}>
          <ListItemText inset primary={`Check #${h.id}, desserts count: ${h.desserts.length}, drinks count: ${h.drinks.length}, pay by ${h.payment}, ordered in ${h.type}`} />
        </ListItem>
      })}
    </List>;
  }

  render() {
    const { } = this.props;

    return <div className="container">
      Main Page
          <Divider />
      <Button variant="contained" color="primary" title="New Check" onClick={this.onNewCheckClick}>
        <Link to='/check'>New Check</Link>
      </Button>
      <Divider />
      HISTORY
      {this.renderHistory()}
    </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
  (MainPage)
