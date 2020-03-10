import * as React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import Helper from '../utils/helper';
import { Payment, OrderType, ICheck, SaleType } from '../utils/types';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ButtonWithProgress from './core/ButtonWithProgress';
import { useStore, useLoader } from '../hooks';

export interface ICheckoutComponentState {
  isLoading?: boolean;
}

const CheckoutComponent: React.FunctionComponent = props => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { app, router } = useStore();

  if (!app.check) {
    return <div className='container'>Пожалуйста, создайте сначала чек</div>;
  }

  const handleCheckout = async () => {
    setIsLoading(true);
    app.checkout();
    setIsLoading(false);
    router.push('/');
  };

  const handleCancel = () => {
    app.cancel();
    router.push('/');
  };

  const handleBack = () => {
    router.push('/check');
  };

  const handlePaymentTypeChange = (type: Payment) => {
    if (app.check) {
    }
  };

  const handleOrderTypeChange = (type: OrderType) => {
    if (app.check) {
      app.check.type = type;
    }
  };

  const handleSaleSelect = ev => {
    if (app.check) {
      app.check.sale = ev.target.value;
    }
  };

  const handleIsPaidChange = ev => {
    const isPaid = ev.target.checked;
    if (app.check) {
      app.check.isPaid = isPaid;
    }
  };

  const saleTypes = Helper.getArrayFromEnum(SaleType);

  return (
    <>
      <Typography gutterBottom variant='title'>
        Параметры чека
      </Typography>
      {/* <Divider />
            <div className="checkoutBlackFridayGroup">
                <div className="blackFridayTitle">
                    <img src={'/images/black_friday.jpg'} />
                </div>
                <div className="blackFridayPrice">: {this.calculateBlackFridayPrice()} грн.</div>
            </div> */}
      <Divider />
      <div className='checkoutControlGroup'>
        <Typography gutterBottom variant='subheading'>
          Итого: {app.totalPrice} грн.
        </Typography>
      </div>
      <Divider />
      <div className='checkoutControlGroup'>
        <Typography
          classes={{ root: 'checkoutLabel' }}
          gutterBottom
          variant='subheading'
        >
          Тип платежа:
        </Typography>
        <FormControlLabel
          control={
            <Radio
              checked={app.check.payment === Payment.Card}
              onChange={() => handlePaymentTypeChange(Payment.Card)}
              value={Payment.Card.toString()}
            />
          }
          label='Карта'
        />
        <FormControlLabel
          control={
            <Radio
              checked={app.check.payment === Payment.Cash}
              onChange={() => handlePaymentTypeChange(Payment.Cash)}
              value={Payment.Cash.toString()}
            />
          }
          label='Наличные'
        />
      </div>
      <Divider />
      <div className='checkoutControlGroup'>
        <Typography
          classes={{ root: 'checkoutLabel' }}
          gutterBottom
          variant='subheading'
        >
          Тип заказа:
        </Typography>
        <FormControlLabel
          control={
            <Radio
              checked={app.check.type === OrderType.PreOrder}
              onChange={() => handleOrderTypeChange(OrderType.PreOrder)}
              value={OrderType.PreOrder.toString()}
            />
          }
          label='Предзаказ'
        />
        <FormControlLabel
          control={
            <Radio
              checked={app.check.type === OrderType.Shop}
              onChange={() => handleOrderTypeChange(OrderType.Shop)}
              value={OrderType.Shop.toString()}
            />
          }
          label='Витрина'
        />
      </div>
      <Divider />
      <div className='saleContainer'>
        <Typography
          gutterBottom
          variant='subheading'
          style={{ paddingRight: '2rem' }}
        >
          Скидка:
        </Typography>
        <FormControl className='partnerSelectWrapper'>
          <Select
            value={app.check.sale}
            onChange={handleSaleSelect}
            inputProps={{
              name: 'sale',
              id: 'sale-select',
            }}
          >
            {saleTypes.map(p => {
              return (
                <MenuItem key={p.id} value={p.value}>
                  {p.value}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
      <Divider />
      <FormControlLabel
        classes={{ root: 'checkboxLabel' }}
        control={
          <Checkbox checked={app.check.isPaid} onChange={handleIsPaidChange} />
        }
        label='Оплачено:'
        labelPlacement='start'
      />
      <Divider />
      <div className={'buttonsWraper'}>
        <ButtonWithProgress
          loading={isLoading}
          classes={{ root: 'button' }}
          variant='contained'
          color='primary'
          title='Check Out'
          onClick={handleCheckout}
        >
          Продолжить
        </ButtonWithProgress>
        <Button
          classes={{ root: 'button' }}
          variant='contained'
          color='default'
          title='Back'
          onClick={handleBack}
        >
          Назад
        </Button>
        <Button
          classes={{ root: 'button' }}
          variant='contained'
          color='secondary'
          title='Cancel'
          onClick={handleCancel}
        >
          Отмена
        </Button>
      </div>
    </>
  );
};

export default CheckoutComponent;
