import { useEffect } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import LargeButton from '../components/core/LargeButton';
import HistoryComponent from '../components/HistoryComponent';
import NotificationComponent from '../components/core/Notification';
import { Busy } from '../components/Busy';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useStore, useLoader } from '../hooks';
import { getSnapshot } from 'mobx-state-tree';

const CkeckLink = props => <Link to='/check' {...props} />;
const PartnersLink = props => <Link to='/partners' {...props} />;
const OtherLink = props => <Link to='/other' {...props} />;
const CashboxLink = props => <Link to='/cashbox' {...props} />;

const MainPage: React.FunctionComponent = () => {
  const { app } = useStore();
  const history = getSnapshot(app.history);
  // const [load, state] = useLoader(app.init);

  // useEffect(() => {
  //   debugger;
  //   if (!history || !history.length) {
  //     load();
  //   }
  // }, [history]);

  const onNewCheckClick = () => {
    app.createCheck();
  };

  return (
    <div className='container'>
      <Card className={'cardContainer'} raised>
        <CardContent classes={{ root: 'cardRoot' }}>
          <LargeButton
            title={'РОЗНИЧНЫЙ ЗАКАЗ'}
            component={CkeckLink}
            imageUrl={'/images/main_icon.jpg'}
            onClick={onNewCheckClick}
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
        <Button component={CashboxLink} variant='contained' color='secondary'>
          Касса
        </Button>
      </div>
      <Card className={'cardContainerHistory'} raised>
        <CardContent>
          <Typography gutterBottom variant='headline' component='h2'>
            История
          </Typography>
          <HistoryComponent />
        </CardContent>
      </Card>
      <NotificationComponent />
      {/* <Busy loading={state.loading} /> */}
    </div>
  );
};

export default MainPage;
