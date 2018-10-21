import { Component } from 'react';
import * as React from 'react'
import { connect } from 'react-redux';
import OtherComponent from '../components/OtherComponent';
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

export interface IOtherPageProps {
}

export class OtherPage extends Component<IOtherPageProps, any>{
  render() {
    return <div>
      <Card className={'cardContainer'} raised>
        <CardContent>          
          <OtherComponent />
        </CardContent>
      </Card>
    </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
  (OtherPage)
