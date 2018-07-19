import { Component } from 'react';
import * as React from 'react'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { CreateCheck } from '../actions';
import { Check } from '../utils/types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const mapStateToProps = (state) => {
  return {
    history: state.history
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCheck: (url) => dispatch(CreateCheck())
  };
};

export interface IMainPageProps {
  history?: Array<Check>;

  createCheck?: () => void;
}

class MainPage extends Component<IMainPageProps, any>{
  onNewCheckClick = () => {
    this.props.createCheck();
  }

  renderHistory() {
    const { history } = this.props;

    return <List component="nav">
      {history.map(h => {
        return <ListItem button key={h.id}>
          <ListItemText inset primary={`Check #${h.id}, desserts count: ${h.desserts.length}, drinks count: ${h.drinks.length}`} />
        </ListItem>
      })}
    </List>;
  }

  render() {
    const { } = this.props;

    return <div className="container">
      Main Page
          <br />
      <Button variant="contained" color="primary" title="New Check" onClick={this.onNewCheckClick}>
        <Link to='/check'>New Check</Link>
      </Button>
      <br />
      HISTORY
      {this.renderHistory()}
    </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
  (MainPage)
