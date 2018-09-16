import { Component } from 'react';
import * as React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CreateCheck, LogData } from '../actions';
import { Check } from '../utils/types';
import LargeButton from '../components/LargeButton';
import HistoryComponent from '../components/HistoryComponent';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
const imageUrl = require('../../public/images/macaron.jpg');

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

const CkeckLink = props => <Link to="/check" {...props} />;

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

  render() {
    const { } = this.props;

    return <div className="container">
      <Card className={'cardContainer'} raised>
        <CardContent classes={{ root: 'cardRoot' }}>
          <LargeButton title={'СОЗДАТЬ ЗАКАЗ'} component={CkeckLink} imageUrl={imageUrl} onClick={this.onNewCheckClick} />
        </CardContent>
      </Card>
      <Card className={'cardContainer'} raised>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            История
          </Typography>
          <HistoryComponent />
        </CardContent>
      </Card>
    </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
  (MainPage)
