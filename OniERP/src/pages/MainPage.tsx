import { Component } from 'react';
import * as React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CreateCheck, LogData, ClearError } from '../actions';
import { Check } from '../utils/types';
import LargeButton from '../components/LargeButton';
import HistoryComponent from '../components/HistoryComponent';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const imageUrl = require('../../public/images/main_icon.jpg');

const mapStateToProps = (state) => {
  return {
    history: state.history,
    errorMessage: state.errorMessage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCheck: () => dispatch(CreateCheck()),
    logData: (text: string) => dispatch(LogData(text)),
    clearError: () => dispatch(ClearError())
  };
};

const CkeckLink = props => <Link to="/check" {...props} />;

export interface IMainPageProps {
  history?: Array<Check>;
  errorMessage?: string;

  createCheck?: () => void;
  logData?: (text: string) => void;
  clearError?: () => void;
}

class MainPage extends Component<IMainPageProps, any>{
  onNewCheckClick = () => {
    this.props.createCheck();
    this.props.logData('mainPage->newCheck');
  }

  handleClose = () => {
    this.props.clearError();
  }

  render() {
    const { errorMessage } = this.props;

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
    </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
  (MainPage)
