import { Component } from 'react';
import * as React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CreateCheck, LogData, ClearError, ProcessFetchData } from '../actions';
import { Check } from '../utils/types';
import LargeButton from '../components/LargeButton';
import HistoryComponent from '../components/HistoryComponent';
import { Busy } from '../components/Busy';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { SPREADSHEET_ID } from '../config';

const imageUrl = require('../../public/images/main_icon.jpg');
const partnerUrl = require('../../public/images/partners_icon.jpg');

const mapStateToProps = (state) => {
  return {
    history: state.history,
    errorMessage: state.errorMessage,
    isLoading: state.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCheck: () => dispatch(CreateCheck()),
    logData: (text: string) => dispatch(LogData(text)),
    clearError: () => dispatch(ClearError()),
    fetchData: (url) => dispatch(ProcessFetchData(url))
  };
};

const CkeckLink = props => <Link to="/check" {...props} />;
const PartnersLink = props => <Link to="/partners" {...props} />;

export interface IMainPageProps {
  history?: Array<Check>;
  errorMessage?: string;
  isLoading?: boolean;

  createCheck?: () => void;
  logData?: (text: string) => void;
  clearError?: () => void;
  fetchData?: (url: string) => void;
}

class MainPage extends Component<IMainPageProps, any>{
  componentDidMount() {
    this.props.fetchData(SPREADSHEET_ID);
  }

  onNewCheckClick = () => {
    this.props.createCheck();
    this.props.logData('mainPage->newCheck');
  }

  onNewPartnersCheckClick = () => {
    this.props.createCheck();
    this.props.logData('mainPage->onNewPartnersCheckClick');
  }

  handleClose = () => {
    this.props.clearError();
  }

  render() {
    const { errorMessage, isLoading } = this.props;

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
      <Card className={'cardContainer'} raised>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            История
          </Typography>
          <HistoryComponent />
        </CardContent>
      </Card>
      <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={!!errorMessage}
            ContentProps={{
                'aria-describedby': 'message-id',
            }}
            autoHideDuration={6000}
            onClose={this.handleClose}
            message={<span id="message-id">{errorMessage}</span>}
            action={
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                className='notificationClose'
                onClick={this.handleClose}
              >
                <CloseIcon />
              </IconButton>
            }
        />
        <Busy loading={isLoading} />
    </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
  (MainPage)
