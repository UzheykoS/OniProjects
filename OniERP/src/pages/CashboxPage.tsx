import { Component } from 'react';
import * as React from 'react'
import { connect } from 'react-redux';
import CashboxComponent from '../components/CashboxComponent';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export interface ICashboxPageProps {
}

export class CashboxPage extends Component<ICashboxPageProps, any>{
  render() {
    return <div>
      <Card className={'cardContainer'} raised>
        <CardContent>          
          <CashboxComponent />
        </CardContent>
      </Card>
    </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
  (CashboxPage)
