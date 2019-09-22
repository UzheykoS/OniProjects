import { Component } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link, LinkProps } from 'react-router-dom';
import {
  CreateCheck,
  LogData,
  ProcessFetchData,
  CalculateDailyPercent,
  CountDailyDrinks,
} from '../actions';
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

const mapStateToProps = state => {
  return {
    history: state.history,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createCheck: () => dispatch(CreateCheck()),
    logData: (text: string) => dispatch(LogData(text)),
    fetchData: url => dispatch(ProcessFetchData(url)),
    calculateDailyPercent: () => dispatch(CalculateDailyPercent()),
    countDailyDrinks: () => dispatch(CountDailyDrinks()),
  };
};

const CkeckLink = React.forwardRef<
  HTMLAnchorElement,
  Omit<LinkProps, 'innerRef' | 'to'>
>((props, ref) => <Link innerRef={ref} to='/check' {...props} />);
const PartnersLink = React.forwardRef<
  HTMLAnchorElement,
  Omit<LinkProps, 'innerRef' | 'to'>
>((props, ref) => <Link innerRef={ref} to='/partners' {...props} />);
const OtherLink = React.forwardRef<
  HTMLAnchorElement,
  Omit<LinkProps, 'innerRef' | 'to'>
>((props, ref) => <Link innerRef={ref} to='/other' {...props} />);
const CashboxLink = React.forwardRef<
  HTMLAnchorElement,
  Omit<LinkProps, 'innerRef' | 'to'>
>((props, ref) => <Link innerRef={ref} to='/cashbox' {...props} />);
const ProductLink = React.forwardRef<
  HTMLAnchorElement,
  Omit<LinkProps, 'innerRef' | 'to'>
>((props, ref) => <Link innerRef={ref} to='/product' {...props} />);
const WriteOffLink = React.forwardRef<
  HTMLAnchorElement,
  Omit<LinkProps, 'innerRef' | 'to'>
>((props, ref) => <Link innerRef={ref} to='/writeoff' {...props} />);

export interface IMainPageProps {
  history?: Array<Check>;
  isLoading?: boolean;

  createCheck?: () => void;
  logData?: (text: string) => void;
  fetchData?: (url: string) => void;
  calculateDailyPercent?: () => void;
  countDailyDrinks?: () => void;
}

export class MainPage extends Component<IMainPageProps, any> {
  componentDidMount() {
    const { history } = this.props;
    if (!history || !history.length) {
      this.props.fetchData(SPREADSHEET_ID);
    }
    this.props.calculateDailyPercent();
    this.props.countDailyDrinks();
  }

  onNewCheckClick = () => {
    this.props.createCheck();
    this.props.logData('mainPage->newCheck');
  };

  render() {
    const { isLoading } = this.props;

    return (
      <div className='container'>
        <Card className={'cardContainer'} raised>
          <CardContent classes={{ root: 'cardRoot' }}>
            <LargeButton
              title={'РОЗНИЧНЫЙ ЗАКАЗ'}
              component={CkeckLink}
              imageUrl={'/images/main_icon.jpg'}
              onClick={this.onNewCheckClick}
            />
          </CardContent>
        </Card>
        <Card className={'cardContainer'} raised>
          <CardContent classes={{ root: 'cardRoot' }}>
            <LargeButton
              title={'ОПТОВЫЙ ЗАКАЗ'}
              component={PartnersLink}
              imageUrl={'/images/partners_icon.jpg'}
            />
          </CardContent>
        </Card>
        <div className='buttonApplyWraper'>
          <Button component={OtherLink} variant='contained' color='secondary'>
            Расходы
          </Button>
          <Button component={ProductLink} variant='contained' color='secondary'>
            Продукция
          </Button>
          <Button
            component={WriteOffLink}
            variant='contained'
            color='secondary'
          >
            Списание
          </Button>
          <Button component={CashboxLink} variant='contained' color='secondary'>
            Касса
          </Button>
        </div>
        <Card className={'cardContainerHistory'} raised>
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              История
            </Typography>
            <HistoryComponent />
          </CardContent>
        </Card>
        <NotificationComponent />
        <Busy loading={isLoading} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
