import * as React from 'react';
import CashboxComponent from '../components/CashboxComponent';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const CashboxPage: React.FunctionComponent = () => {
  return (
    <div>
      <Card className={'cardContainer'} raised>
        <CardContent>
          <CashboxComponent />
        </CardContent>
      </Card>
    </div>
  );
};

export default CashboxPage;
