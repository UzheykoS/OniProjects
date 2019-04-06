import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CheckoutComponent from '../components/CheckoutComponent';

const CheckoutPage: React.FunctionComponent = () => {
  return (
    <div className='container'>
      <Card className={'cardContainer'} raised>
        <CardContent>
          <CheckoutComponent />
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckoutPage;
