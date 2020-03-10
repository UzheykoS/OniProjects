import * as React from 'react';
import PartnersComponent from '../components/PartnersComponent';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const PartnersPage: React.FunctionComponent = () => {
  return (
    <div>
      <Card className={'cardContainer'} raised>
        <CardContent>
          <PartnersComponent />
        </CardContent>
      </Card>
    </div>
  );
};

export default PartnersPage;
