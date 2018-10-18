import { Component } from 'react';
import * as React from 'react'
import { connect } from 'react-redux';
import NewOrderComponent from '../components/NewOrderComponent';
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

export interface ICheckPageProps {
}

export class CheckPage extends Component<ICheckPageProps, any>{
  render() {
    return <div>
      <Card className={'cardContainer'} raised>
        <CardContent>          
          <NewOrderComponent />
        </CardContent>
      </Card>
    </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
  (CheckPage)
