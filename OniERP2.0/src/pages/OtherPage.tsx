import * as React from 'react';
import OtherComponent from '../components/OtherComponent';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const OtherPage: React.FunctionComponent = () => {
  return (
    <div>
      <Card className={'cardContainer'} raised>
        <CardContent>
          <OtherComponent />
        </CardContent>
      </Card>
    </div>
  );
};

export default OtherPage;
