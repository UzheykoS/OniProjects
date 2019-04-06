import * as React from 'react';
import NewOrderComponent from '../components/NewOrderComponent';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const CheckPage: React.FunctionComponent = () => {
  return (
    <div>
      <Card className={'cardContainer'} raised>
        <CardContent>
          <NewOrderComponent />
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckPage;
