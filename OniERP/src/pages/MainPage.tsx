import { Component } from 'react';
import * as React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CreateCheck, LogData, ClearError, ProcessFetchData } from '../actions';
import { Check } from '../utils/types';
import LargeButton from '../components/LargeButton';
import HistoryComponent from '../components/HistoryComponent';
import NotificationComponent from '../components/Notification';
import { Busy } from '../components/Busy';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { SPREADSHEET_ID } from '../config/keys';
import Button from '@material-ui/core/Button';

const imageUrl = require('../../public/images/main_icon.jpg');
const partnerUrl = require('../../public/images/partners_icon.jpg');

const mapStateToProps = (state) => {
  return {
    history: state.history,
    isLoading: state.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCheck: () => dispatch(CreateCheck()),
    logData: (text: string) => dispatch(LogData(text)),
    fetchData: (url) => dispatch(ProcessFetchData(url))
  };
};

const CkeckLink = props => <Link to="/check" {...props} />;
const PartnersLink = props => <Link to="/partners" {...props} />;
const OtherLink = props => <Link to="/other" {...props} />;

export interface IMainPageProps {
  history?: Array<Check>;
  isLoading?: boolean;

  createCheck?: () => void;
  logData?: (text: string) => void;
  fetchData?: (url: string) => void;
}

export class MainPage extends Component<IMainPageProps, any>{
  componentDidMount() {
    const { history } = this.props;
    if (!history || !history.length) {
      this.props.fetchData(SPREADSHEET_ID);
    };
  }

  onNewCheckClick = () => {
    this.props.createCheck();
    this.props.logData('mainPage->newCheck');
  }

  onNewPartnersCheckClick = () => {
  }

  onOtherClick = () => {
  }

  render() {
    const { isLoading } = this.props;

    return <div className="container">
      <Card className={'cardContainer'} raised>
        <CardContent classes={{ root: 'cardRoot' }}>
          <LargeButton title={'РОЗНИЧНЫЙ ЗАКАЗ'} component={CkeckLink} imageUrl={imageUrl} onClick={this.onNewCheckClick} />
        </CardContent>
      </Card>
      <Card className={'cardContainer'} raised>
        <CardContent classes={{ root: 'cardRoot' }}>
          <LargeButton title={'ОПТОВЫЙ ЗАКАЗ'} component={PartnersLink} imageUrl={partnerUrl} onClick={this.onNewPartnersCheckClick} />
        </CardContent>
      </Card>
      <div className='buttonApplyWraper'>
        <Button component={OtherLink} variant="contained" color="secondary" onClick={this.onOtherClick}>
          Расходы
        </Button>
      </div>
      <Card className={'cardContainerHistory'} raised>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            История
          </Typography>
          <HistoryComponent />
        </CardContent>
      </Card>
      <NotificationComponent />
      <Busy loading={isLoading} />
    </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
  (MainPage)
